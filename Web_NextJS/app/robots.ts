import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/* /_next/ n'est plus interdit : c'est la que sont le CSS, le JavaScript et les
   polices. Google doit les charger pour voir les pages telles qu'elles
   s'affichent (constat T2 de l'audit du 29/10/2026). */

/* Moteurs de reponse par IA (ChatGPT, Perplexity, Claude, Gemini, Apple) :
   ils sont nommes pour dire clairement qu'ils sont les bienvenus, avec les
   memes regles que les autres. Un robot qui trouve son nom ici ne lit que son
   groupe, d'ou la meme liste d'interdits. Le site resume aussi l'entreprise
   pour eux dans /llms.txt. */
const ROBOTS_IA = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
];

const INTERDITS = ["/api/", "/private/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: INTERDITS },
      { userAgent: ROBOTS_IA, allow: "/", disallow: INTERDITS },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
