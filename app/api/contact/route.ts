import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '../../../components/email-template';
import { 
  checkRateLimit, 
  getClientIP, 
  sanitizeAndValidateContactData, 
  logSecurityEvent 
} from '../../../lib/security';

// Configuration des en-têtes CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Max-Age': '86400',
};

// Resend client initialized lazily in POST handler

// Fonction pour gérer les requêtes preflight OPTIONS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function POST(req: Request) {
  const clientIP = getClientIP(req);
  const userAgent = req.headers.get('user-agent') || 'unknown';

  try {
    // 🛡️ ÉTAPE 1: Vérification du rate limiting
    const rateLimitResult = checkRateLimit(clientIP, {
      maxRequests: 3, // 3 messages max
      windowMs: 15 * 60 * 1000, // par tranche de 15 minutes
      blockDurationMs: 60 * 60 * 1000, // blocage 1h si dépassé
    });

    if (!rateLimitResult.success) {
      logSecurityEvent('rate_limit', {
        ip: clientIP,
        userAgent,
        endpoint: '/api/contact',
        data: { remaining: rateLimitResult.remaining, isBlocked: rateLimitResult.isBlocked },
      });

      if (rateLimitResult.isBlocked) {
        return NextResponse.json(
          { 
            message: 'Trop de tentatives. Votre IP est temporairement bloquée.',
            resetTime: rateLimitResult.resetTime 
          },
          { 
            status: 429,
            headers: corsHeaders
          }
        );
      } else {
        return NextResponse.json(
          { 
            message: `Limite atteinte. Attendez avant de renvoyer un message. (${rateLimitResult.remaining} restantes)`,
            resetTime: rateLimitResult.resetTime 
          },
          { 
            status: 429,
            headers: corsHeaders
          }
        );
      }
    }

    // 🛡️ ÉTAPE 2: Parsing et validation sécurisée des données
    const body = await req.json();
    
    // 🛡️ ÉTAPE 2.1: Vérification honeypot côté serveur
    if (body.website && body.website.trim().length > 0) {
      logSecurityEvent('spam_detected', {
        ip: clientIP,
        userAgent,
        endpoint: '/api/contact',
        data: { honeypot: body.website, type: 'honeypot_filled' },
      });

      return NextResponse.json(
        { message: 'Erreur de validation du formulaire.' },
        { 
          status: 400,
          headers: corsHeaders
        }
      );
    }
    
    const validation = sanitizeAndValidateContactData(body);
    
    if (!validation.isValid) {
      logSecurityEvent('invalid_input', {
        ip: clientIP,
        userAgent,
        endpoint: '/api/contact',
        data: { errors: validation.errors, originalData: body },
      });

      return NextResponse.json(
        { message: `Données invalides: ${validation.errors.join(', ')}` },
        { 
          status: 400,
          headers: corsHeaders
        }
      );
    }

    const { name, email, message, phone } = validation.sanitizedData!;

    if (!process.env.RESEND_API_KEY) {
      console.error('Clé API Resend non configurée');
      return NextResponse.json(
        { message: 'Service de messagerie non configuré. Veuillez contacter l\'administrateur.' },
        { 
          status: 500,
          headers: corsHeaders
        }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'Solution Logique <site@solution-logique.fr>',
      to: ['site@solution-logique.fr'],
      subject: `Nouveau message de contact - ${name}`,
      react: ContactEmailTemplate({ 
        name, 
        email, 
        phone, 
        message 
      }),
      replyTo: email,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { message: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.' },
        { 
          status: 500,
          headers: corsHeaders
        }
      );
    }

    console.log('Email envoyé avec succès:', data);

    return NextResponse.json(
      { message: 'Message envoyé avec succès !' },
      { 
        status: 200,
        headers: corsHeaders
      }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.' },
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
} 