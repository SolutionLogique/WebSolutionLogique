# Redirections à ajouter au déploiement

La refonte supprime quatre URL. Les redirections **doivent** être posées côté
serveur : le site est exporté en statique (`output: 'export'`), ce qui rend
`next.config.redirects()` inopérant. `www/.htaccess` est le seul emplacement
possible.

## Bloc à coller

À ajouter dans `www/.htaccess`, **après** la règle HTTPS existante :

```apache
# Refonte 2026-08 : pages fusionnees ou dedoublonnees
Redirect 301 /formationCompta       /ebpcomptabilite
Redirect 301 /formationCommerciale  /ebpgestionco
Redirect 301 /formationBatiment     /ebpbatiment
Redirect 301 /home                  /
```

## Pourquoi chacune

| URL supprimée | Cible | Raison |
|---|---|---|
| `/formationCompta` | `/ebpcomptabilite` | La formation est devenue un bloc de la page du logiciel (ancre `#formation`), plutôt qu'une offre isolée. |
| `/formationCommerciale` | `/ebpgestionco` | idem |
| `/formationBatiment` | `/ebpbatiment` | idem |
| `/home` | `/` | `app/page.tsx` importait `app/home/page.tsx` : le même contenu était servi à deux URL. Contenu dupliqué du point de vue du référencement. |

Les liens internes pointent déjà vers `/ebpcomptabilite#formation` et
consorts. Les redirections servent aux liens externes, aux favoris et à
l'index des moteurs de recherche.

## Vérification après mise en ligne

```bash
curl -sI https://www.solution-logique.fr/formationCompta | head -2
# attendu : HTTP/1.1 301 ... puis Location: /ebpcomptabilite
```

À contrôler pour les quatre URL. Vérifier aussi que le formulaire de contact
fonctionne toujours : il poste vers `solutionlogique.vercel.app`, pas vers le
site statique.

## Rappel de la procédure

Le déploiement se fait **en écrasement, sans vider `/www`** — voir le README.
Seul `www/_next` peut être supprimé avant l'envoi, étant intégralement
régénéré par le build.
