import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.solution-logique.fr'

  // Liste des pages principales du site
  const routes = [
    '',
    '/nosServices',
    '/contact',
    '/telemaintenance',
    '/informatique',
    '/telecom',
    '/securite',
    '/logiciels',
    '/formationCommerciale',
    '/formationCompta',
    '/formationBatiment',
    '/ebpcomptabilite',
    '/ebpgestionco',
    '/ebpbatiment',
    '/engagementHandicap',
    '/conditionsGeneralesVente',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('formation') || route.includes('ebp') ? 0.8 : 0.5,
  }))
}
