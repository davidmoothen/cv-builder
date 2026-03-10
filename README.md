# CV Builder

**[🇫🇷 Français]** | [🇬🇧 English](#english)

Un éditeur de CV A4 moderne, open source et 100% gratuit. Créez, éditez et exportez votre CV en PDF directement depuis votre navigateur — sans compte, sans serveur.

🔗 **Démo live** : [cv.jinio.us](https://cv.jinio.us)
👤 **Auteur** : [David Moothen](https://jinio.us) — Fractional CTO & Lead Tech

---

## Fonctionnalités

- ✅ Éditeur en temps réel avec prévisualisation A4
- ✅ Export PDF via impression navigateur
- ✅ Données sauvegardées localement (localStorage, aucun serveur)
- ✅ 30 CVs exemples par métier
- ✅ Pagination automatique multi-pages
- ✅ Entièrement open source sous licence MIT

## Stack technique

- **Framework** : [Next.js 16](https://nextjs.org) (App Router)
- **State** : [Zustand](https://zustand-demo.pmnd.rs) avec persistence localStorage
- **Formulaires** : [React Hook Form](https://react-hook-form.com)
- **Styles** : [Tailwind CSS v4](https://tailwindcss.com)
- **Icônes** : [Lucide React](https://lucide.dev)
- **Analytics** : [Umami](https://umami.is) (auto-hébergé, optionnel)

## Installation locale

```bash
git clone https://github.com/davidmoothen/cv-builder.git
cd cv-builder
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Variables d'environnement (optionnel)

Pour activer le tracking Umami, créez un fichier `.env.local` :

```env
NEXT_PUBLIC_UMAMI_URL=https://votre-instance-umami.com
NEXT_PUBLIC_UMAMI_WEBSITE_ID=votre-website-id
```

Sans ces variables, l'application fonctionne parfaitement — le tracking est simplement désactivé.

## Licence

MIT — voir [LICENSE](./LICENSE)

---

## English

A modern, open source, 100% free A4 CV/resume editor. Create, edit and export your resume as PDF directly from your browser — no account, no server.

🔗 **Live demo**: [cv.jinio.us](https://cv.jinio.us)
👤 **Author**: [David Moothen](https://jinio.us) — Fractional CTO & Lead Tech

### Features

- ✅ Real-time editor with A4 preview
- ✅ PDF export via browser print
- ✅ Data saved locally (localStorage, no server)
- ✅ 30 example CVs by profession
- ✅ Automatic multi-page pagination
- ✅ Fully open source under MIT license

### Tech stack

- **Framework**: Next.js 16 (App Router)
- **State**: Zustand with localStorage persistence
- **Forms**: React Hook Form
- **Styles**: Tailwind CSS v4
- **Icons**: Lucide React
- **Analytics**: Umami (self-hosted, optional)

### Local setup

```bash
git clone https://github.com/davidmoothen/cv-builder.git
cd cv-builder
npm install
npm run dev
```

### Environment variables (optional)

```env
NEXT_PUBLIC_UMAMI_URL=https://your-umami-instance.com
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id
```

### License

MIT

---

> Built with [Claude Code](https://claude.ai/claude-code) ⚡
