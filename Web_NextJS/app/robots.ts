import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/* /_next/ n'est plus interdit : c'est la que sont le CSS, le JavaScript et les
   polices. Google doit les charger pour voir les pages telles qu'elles
   s'affichent (constat T2 de l'audit du 29/10/2026). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
