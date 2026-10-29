import { MetadataRoute } from "next";
import { execFileSync } from "child_process";
import { PAGES, urlPage } from "@/lib/seo";

export const dynamic = "force-static";

/* Plan du site : hote sans www, barre finale, une vraie date par page.

   lastmod = date du dernier commit qui a touche les fichiers de la page
   (`sources` dans lib/seo.ts), ou la date du jour si ces fichiers ont des
   modifications pas encore commitees au moment du build. Avant, chaque URL
   portait l'heure du build : Google ignore alors ces dates. Sans git (build
   hors depot), la date est omise plutot qu'inventee. */

function git(args: string[]): string {
  return execFileSync("git", args, { cwd: process.cwd(), encoding: "utf8" }).trim();
}

function derniereModification(sources: string[]): string | undefined {
  try {
    if (git(["status", "--porcelain", "--", ...sources]) !== "") {
      return new Date().toISOString().slice(0, 10);
    }
    return git(["log", "-1", "--format=%cs", "--", ...sources]) || undefined;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((page) => ({
    url: urlPage(page.chemin),
    lastModified: derniereModification(page.sources),
    priority: page.prioritePlan,
  }));
}
