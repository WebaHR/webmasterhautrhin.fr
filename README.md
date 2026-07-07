# Webmaster Haut-Rhin — Site vitrine

Site vitrine développé avec **Next.js 16** (App Router, TypeScript, Tailwind CSS).

## Structure du projet

```
webmasterhautrhin/
├── app/
│   ├── layout.tsx              # Layout global (polices, header, footer)
│   ├── page.tsx                # Page d'accueil (hero + 5 sections de services)
│   ├── globals.css             # Design tokens & styles globaux
│   ├── icon.svg                # Favicon
│   ├── creation-site/page.tsx  # Page "Création de site internet & e-commerce"
│   ├── referencement/page.tsx  # Page "Référencement (SEO)"
│   └── devis/page.tsx          # Page "Demande de devis"
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx                # Section hero (texte à gauche / formulaire à droite)
│   ├── ContactForm.tsx         # Formulaire de contact réutilisable
│   ├── ServiceSection.tsx      # Section alternée texte / illustration
│   └── Illustrations.tsx       # Illustrations SVG sur mesure
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Installation

Prérequis : [Node.js](https://nodejs.org) version 20 ou supérieure.

```bash
npm install
```

## Lancer le site en développement

```bash
npm run dev
```

Le site est alors accessible sur [http://localhost:3000](http://localhost:3000).

## Générer la version de production

```bash
npm run build
npm run start
```

## Configurer l'envoi des emails du formulaire de contact

Le formulaire de contact (page d'accueil et page `/devis`) envoie les
demandes par email à **webmasterhautrhin@gmail.com** via une route API
Next.js (`app/api/contact/route.ts`) et [Resend](https://resend.com), un
service d'envoi transactionnel.

### 1. Créer un compte Resend et une clé API

1. Créez un compte sur [resend.com](https://resend.com) (gratuit jusqu'à
   3 000 emails/mois).
2. Dans le dashboard, allez dans **API Keys** → **Create API Key**.
3. Copiez la clé générée (elle commence par `re_`) — elle ne sera plus
   affichée en entier par la suite.

### 2. Renseigner les variables d'environnement

Copiez le fichier `.env.local.example` en `.env.local` à la racine du projet :

```bash
cp .env.local.example .env.local
```

Puis complétez-le avec votre clé :

```
RESEND_API_KEY=re_votre_cle_api
CONTACT_FROM_EMAIL=Site Webmaster Haut-Rhin <onboarding@resend.dev>
```

`.env.local` est déjà exclu du suivi Git (voir `.gitignore`) : votre clé API
ne sera jamais publiée si vous poussez le code sur un dépôt.

### 3. Démarrage rapide vs. production

- **Pour tester tout de suite** : gardez `onboarding@resend.dev` comme adresse
  d'expédition. Limite importante : sans domaine vérifié, Resend n'autorise
  l'envoi qu'à l'adresse email qui a créé le compte Resend — pas encore à
  `webmasterhautrhin@gmail.com` si ce n'est pas la même adresse.
- **Pour la mise en production** : vérifiez votre domaine dans Resend
  (Dashboard → **Domains** → **Add Domain** → `webmasterhautrhin.fr`), en
  ajoutant les enregistrements DNS demandés (SPF/DKIM) chez votre registrar.
  Une fois le domaine vérifié, changez `CONTACT_FROM_EMAIL` pour une adresse
  de ce domaine, par exemple :
  ```
  CONTACT_FROM_EMAIL=Site Webmaster Haut-Rhin <contact@webmasterhautrhin.fr>
  ```
  Vous pourrez alors envoyer sans restriction vers
  `webmasterhautrhin@gmail.com`.

### 4. Déploiement (Vercel ou autre hébergeur)

Renseignez les mêmes variables (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`) dans
les "Environment Variables" de votre hébergeur — sur Vercel : Project
Settings → Environment Variables.

### Fonctionnement

- Chaque envoi du formulaire déclenche une requête vers `/api/contact`.
- La route API valide les champs obligatoires (prénom, nom, email, case RGPD
  cochée), puis envoie un email récapitulatif à `webmasterhautrhin@gmail.com`
  avec le champ "Répondre à" déjà pré-rempli avec l'adresse du visiteur.
- En cas d'erreur (clé API manquante, envoi refusé...), un message d'erreur
  s'affiche sous le formulaire au lieu du message de confirmation.

## Personnalisation rapide

- **Couleurs & typographies** : modifiables dans `tailwind.config.ts` (couleurs)
  et `app/layout.tsx` (polices Google : Space Grotesk, Inter, IBM Plex Mono).
- **Coordonnées** (téléphone, email, adresse) : à modifier dans
  `components/Footer.tsx` et `app/devis/page.tsx`.
- **Formulaire de contact** : `components/ContactForm.tsx` envoie désormais
  réellement les demandes par email (voir la section ci-dessus pour la
  configuration Resend). La logique d'envoi côté serveur se trouve dans
  `app/api/contact/route.ts`.
- **Textes** : chaque page (`app/page.tsx`, `app/creation-site/page.tsx`,
  `app/referencement/page.tsx`, `app/devis/page.tsx`) contient du texte
  d'exemple à adapter à l'activité réelle.

## Déploiement

Le projet est compatible avec [Vercel](https://vercel.com) (recommandé pour
Next.js), ou tout hébergeur supportant Node.js 20+.
