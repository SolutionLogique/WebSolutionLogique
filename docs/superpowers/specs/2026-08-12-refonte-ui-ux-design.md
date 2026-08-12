# Refonte UI/UX — Site Solution Logique

**Date** : 2026-08-12
**Périmètre** : `Web_NextJS/` — design system, navigation, architecture de l'information, pages
**Contrainte cardinale** : conserver l'intégralité du contenu existant. Aucun texte n'est supprimé sauf mention explicite dans ce document.

---

## 1. Pourquoi cette refonte

Le site fonctionne mais souffre de défauts structurels qui se voient en production. L'audit du 2026-08-12 a établi une chaîne causale unique : la police prévue ne se charge pas et l'échelle de couleurs est inutilisable, donc chaque page a été stylée à l'œil avec des valeurs en dur, d'où deux familles de composants concurrentes, cinquante classes CSS maison et des surcharges partout.

On ne corrige pas ça page par page. On refait les fondations, les pages suivent.

### Constats retenus

**Bugs visibles en production**

| Constat | Portée |
|---|---|
| Liens de nav en blanc sur fond blanc, illisibles | 12 pages sur 17 |
| Barre de nav `fixed` chevauchant les titres H1 | 12 pages |
| Badge flottant « Sécurité Renforcée » masquant un paragraphe | Accueil |
| Logo à encre foncée posé sur hero bleu nuit, illisible | Toutes |
| Mobile : aucun appel à l'action au-dessus de la ligne de flottaison | Accueil |

**Fondations**

- La police Inter est déclarée dans `tailwind.config.ts` et dans `body`, mais n'est jamais téléchargée : ni `next/font`, ni `@font-face`, ni lien Google Fonts. Vérifié au navigateur — seules les polices internes de Next.js sont chargées. Le site rend en Segoe UI sur Windows, San Francisco sur macOS. **Il n'a jamais été vu tel qu'il a été conçu.**
- L'échelle `primary` est non monotone : les nuances 50→400 sont de l'indigo (`#818cf8`), la 500 saute sur un bleu roi foncé (`#1e40af`). `primary-400` est donc plus clair que `primary-500`, avec changement de teinte. Tout dégradé ou survol bâti dessus vire au terne.
- Trois systèmes de style cohabitent : utilitaires Tailwind en ligne, ~50 classes maison dans `globals.css` (545 lignes), modules SCSS actifs sur 3 pages.
- Deux familles de composants en service simultané : `Button` (11 fichiers) et `modernButton` (7), `Card` (4) et `modernCard` (5), `Section` (6) et `modernSection` (1).
- Règles globales forçant des contournements : `p` en gris atténué par défaut, `a` en bleu partout — d'où l'existence d'une classe `.force-white-title`.

**Accessibilité**

- Menu déroulant « Services » : ouverture au survol uniquement, zéro attribut ARIA sur 6 liens. Inutilisable au clavier ; au tactile, le tap navigue sans jamais ouvrir le sous-menu.
- Deux balises `<main>` sur la page d'accueil.
- Hiérarchie de titres discontinue : H1 → H3 → H2.
- Pas de lien d'évitement. Règle globale `* { max-width: 100% }`.

**Architecture de l'information**

- 7 pages ne sont référencées ni dans la nav ni dans le pied de page : les 3 logiciels EBP, les 3 formations, `engagementHandicap`. Elles ne sont atteignables que depuis un lien interne de `/logiciels`.
- `engagementHandicap` est introuvable alors que la certification Qualiopi impose de rendre cet engagement accessible.
- `/` et `/home` servent un contenu identique (`app/page.tsx` importe `app/home/page.tsx`) : contenu dupliqué à deux URL.

**Contenu**

- Témoignages signés « Marie Dupont », « Jean-Luc Bernard », « Sophie Laurent » — noms fictifs en production.
- Les partenaires apparaissent deux fois sur l'accueil.
- Cartes de services en six accents différents, sans logique de hiérarchie.

---

## 2. Objectifs

Les quatre sont poursuivis simultanément, par décision du commanditaire :

1. **Convertir** — faire décrocher le téléphone et remplir le formulaire
2. **Crédibiliser** — rassurer une PME qui compare des prestataires
3. **Moderniser** — sortir de l'apparence générique
4. **Assainir** — design system maintenable et accessible

**Tension identifiée** : « distinctif » et « rassurant » tirent en sens inverse. Arbitrée en faveur du rassurant, par le choix de la direction B (§4).

---

## 3. Contraintes

| Contrainte | Conséquence de conception |
|---|---|
| **Logo figé, et disponible en une seule version** | `public/assets/logo.webp` est l'unique fichier : pas de variante blanche. Le motif étant un dégradé bleu/turquoise multicolore, une inversion CSS le dénaturerait. **Conséquence de conception : aucune surface sombre ne porte le logo.** Le pied de page passe donc en clair (`sand-100`), ce qui sert par ailleurs le registre chaleureux de la direction B. Si une version blanche est fournie plus tard, un pied de page sombre redevient possible. |
| **Aucune photo d'équipe ou de locaux** | Le design doit tenir sans imagerie. La typographie et la structure portent la crédibilité. |
| **Aucun témoignage client réel** | La section témoignages est supprimée plutôt que maquillée. Les certifications prennent le relais. |
| **Aucun logo client diffusable** | Seuls les logos partenaires (EBP, Microsoft, Dell, Qualiopi) sont utilisés — ils sont réels et déjà en ligne. |
| **Export statique** (`output: 'export'`) | Les redirections `next.config` sont inopérantes. Les 301 passent obligatoirement par `www/.htaccess`. |
| **Déploiement par écrasement** | Le `www/` se met à jour en overlay, sans suppression, sauf `www/_next` (voir README). |

---

## 4. Direction artistique retenue

**Direction B — « Bleu confiance, neutres chauds »**, retenue parmi trois propositions.

Le bleu de la marque reste le pilier. Les gris froids cèdent la place à des neutres sable, ce qui réchauffe l'ensemble sans toucher au logo. Cartes douces, ombres légères, aplats unis. C'est la direction la moins dépaysante pour la clientèle existante, et celle qui équilibre le mieux confiance et proximité.

**Écartées** : « Éditorial technique » (plus distinctive mais risque d'austérité), « Contraste technique dark-first » (positionne en startup plutôt qu'en partenaire installé).

---

## 5. Design tokens

### 5.1 Couleurs

**Bleu — `primary`** (ancré sur le bleu du logo)

| Nuance | Hex | Nuance | Hex |
|---|---|---|---|
| 50 | `#F0F5FA` | 500 | `#366BA3` |
| 100 | `#DCE8F3` | **600** | **`#14487F`** |
| 200 | `#BBD1E7` | 700 | `#113A67` |
| 300 | `#8FB2D5` | 800 | `#0E2E51` |
| 400 | `#5C8CBE` | 900 | `#0B2340` |
|  |  | 950 | `#06172B` |

**Turquoise — `accent`** (rappel du logo, en touches rares)

| Nuance | Hex | Nuance | Hex |
|---|---|---|---|
| 50 | `#EFFAFB` | 500 | `#1B9AAA` |
| 100 | `#D3F2F5` | 600 | `#14808F` |
| 200 | `#A8E5EB` | 700 | `#146673` |
| 300 | `#71D1DB` | 800 | `#15525C` |
| 400 | `#3FB6C4` | 900 | `#14444C` |

**Neutres sable — `sand`**

| Nuance | Hex | Nuance | Hex |
|---|---|---|---|
| 0 | `#FFFFFF` | 500 | `#8A837B` |
| 50 | `#FAF8F5` | 600 | `#6B6660` |
| 100 | `#F3EFE9` | 700 | `#4A463F` |
| 200 | `#EDE7DE` | 800 | `#2C2A28` |
| 300 | `#DDD4C7` | 900 | `#1A1815` |
| 400 | `#B5AC9E` |  |  |

**Sémantiques** : `success #2F855A` · `warning #B7791F` · `error #C53030` · `info` = `primary-600`

### 5.2 Règles d'emploi de la couleur

Ces règles sont normatives. Elles remplacent les valeurs en dur actuelles.

| Rôle | Jeton |
|---|---|
| Fond de page | `sand-50` |
| Surfaces, cartes | `sand-0` |
| Bordures | `sand-200` |
| Texte courant | `sand-600` |
| Titres | `sand-900` |
| Légendes, métadonnées | `sand-500` — **jamais pour un paragraphe** |
| Action principale | fond `primary-600`, texte `sand-0` |
| Liens | `primary-600` |

**Le turquoise ne s'emploie jamais en texte courant sur fond clair** — son contraste est insuffisant. Il est réservé aux aplats, icônes et grands chiffres. Si du texte doit être turquoise, `accent-700` au minimum.

Aucun dégradé. Aucune ombre lumineuse (`glow`). Ce sont les deux marqueurs qui donnent l'apparence générique au site actuel.

### 5.3 Typographie

Deux familles, chargées via `next/font/google` — donc auto-hébergées, sans requête externe et sans décalage au chargement. Ceci corrige le défaut le plus coûteux de l'audit.

- **Plus Jakarta Sans** (600, 700, 800) — titres. Géométrique et chaleureuse, elle porte le registre rassurant de la direction B.
- **Inter** (400, 500, 600) — corps et interface. Meilleure lisibilité en petites tailles.

**Échelle** — fluide en `clamp()`, pour supprimer les sauts entre mobile et bureau.

| Rôle | Taille | Interligne | Interlettre | Graisse |
|---|---|---|---|---|
| `display` | `clamp(2.25rem, 1.35rem + 3.6vw, 3.5rem)` | 1.06 | −0.025em | 700 |
| `h1` | `clamp(2rem, 1.35rem + 2.6vw, 3rem)` | 1.10 | −0.022em | 700 |
| `h2` | `clamp(1.625rem, 1.25rem + 1.5vw, 2.25rem)` | 1.18 | −0.015em | 700 |
| `h3` | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` | 1.30 | −0.01em | 600 |
| `h4` | `1.125rem` | 1.40 | 0 | 600 |
| `body-lg` | `1.125rem` | 1.65 | 0 | 400 |
| `body` | `1rem` | 1.65 | 0 | 400 |
| `small` | `0.875rem` | 1.55 | 0 | 400 |
| `label` | `0.75rem` | 1.40 | 0.09em, capitales | 600 |

Les titres passent de la graisse 900 à 700, et leur taille maximale descend de 4.5rem à 3.5rem. Aujourd'hui tout hurle en même temps, il n'y a plus de hiérarchie.

**Les sélecteurs d'éléments nus (`h1`…`h6`, `p`, `a`) ne portent plus de styles dans `globals.css`.** Ils sont remplacés par des classes utilitaires explicites. C'est ce qui élimine le besoin de contournements comme `.force-white-title`.

### 5.4 Espacement, rayons, ombres, mouvement

- **Base** : 4 px.
- **Rythme vertical de section** : `clamp(4rem, 8vw, 7rem)`, identique partout. Le rythme est actuellement incohérent d'une section à l'autre.
- **Conteneur** : largeur maximale 1200 px, gouttière `clamp(1rem, 4vw, 2.5rem)`.
- **Rayons** : `sm 8px` · `md 12px` (cartes) · `lg 16px` · `full 999px`.
- **Ombres** : `sm 0 1px 2px rgba(26,24,21,.05)` · `md 0 4px 12px rgba(26,24,21,.07)` · `lg 0 12px 28px rgba(26,24,21,.10)`. Aucune autre.
- **Mouvement** : 150–250 ms, `ease-out`. `prefers-reduced-motion: reduce` désactive transformations et animations.

---

## 6. Composants

Une seule famille. Les doublons sont supprimés, ce qui règle l'incohérence de page en page.

### Conservés et refondus

| Composant | Remplace |
|---|---|
| `Button` — variantes `primary`, `secondary`, `ghost`, `accent` ; tailles `sm`, `md`, `lg` | `Button`, `modernButton`, `Contact_Btn` |
| `Card` | `Card`, `modernCard`, `serviceCard`, `logoCard` |
| `Section` | `Section`, `modernSection` |
| `Container` | inchangé, aligné sur les nouveaux jetons |
| `PageHero` | variante claire unique, utilisée sur toutes les pages intérieures |
| `Navbar` | reconstruit (§7) |
| `Footer` | reconstruit, plan de site complet |
| `Input`, `Textarea` | alignés sur les jetons |
| `Badge` | remplace les classes `.badge-*` de `globals.css` |
| `ebpTemplate` | refondu, intègre le bloc formation (§8) |

### Supprimés

`modernButton` · `modernCard` · `modernSection` · `serviceCard` · `logoCard` · `Contact_Btn` · `formationTemplate` (après fusion) · l'ensemble des fichiers SCSS de `app/styles/` et les `*.module.scss` des pages · la dépendance `sass`.

### Fichiers de style

`globals.css` passe de 545 à environ 120 lignes : jetons, base, et trois ou quatre utilitaires réellement partagés. Les ~50 classes composant maison disparaissent au profit des composants React.

---

## 7. Navigation

### Structure

```
Logo   Logiciels EBP ▾   Services IT ▾   Sur-mesure & IA ▾   Télémaintenance   [ Contact ]
            │                  │                 │
     Comptabilité        Informatique      Développement sur-mesure
     Gestion commerciale Télécom           Accompagnement IA
     Bâtiment            Sécurité
```

Quatre pôles au lieu de trois. **Sur-mesure & IA** fait son entrée et porte le nouveau positionnement.

Correspondances : *Logiciels EBP* → `/logiciels` · *Services IT* → `/nosServices` · *Sur-mesure & IA* → `/sur-mesure` · *Télémaintenance* → `/telemaintenance` · *Contact* → `/contact`.

### Barre opaque sur toutes les pages

Le blanc-sur-blanc vient de ce que la barre change de couleur selon le fond de la page. **On supprime le mécanisme, pas le symptôme** : la barre est opaque et identique partout (fond `sand-0`, bordure basse `sand-200`, ombre `sm`). Le bug ne peut plus réapparaître, quel que soit le hero ajouté plus tard.

Le contenu est décalé de la hauteur de la barre au lieu de passer dessous.

### Menu déroulant accessible

- Déclencheur `<button>` porteur de `aria-expanded` et `aria-controls`
- Ouverture au clic **et** au survol sur bureau ; au clic uniquement sur tactile
- Navigation aux flèches haut/bas, fermeture par `Échap`, fermeture au clic extérieur
- Retour du focus sur le déclencheur à la fermeture

### Pied de page

Reprend l'intégralité de la nav, plus `engagementHandicap` et `conditionsGeneralesVente`, les coordonnées et les horaires. Plus aucune page orpheline.

---

## 8. Inventaire des pages

### Conservées

`/` · `/logiciels` · `/nosServices` · `/informatique` · `/telecom` · `/securite` · `/telemaintenance` · `/contact` · `/ebpcomptabilite` · `/ebpgestionco` · `/ebpbatiment` · `/engagementHandicap` · `/conditionsGeneralesVente`

### Créées

| Page | Contenu |
|---|---|
| `/sur-mesure` | Page pôle. Présente les deux offres et renvoie vers elles. |
| `/developpement-sur-mesure` | Applications métier autour d'EBP · intégrations et automatisations · états, rapports et requêtes sur-mesure. L'application de pointage/interventions/affectation sert d'exemple concret. |
| `/accompagnement-ia` | Audit des cas d'usage · formation des équipes · déploiement d'assistants connectés aux données métier. |

Les textes de ces trois pages sont rédigés en première version puis **relus et validés par le commanditaire avant mise en ligne** : ils portent des engagements commerciaux qui ne peuvent être inventés.

### Fusionnées

Chaque page formation devient un bloc « Formation associée » dans la page du logiciel correspondant. La formation devient un argument de vente du logiciel plutôt qu'une offre isolée.

| Page supprimée | Absorbée par |
|---|---|
| `/formationCompta` | `/ebpcomptabilite` |
| `/formationCommerciale` | `/ebpgestionco` |
| `/formationBatiment` | `/ebpbatiment` |

Le badge Qualiopi et la page `engagementHandicap` restent en place : l'activité de formation continue, seule sa présentation change.

### Redirections 301

À ajouter dans `www/.htaccess`, **après** la règle HTTPS existante. L'export statique rend `next.config.redirects()` inopérant — c'est le seul emplacement possible.

| Depuis | Vers |
|---|---|
| `/formationCompta` | `/ebpcomptabilite` |
| `/formationCommerciale` | `/ebpgestionco` |
| `/formationBatiment` | `/ebpbatiment` |
| `/home` | `/` |

La dernière supprime le contenu dupliqué : `app/page.tsx` importe `app/home/page.tsx`, donc le même contenu est aujourd'hui servi à deux URL. `app/home/` est fusionné dans `app/page.tsx`.

---

## 9. Page d'accueil

Sept sections aujourd'hui, dont les partenaires deux fois. On resserre à six.

| # | Section | Contenu |
|---|---|---|
| 1 | **Hero** | Titre, chapô, deux appels à l'action, bande de preuve (30+ années · 500+ clients · 8 experts · Qualiopi). **Sur mobile, les appels à l'action doivent être visibles sans défiler** — c'est le défaut le plus coûteux en conversion aujourd'hui. |
| 2 | **Nos quatre métiers** | Logiciels EBP · Services IT · Sur-mesure & IA · Télémaintenance |
| 3 | **Sur-mesure & IA** | Mise en vedette du nouveau positionnement. Trois volets : applications métier, intégrations, accompagnement IA. |
| 4 | **Pourquoi nous** | Proximité annécienne, 30 ans d'ancienneté, équipe certifiée. Texte et chiffres, aucune photo requise. |
| 5 | **Preuves** | Qualiopi, Partenaire EBP, Microsoft Partner, Dell Technologies. **Une seule fois.** |
| 6 | **Contact** | Coordonnées, horaires, formulaire. |

### Suppressions assumées

- **Section témoignages** — les trois noms sont fictifs et aucun avis réel n'est disponible. Mieux vaut rien qu'un faux.
- **Second bloc partenaires** — doublon.
- **Badge flottant « Sécurité Renforcée »** dans le hero — il masque un paragraphe.

### Correction de doublon

Le hero et la section chiffres annoncent tous deux « 30+ ans ». Le hero conserve l'accroche, la bande de preuve porte les chiffres. Le doublon disparaît.

---

## 10. Accessibilité

Cible : score Lighthouse accessibilité ≥ 95 sur l'accueil, `/contact` et une page service.

- Lien d'évitement vers le contenu principal
- Une seule balise `<main>` par page
- Hiérarchie de titres continue : H1 → H2 → H3, sans saut
- Focus visible sur tout élément interactif : contour 2 px, décalage 2 px
- Menus déroulants pilotables au clavier et au tactile (§7)
- Contrastes conformes aux règles du §5.2, à vérifier au navigateur avant livraison
- `prefers-reduced-motion` respecté
- Suppression de la règle globale `* { max-width: 100% }`

---

## 11. Décisions techniques

| Sujet | Décision |
|---|---|
| Polices | `next/font/google` pour Plus Jakarta Sans et Inter. Auto-hébergement, `display: swap`. |
| Tailwind | `tailwind.config.ts` réécrit : nouvelles échelles, suppression des ombres `glow`, du motif `hero-pattern` et des animations inutilisées. |
| Typographie longue | Enregistrer `@tailwindcss/typography` — installé mais jamais activé (`plugins: []`). Utile pour les CGV. |
| `<style jsx global>` | Corriger l'attribut non booléen qui fuit dans le DOM et déclenche un avertissement React. |
| Tests | `jest` est absent des dépendances alors que 12 suites existent : `npm test` échoue. L'ajouter aux `devDependencies`. Mettre à jour ou retirer les tests visant des composants supprimés. |
| Horaires | Déjà corrigés en amont de cette refonte (Lun-Ven 8h30-12h00 / 14h00-17h30, fermé le week-end), y compris le JSON-LD. À préserver. |
| Compteurs animés | `react-countup` n'écrit sa valeur qu'au défilement, côté client. Le HTML statique livré contient donc `0j/7`, `0+`, `0%` — vérifié dans `www/index.html`. Les moteurs de recherche sans exécution JS et les visiteurs sans JS lisent « 0 client, 0 % satisfaction ». **Les chiffres portant la crédibilité en l'absence de photos et de témoignages, c'est inacceptable.** Le correctif : écrire la valeur réelle dans le balisage, l'animation ne devenant qu'une amélioration progressive. |

---

## 12. Hors périmètre

- **Le logo** — figé par décision du commanditaire. Aucune variante n'est produite ; le design s'adapte en évitant les fonds sombres sous le logo (§3).
- **Le contenu des CGV** — l'habillage change, le texte juridique n'est pas touché.
- **Photos et témoignages réels** — indisponibles. Le design est conçu pour s'en passer.
- **Le déploiement vers `www/`** — étape distincte, exécutée après validation, selon la procédure du README (overlay, sans vider `/www`).
- **`Ebp_App/`** — projet séparé, seulement cité comme référence commerciale.
- **Refactorisations sans lien** avec la refonte.

---

## 13. Critères de succès

Vérifiables, un par un :

1. Les liens de navigation sont lisibles sur **toutes** les pages — plus aucun blanc sur blanc.
2. Aucun élément flottant ou fixe ne recouvre du texte, sur aucune page, à aucune largeur.
3. Les deux polices sont **effectivement chargées** — vérifiable dans `document.fonts` au navigateur.
4. Une seule famille de composants : aucune référence résiduelle à `modernButton`, `modernCard`, `modernSection`.
5. Zéro page orpheline : toute page est atteignable depuis la nav ou le pied de page.
6. Les quatre redirections 301 renvoient bien vers leur cible.
7. Sur mobile, un appel à l'action est visible sans défiler sur l'accueil.
8. Lighthouse accessibilité ≥ 95 sur les trois pages témoins.
9. `npm run build` passe sans erreur ni avertissement nouveau.
10. Les horaires affichés et le JSON-LD restent exacts.
11. Les chiffres réels figurent dans le HTML statique — `grep '500' www/index.html` doit aboutir, et plus aucun `0j/7`.

---

## 14. Découpage

Le périmètre est large. Il se découpe en six lots, dans cet ordre — chacun laisse le site dans un état fonctionnel et vérifiable.

| Lot | Contenu | Vérification |
|---|---|---|
| **1 — Fondations** | Polices via `next/font`, `tailwind.config.ts` réécrit, `globals.css` dégraissé, suppression du SCSS et de `* { max-width }` | Le build passe, les polices sont chargées dans `document.fonts` |
| **2 — Composants** | Famille unique : `Button`, `Card`, `Section`, `Badge`, `Input`, `PageHero`. Suppression des doublons | Plus aucune référence à `modernButton`, `modernCard`, `modernSection` |
| **3 — Nav et pied de page** | Barre opaque, menus accessibles, pied de page clair avec plan de site complet | Nav lisible sur les 17 pages, menus pilotables au clavier, zéro page orpheline |
| **4 — Accueil** | Les six sections du §9 | Appel à l'action visible sans défiler sur mobile, aucun chevauchement |
| **5 — Pages intérieures** | Les 12 pages restantes reprises sur les nouveaux composants, fusion des formations dans les pages EBP | Cohérence visuelle d'une page à l'autre |
| **6 — Nouvelles pages et bascule** | `/sur-mesure`, `/developpement-sur-mesure`, `/accompagnement-ia`, redirections dans `.htaccess`, régénération de `www/` | Les quatre 301 aboutissent, Lighthouse ≥ 95 |

Les lots 1 à 3 forment le socle : tant qu'ils ne sont pas terminés, refaire des pages reviendrait à travailler sur des fondations mouvantes. Le lot 6 est le seul à toucher au serveur.
