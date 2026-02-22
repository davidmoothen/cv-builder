import type { Resume } from "../resume/resume.types";

export const resume: Resume = {
  title: "Lead Developer Full Stack · Lead Tech · Builder SaaS",
  contact: {
    lastname: "Moothen",
    firstname: "David",
    phone: "06 33 71 94 45",
    email: "david.moothen.pro@gmail.com",
    location: "Paris · Full remote",
    website: "jinio.us",
  },
  bio: {
    sentences: [
      "Je conçois et industrialise des produits digitaux de A à Z — de l'architecture à la mise en production.",
      "J'interviens comme Fractional CTO ou Lead Tech Full Stack pour des startups et PME qui veulent aller vite sans sacrifier la qualité, et je développe en parallèle mes propres SaaS.",
    ],
    skills: [],
  },
  formations: [
    {
      date: "2009",
      school: "Université Paris 7 (Paris Diderot)",
      title: "Master 2 Ingénierie Informatique",
    },
  ],
  experiences: [
    {
      job: "Lead Developer Full Stack · Lead Tech",
      company: "Freelance — SASU (ex auto-entrepreneur)",
      date: "juin 2022 → aujourd'hui",
      current: true,
      description:
        "Référent technique et chef de projet sur l'ensemble du cycle : conception, architecture, développement, livraison.",
      achievements: {
        title: "Réalisations",
        items: [],
      },
      clients: [
        {
          name: "Plateformes SaaS immobilières",
          date: "juin 2022 → aujourd'hui",
          description:
            "Plateformes de mise en relation locative avec constitution de dossier en ligne, matching propriétaires/locataires et abonnement récurrent.",
          links: ["allo-appart.fr", "go-home.fr", "loximo.fr"],
          achievements: {
            title: "Réalisations",
            items: [
              "Architecture SaaS scalable — Next.js / Node.js / PostgreSQL / Stripe",
              "Abonnement récurrent, upload sécurisé, flux XML, email automation",
              "75 000+ utilisateurs cumulés",
              "Encadrement d'un alternant",
            ],
          },
        },
      ],
    },
    {
      job: "Cofounder & CTO",
      company: "My Beauty Community",
      date: "2016 – 2022",
      current: false,
      description:
        "Application mobile sociale dédiée aux avis cosmétiques, disponible sur App Store & Google Play.",
      achievements: {
        title: "Impact & Responsabilités",
        items: [
          "60 000 utilisateurs cumulés, 10 000 en 3 mois",
          "Node.js / MongoDB / Elasticsearch",
          "Algorithme de matching basé sur questionnaire",
          "Refonte technique Ionic → Flutter",
          "Participation aux levées de fonds",
        ],
      },
    },
    {
      job: "Développeur & Co-fondateur",
      company: "IA Consulting",
      date: "2010 – 2022",
      current: false,
      description: "Agence web & conseil tech pour startups.",
      achievements: {
        title: "Impact",
        items: [
          "20+ projets livrés",
          "Développement full stack, accompagnement technique",
        ],
      },
    },
  ],
  projects: [
    {
      name: "SaaS Mariage",
      status: "Projet personnel · V1 en finalisation",
      description:
        "Plateforme pour futurs mariés : landing page, RSVP, dashboard invités (allergies, contraintes alimentaires).",
      stack: ["Next.js", "NestJS", "PostgreSQL"],
      achievements: [
        "Développé en solo en ~10 jours avec Claude Code",
        "Modèle freemium : dashboard gratuit, mise en ligne à 99€",
      ],
    },
  ],
  skills: [
    {
      title: "Backend",
      items: [
        "NestJS",
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "Elasticsearch",
      ],
    },
    {
      title: "Frontend",
      items: ["Next.js", "React", "Tailwind", "Flutter", "React Native"],
    },
    {
      title: "DevOps & Outils",
      items: ["Docker", "CI/CD", "Cloud", "Claude Code", "Cursor"],
    },
  ],
  languages: [
    { language: "Français", level: "natif" },
    { language: "Anglais", level: "courant" },
  ],
};
