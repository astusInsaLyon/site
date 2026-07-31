# Site de l'Astus

Site du département Télécommunications, Services et Usages de l'INSA Lyon.
Refonte 2026 : tout le site est orienté autour de l'intégration des nouveaux
arrivants. L'ancien site Nuxt 2 est conservé tel quel dans `archive/`.

Stack : Next.js 16 (App Router, export statique), TypeScript, Tailwind CSS v4,
Motion pour les animations. Hébergement GitHub Pages.

## Organisation du dépôt

| Chemin | Rôle |
| --- | --- |
| `src/app` | Une page par route (`/`, `/planning`, `/kit`, `/departement`, `/astus`) |
| `src/components` | Composants partagés : en-tête, pied de page, frise, animations |
| `src/content` | Contenu éditorial modifiable sans toucher au code |
| `src/lib` | Configuration du site et loader d'images |
| `public/images` | Photos, en WebP |
| `scripts` | Outils de maintenance (conversion d'images) |
| `Dockerfile`, `compose.yaml`, `docker/` | Exécution locale en conteneur |
| `docs` | Cahier des charges de la refonte |
| `archive` | Ancien site Nuxt 2, conservé pour référence, non construit |

## Démarrer

```bash
npm install
npm run dev
```

Le site tourne sur **http://localhost:3000/site/**. Le suffixe `/site` n'est pas
une faute de frappe : c'est le `basePath` de publication, et il s'applique aussi
en développement. La racine `http://localhost:3000/` renvoie une 404.

Autres commandes :

| Commande | Effet |
| --- | --- |
| `npm run build` | Génère le site statique dans `out/` |
| `npm run lint` | Vérifie le code |
| `npm run images` | Convertit les JPEG/PNG de `public/images` en WebP (max 1600 px) |

`npm run images` a besoin de `sharp`. Il n'est pas déclaré dans
`package.json` : il arrive comme dépendance optionnelle de Next. Si le script
échoue sur `ERR_MODULE_NOT_FOUND`, lancer `npm install --no-save sharp`.

### Avec Docker

Utile pour vérifier le site tel qu'il sera servi en production, sans installer
Node.

```bash
docker compose up web              # http://localhost:8081
docker compose --profile dev up dev   # serveur de dev, http://localhost:3000
```

L'image `web` construit le site puis le sert avec nginx. Elle est configurée
pour servir à la racine, donc pas de `/site` dans l'URL.

## Modifier le contenu

Le contenu est séparé du code. Dans la quasi-totalité des cas, une mise à jour
annuelle ne touche que ces fichiers :

| Fichier | Contenu |
| --- | --- |
| `src/content/integration.ts` | Frise de l'intégration : dates, titres, descriptions. Ajouter ou retirer une entrée suffit, la frise et les dates clés de l'accueil suivent. |
| `src/content/astus.ts` | Présentation de l'association, événements, membres du bureau, prochains rendez-vous |
| `src/content/kit.ts` | Démarches administratives et questions fréquentes |
| `src/content/departement.ts` | Piliers et présentation du département |
| `src/lib/site.ts` | Liens externes (Instagram, Google Forms), année affichée, menu |

Les photos vont dans `public/images`. Après avoir ajouté des fichiers, lancer
`npm run images` : ils sont convertis en WebP et redimensionnés, ce qui évite
de servir des photos de 3 Mo à des visiteurs sur mobile.

### À faire avant la mise en ligne

- [x] Coller l'URL du Google Form parrainage dans `src/lib/site.ts`
- [x] Coller l'URL du Google Form de demande d'ajout au groupe WhatsApp
- [x] Confirmer les dates du WEI (24 au 26 septembre 2026)
- [ ] Confirmer les dates de la semaine d'intégration dans
      `src/content/integration.ts` (celles en place sont provisoires et
      affichées « à confirmer »)
- [ ] Faire relire la liste des démarches administratives par le bureau
- [ ] Remplacer la photo des « Soirées au local » par une photo du local
      (`src/content/astus.ts`)
- [ ] Remplacer la photo des « Vendredis chill » par la photo transat
      (`src/content/astus.ts`)

Tant qu'un lien de formulaire vaut `null`, le bouton correspondant s'affiche
comme désactivé avec la mention « bientôt disponible » au lieu de pointer dans
le vide.

Le lien du groupe WhatsApp ne doit jamais être publié sur le site :
la demande passe par le formulaire, l'ajout reste manuel.

## Déploiement

Le site est servi sur https://astusinsalyon.github.io/site/.

Le workflow `.github/workflows/deploy.yml` construit le site et pousse le
résultat sur la branche `gh-pages`, ce qui déclenche la publication : Pages est
configuré en mode « branche », pas en mode « GitHub Actions ». `gh-pages` ne
contient donc que le build, réécrit en un commit unique à chaque déploiement ;
le code vit sur `master`.

Le workflow se déclenche manuellement (onglet Actions, bouton « Run
workflow »). Pour déployer à chaque merge sur `master`, ajouter
`push: { branches: [master] }` sous le `on:` en tête du fichier.

Une copie de l'ancien site est conservée sur les branches `old-master` (code
Nuxt 2) et `old-gh-pages` (build publié jusqu'en janvier 2026).

### basePath

Le site est publié dans un sous-dossier (`https://<org>.github.io/site`), donc
toutes les URL doivent porter le préfixe `/site`. Il est piloté par la variable
`NEXT_PUBLIC_BASE_PATH`, définie dans le workflow :

- publication sous `/site` : `NEXT_PUBLIC_BASE_PATH=/site` (valeur par défaut)
- nom de domaine dédié : `NEXT_PUBLIC_BASE_PATH=` (chaîne vide), et ajouter un
  fichier `public/CNAME` contenant le domaine

Les images passent par `src/lib/image-loader.ts`, qui applique ce préfixe :
`next/image` ne le fait pas de lui-même en export statique.

Le fichier `public/.nojekyll` est obligatoire : sans lui, GitHub Pages ignore
le dossier `_next` et le site s'affiche sans style.
