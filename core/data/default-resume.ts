import type { Resume } from "../resume/resume.types";

export const defaultResume: Resume = {
  title: "Lead Developer Full Stack · Lead Tech · Builder SaaS",
  contact: {
    lastname: "Doe",
    firstname: "Jane",
    phone: "+33 6 00 00 00 00",
    email: "jane.doe@example.com",
    location: "Paris · Full remote",
    website: "janedoe.dev",
  },
  bio: {
    sentences: [
      "Je conçois et industrialise des produits digitaux de A à Z — de l'architecture à la mise en production.",
      "J'interviens comme Lead Tech Full Stack pour des startups et PME qui veulent aller vite sans sacrifier la qualité.",
    ],
    skills: [],
  },
  formations: [
    {
      date: "2015",
      school: "Université Paris — Informatique",
      title: "Master 2 Génie Logiciel",
    },
  ],
  experiences: [
    {
      job: "Lead Developer Full Stack",
      company: "Freelance",
      date: "jan. 2020 → aujourd'hui",
      current: true,
      description:
        "Référent technique et chef de projet sur l'ensemble du cycle : conception, architecture, développement, livraison.",
      achievements: {
        title: "Réalisations",
        items: [
          "Architecture SaaS scalable — Next.js / Node.js / PostgreSQL",
          "Abonnement récurrent, upload sécurisé, email automation",
          "50 000+ utilisateurs cumulés",
        ],
      },
    },
    {
      job: "Développeur Full Stack",
      company: "Acme Corp",
      date: "2017 – 2020",
      current: false,
      description: "Développement de plateformes web B2B.",
      achievements: {
        title: "Impact",
        items: [
          "Refonte complète de l'application principale",
          "Réduction du time-to-market de 30%",
        ],
      },
    },
  ],
  projects: [
    {
      name: "Mon SaaS",
      status: "Projet personnel · V1 en cours",
      description: "Description courte de votre projet personnel.",
      stack: ["Next.js", "NestJS", "PostgreSQL"],
      achievements: ["Développé en solo en ~2 semaines"],
    },
  ],
  skills: [
    {
      title: "Backend",
      items: ["Node.js", "NestJS", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "DevOps & Outils",
      items: ["Docker", "CI/CD", "Cloud"],
    },
  ],
  languages: [
    { language: "Français", level: "natif" },
    { language: "Anglais", level: "courant" },
  ],
};
