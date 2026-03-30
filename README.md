# CV Builder

[![Live demo](https://img.shields.io/badge/demo-cv.jinio.us-black?style=flat-square)](https://cv.jinio.us)
[![Open Source](https://img.shields.io/badge/open%20source-MIT-green?style=flat-square)](./LICENSE)
[![Next.js](https://img.shields.io/badge/built%20with-Next.js-black?style=flat-square&logo=next.js)](https://nextjs.org)

**[🇫🇷 Français]** | [🇬🇧 English](#english)

Un éditeur de CV A4 moderne, open source et 100% gratuit. Créez, éditez et exportez votre CV en PDF directement depuis votre navigateur — sans compte, sans serveur.

🔗 **Démo live** : [cv.jinio.us](https://cv.jinio.us)

---

## Fonctionnalités

- ✅ Édition en temps réel avec prévisualisation A4
- ✅ Export PDF via impression navigateur
- ✅ Sauvegarde automatique en localStorage (aucun serveur)
- ✅ 30 CVs exemples par métier
- ✅ Pagination automatique multi-pages
- ✅ 100% front-end, sans backend ni base de données
- ✅ Entièrement open source sous licence MIT

## Stack technique

| Technologie                                    | Rôle                                        |
| ---------------------------------------------- | ------------------------------------------- |
| [Next.js](https://nextjs.org) (App Router)     | Framework                                   |
| [Zustand](https://zustand-demo.pmnd.rs)        | State management + persistence localStorage |
| [React Hook Form](https://react-hook-form.com) | Gestion des formulaires                     |
| [Zod](https://zod.dev)                         | Validation des données                      |
| [Tailwind CSS v4](https://tailwindcss.com)     | Styles                                      |
| [Lucide React](https://lucide.dev)             | Icônes                                      |
| [Umami](https://umami.is)                      | Analytics (auto-hébergé, optionnel)         |

## Installation locale

```bash
git clone https://github.com/davidmoothen/cv-builder
cd cv-builder
npm install
cp .env.example .env.local
# Remplir les variables dans .env.local
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Variables d'environnement

| Variable                       | Description                   | Obligatoire | Défaut                  |
| ------------------------------ | ----------------------------- | ----------- | ----------------------- |
| `NEXT_PUBLIC_APP_URL`          | URL publique de l'application | Oui         | `http://localhost:3000` |
| `NEXT_PUBLIC_UMAMI_URL`        | URL de votre instance Umami   | Non         | —                       |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | ID du site dans Umami         | Non         | —                       |

> Les variables Umami sont optionnelles. Sans elles, l'analytics est simplement désactivé. Le script ne se charge jamais en développement (`NODE_ENV=development`).

## Déploiement

Le projet est déployable en quelques clics sur :

- **[Vercel](https://vercel.com)** — import du repo GitHub, configuration des variables d'environnement, déployé automatiquement
- **VPS avec [Coolify](https://coolify.io)** — ajoutez le repo, renseignez `NEXT_PUBLIC_APP_URL` et les variables Umami dans les environment variables, puis déployez

## Auteur

**David Moothen** — Fractional CTO & Product Builder
🔗 [jinio.us](https://jinio.us)

## Licence

MIT — voir [LICENSE](./LICENSE)

---

## English

[![Live demo](https://img.shields.io/badge/demo-cv.jinio.us-black?style=flat-square)](https://cv.jinio.us)

A modern, open source, 100% free A4 CV/resume editor. Create, edit and export your resume as PDF directly from your browser — no account, no server.

### Features

- ✅ Real-time editor with A4 preview
- ✅ PDF export via browser print
- ✅ Auto-save to localStorage (no server)
- ✅ 30 example CVs by profession
- ✅ Automatic multi-page pagination
- ✅ 100% front-end, no backend or database
- ✅ Fully open source under MIT license

### Tech stack

Next.js · Zustand · React Hook Form · Zod · Tailwind CSS · Lucide React · Umami (optional)

### Local setup

```bash
git clone https://github.com/davidmoothen/cv-builder
cd cv-builder
npm install
cp .env.example .env.local
npm run dev
```

### Environment variables

| Variable                       | Description                   | Required | Default                 |
| ------------------------------ | ----------------------------- | -------- | ----------------------- |
| `NEXT_PUBLIC_APP_URL`          | Public URL of the application | Yes      | `http://localhost:3000` |
| `NEXT_PUBLIC_UMAMI_URL`        | Your Umami instance URL       | No       | —                       |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Umami website ID              | No       | —                       |

### Deployment

Deploy in a few clicks on **Vercel** or any VPS running **Coolify**.

### Author

**David Moothen** — Fractional CTO & Product Builder · [jinio.us](https://jinio.us)

### License

MIT

---

> Built with [Claude Code](https://claude.ai/claude-code) ⚡
