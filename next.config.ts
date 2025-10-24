import type { NextConfig } from "next";

const isExportMode = process.env.NEXT_EXPORT === 'true';

const nextConfig: NextConfig = {
    productionBrowserSourceMaps: false,
    reactStrictMode: false,

    // Configuration pour l'export statique (activé via variable d'environnement)
    ...(isExportMode && {
        output: 'export',
        trailingSlash: true,
        images: {
            unoptimized: true,
        },
    }),

    // 🛡️ Headers de sécurité (désactivés en mode export car gérés par le serveur web)
    ...(!isExportMode && {
        async headers() {
            return [
            {
                // Appliquer les headers de sécurité à toutes les routes
                source: '/(.*)',
                headers: [
                    // Protection contre le clickjacking
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    // Protection contre les attaques XSS
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    // Empêcher le navigateur de deviner le type MIME
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    // Politique de référent stricte
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    // Headers de permissions (Feature Policy)
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
                    },
                    // Content Security Policy (CSP)
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js a besoin d'unsafe-inline pour le dev
                            "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
                            "img-src 'self' data: https:",
                            "font-src 'self' fonts.gstatic.com data:",
                            "connect-src 'self' api.resend.com",
                            "frame-src 'none'",
                            "object-src 'none'",
                            "base-uri 'self'",
                            "form-action 'self'",
                            "frame-ancestors 'none'",
                            "upgrade-insecure-requests"
                        ].join('; ')
                    }
                ]
            },
            {
                // Headers spécifiques pour les APIs
                source: '/api/(.*)',
                headers: [
                    {
                        key: 'X-API-Security',
                        value: 'protected'
                    },
                    // Pas de mise en cache pour les APIs sensibles
                    {
                        key: 'Cache-Control',
                        value: 'no-store, no-cache, must-revalidate, proxy-revalidate'
                    },
                    {
                        key: 'Pragma',
                        value: 'no-cache'
                    },
                    {
                        key: 'Expires',
                        value: '0'
                    }
                ]
            }
        ];
        },
    }),
};

export default nextConfig;
