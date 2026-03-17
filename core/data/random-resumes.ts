import type { Resume } from "../resume/resume.types";

export const randomResumes: Resume[] = [
  // 1. Développeur web frontend
  {
    title: "Développeur Frontend · React · TypeScript",
    contact: {
      firstname: "Lucas",
      lastname: "Moreau",
      phone: "+33 6 12 34 56 78",
      email: "lucas.moreau@gmail.com",
      location: "Lyon",
      website: "",
    },
    bio: {
      sentences: [
        "Je conçois des interfaces web modernes et performantes avec React et TypeScript, en accordant une attention particulière à l'expérience utilisateur.",
        "Passionné par le design system et l'accessibilité, je collabore étroitement avec les équipes produit et design.",
      ],
      skills: [],
    },
    formations: [
      { date: "2018", school: "IUT Lyon 1 – Informatique", title: "BUT Informatique" },
    ],
    experiences: [
      {
        job: "Développeur Frontend Senior",
        company: "Kiabi Digital",
        date: "jan. 2022 → aujourd'hui",
        current: true,
        description: "Développement de la plateforme e-commerce avec Next.js et TypeScript.",
        achievements: { title: "Réalisations", items: ["Refonte du tunnel d'achat (+18% conversion)", "Mise en place d'un design system partagé", "Réduction de 40% du bundle JS"] },
      },
      {
        job: "Développeur Frontend",
        company: "Agence Web Lumière",
        date: "2019 – 2022",
        current: false,
        description: "Intégration et développement de sites et applications web pour des clients variés.",
        achievements: { title: "Impact", items: ["20+ projets livrés", "Migration jQuery vers React", "Formation de 2 juniors"] },
      },
    ],
    skills: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { title: "Outils", items: ["Vite", "Storybook", "Figma", "Git"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "professionnel" },
    ],
    projects: [
      {
        name: "OpenUI Kit",
        status: "Open source · actif",
        description: "Bibliothèque de composants React accessibles et personnalisables.",
        stack: ["React", "TypeScript", "Radix UI"],
        achievements: ["300+ stars GitHub", "Utilisé par 5 équipes"],
      },
    ],
  },

  // 2. Développeur backend Node.js
  {
    title: "Développeur Backend · Node.js · API REST",
    contact: {
      firstname: "Théo",
      lastname: "Blanchard",
      phone: "+33 6 98 76 54 32",
      email: "theo.blanchard@outlook.fr",
      location: "Nantes",
      website: "",
    },
    bio: {
      sentences: [
        "Spécialiste du développement d'API REST et de microservices en Node.js, je conçois des architectures robustes et évolutives.",
        "J'interviens aussi bien sur la modélisation de bases de données que sur l'optimisation des performances serveur.",
      ],
      skills: [],
    },
    formations: [
      { date: "2017", school: "École d'ingénieurs ESIEA – Paris", title: "Ingénieur en Informatique" },
    ],
    experiences: [
      {
        job: "Développeur Backend Senior",
        company: "PayFacile",
        date: "mars 2021 → aujourd'hui",
        current: true,
        description: "Conception et maintenance d'APIs de paiement à haute disponibilité.",
        achievements: { title: "Réalisations", items: ["API traitant 2M requêtes/jour", "Réduction latence de 35%", "Migration vers microservices"] },
      },
      {
        job: "Développeur Node.js",
        company: "Startup Logicity",
        date: "2018 – 2021",
        current: false,
        description: "Développement backend d'une plateforme SaaS de gestion logistique.",
        achievements: { title: "Impact", items: ["Mise en place GraphQL", "Intégration Stripe et webhooks", "Tests unitaires et d'intégration (Jest)"] },
      },
    ],
    skills: [
      { title: "Backend", items: ["Node.js", "Express", "NestJS", "PostgreSQL", "Redis"] },
      { title: "DevOps", items: ["Docker", "Kubernetes", "CI/CD GitHub Actions"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
    ],
  },

  // 3. Data scientist
  {
    title: "Data Scientist · Machine Learning · Python",
    contact: {
      firstname: "Camille",
      lastname: "Fontaine",
      phone: "+33 6 55 44 33 22",
      email: "camille.fontaine@datascience.fr",
      location: "Paris 13e",
      website: "",
    },
    bio: {
      sentences: [
        "Je transforme des données brutes en insights actionnables grâce à des modèles de machine learning robustes et des visualisations claires.",
        "Mon expertise couvre l'ensemble du pipeline data, de la collecte à la mise en production des modèles.",
      ],
      skills: [],
    },
    formations: [
      { date: "2019", school: "École Polytechnique – Palaiseau", title: "Master Data Science & IA" },
      { date: "2017", school: "Université Paris-Saclay", title: "Licence Mathématiques Appliquées" },
    ],
    experiences: [
      {
        job: "Data Scientist",
        company: "BNP Paribas",
        date: "sept. 2021 → aujourd'hui",
        current: true,
        description: "Modélisation du risque de crédit et détection de fraude par apprentissage automatique.",
        achievements: { title: "Résultats", items: ["Modèle de scoring réduisant les défauts de 22%", "Pipeline MLOps automatisé", "Publication d'un article interne"] },
      },
      {
        job: "Data Analyst",
        company: "Cdiscount",
        date: "2019 – 2021",
        current: false,
        description: "Analyse des comportements d'achat et optimisation des recommandations produits.",
        achievements: { title: "Impact", items: ["Algorithme de recommandation +8% panier moyen", "Dashboard temps réel Metabase", "Automatisation de 15 rapports hebdomadaires"] },
      },
    ],
    skills: [
      { title: "Data Science", items: ["Python", "scikit-learn", "TensorFlow", "Pandas", "SQL"] },
      { title: "Visualisation", items: ["Tableau", "Power BI", "Matplotlib"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
    ],
  },

  // 4. Designer UX/UI
  {
    title: "Designer UX/UI · Figma · Design System",
    contact: {
      firstname: "Jade",
      lastname: "Rousseau",
      phone: "+33 6 77 88 99 00",
      email: "jade.rousseau@design.fr",
      location: "Bordeaux",
      website: "",
    },
    bio: {
      sentences: [
        "Je crée des expériences numériques centrées sur l'utilisateur, en associant recherche UX rigoureuse et design visuel soigné.",
        "Spécialisée dans la conception de design systems et de prototypes interactifs pour des produits SaaS B2B.",
      ],
      skills: [],
    },
    formations: [
      { date: "2016", school: "École de Design Nantes Atlantique", title: "Master Design Numérique" },
    ],
    experiences: [
      {
        job: "Lead Designer UX/UI",
        company: "Doctolib",
        date: "fév. 2020 → aujourd'hui",
        current: true,
        description: "Pilotage du design de l'application patient et des interfaces praticiens.",
        achievements: { title: "Réalisations", items: ["Design system adopté par 12 équipes", "Taux de satisfaction patient +15%", "Animation d'ateliers utilisateurs mensuels"] },
      },
      {
        job: "UX Designer",
        company: "Agence Elixir Interactive",
        date: "2016 – 2020",
        current: false,
        description: "Conception d'interfaces web et mobile pour des clients grands comptes.",
        achievements: { title: "Projets", items: ["Refonte application mobile SNCF", "Tests utilisateurs et itérations hebdomadaires", "Prototypage haute fidélité Figma"] },
      },
    ],
    skills: [
      { title: "Design", items: ["Figma", "Sketch", "Adobe XD", "Prototypage"] },
      { title: "Méthodes", items: ["Design Thinking", "Tests utilisateurs", "Wireframing"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
    ],
    projects: [
      {
        name: "UI Kit Open Source",
        status: "Personnel · publié",
        description: "Bibliothèque de composants Figma accessible et documentée.",
        stack: ["Figma", "Auto Layout", "Variables"],
        achievements: ["1200+ duplications communauté Figma"],
      },
    ],
  },

  // 5. Chef de projet digital
  {
    title: "Chef de Projet Digital · Agile · Product",
    contact: {
      firstname: "Antoine",
      lastname: "Mercier",
      phone: "+33 6 34 21 09 87",
      email: "antoine.mercier@pm.fr",
      location: "Paris 9e",
      website: "",
    },
    bio: {
      sentences: [
        "Je pilote des projets digitaux complexes en environnement Agile, en coordonnant des équipes pluridisciplinaires pour livrer des produits de qualité dans les délais.",
        "Mon approche allie rigueur méthodologique et sens du business pour maximiser la valeur livrée.",
      ],
      skills: [],
    },
    formations: [
      { date: "2014", school: "Sciences Po Paris", title: "Master Management de Projet" },
    ],
    experiences: [
      {
        job: "Chef de Projet Digital Senior",
        company: "Orange Business Services",
        date: "janv. 2019 → aujourd'hui",
        current: true,
        description: "Pilotage de projets de transformation digitale pour des clients CAC 40.",
        achievements: { title: "Résultats", items: ["15M€ de projets gérés", "Livraison dans 95% des délais", "Équipes de 8 à 20 personnes pilotées"] },
      },
      {
        job: "Chef de Projet Web",
        company: "Agence Havas Digital",
        date: "2015 – 2019",
        current: false,
        description: "Gestion de projets web et campagnes digitales pour des marques nationales.",
        achievements: { title: "Impact", items: ["30+ projets menés de A à Z", "Budget moyen 200K€", "Certification PMP obtenue en 2017"] },
      },
    ],
    skills: [
      { title: "Gestion de projet", items: ["Agile / Scrum", "JIRA", "Confluence", "MS Project"] },
      { title: "Digital", items: ["SEO", "Analytics", "Paid Media", "CRM"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
    ],
  },

  // 6. Infirmière
  {
    title: "Infirmière Diplômée d'État · Soins Intensifs",
    contact: {
      firstname: "Marie",
      lastname: "Lebrun",
      phone: "+33 6 61 72 83 94",
      email: "marie.lebrun@sante.fr",
      location: "Toulouse",
      website: "",
    },
    bio: {
      sentences: [
        "Infirmière diplômée avec 8 ans d'expérience en soins intensifs et urgences, je suis profondément engagée envers le bien-être de mes patients.",
        "Rigoureuse et empathique, je travaille en étroite collaboration avec les équipes médicales pour assurer des soins de qualité.",
      ],
      skills: [],
    },
    formations: [
      { date: "2016", school: "IFSI CHU Toulouse", title: "Diplôme d'État Infirmier" },
    ],
    experiences: [
      {
        job: "Infirmière en Soins Intensifs",
        company: "CHU Toulouse – Rangueil",
        date: "sept. 2018 → aujourd'hui",
        current: true,
        description: "Prise en charge de patients en état critique, monitoring et coordination des soins.",
        achievements: { title: "Missions", items: ["Soins post-opératoires chirurgie cardiaque", "Formation de stagiaires IDE", "Participation au protocole sepsis"] },
      },
      {
        job: "Infirmière – Service Urgences",
        company: "Clinique Saint-Joseph Toulouse",
        date: "2016 – 2018",
        current: false,
        description: "Accueil, triage et soins d'urgence dans un service à forte affluence.",
        achievements: { title: "Réalisations", items: ["1500+ patients pris en charge / an", "Maîtrise des gestes d'urgence", "Référente hygiène du service"] },
      },
    ],
    skills: [
      { title: "Soins", items: ["Soins intensifs", "Urgences", "Perfusion", "Monitoring"] },
      { title: "Compétences", items: ["Écoute active", "Gestion du stress", "Travail en équipe"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Espagnol", level: "notions" },
    ],
  },

  // 7. Médecin généraliste
  {
    title: "Médecin Généraliste · Médecine de Famille",
    contact: {
      firstname: "Pierre",
      lastname: "Dupont",
      phone: "+33 6 45 67 89 01",
      email: "dr.dupont@cabinet-medical.fr",
      location: "Rennes",
      website: "",
    },
    bio: {
      sentences: [
        "Médecin généraliste installé depuis 10 ans, j'assure un suivi global et personnalisé de mes patients avec une approche centrée sur la prévention.",
        "Convaincu par la médecine de proximité, je participe activement à la coordination des soins primaires sur mon territoire.",
      ],
      skills: [],
    },
    formations: [
      { date: "2014", school: "Université de Rennes 1 – Faculté de Médecine", title: "Doctorat de Médecine Générale" },
      { date: "2008", school: "Université de Rennes 1", title: "PCEM – Première année commune études de santé" },
    ],
    experiences: [
      {
        job: "Médecin Généraliste",
        company: "Cabinet Médical du Centre",
        date: "janv. 2016 → aujourd'hui",
        current: true,
        description: "Consultation de médecine générale, suivi de patients chroniques, coordination avec spécialistes.",
        achievements: { title: "Activité", items: ["2500 patients réguliers", "Maison de Santé Pluridisciplinaire", "Médecin coordinateur EHPAD"] },
      },
      {
        job: "Interne en Médecine Générale",
        company: "CHU Rennes",
        date: "2014 – 2016",
        current: false,
        description: "Stages en médecine interne, urgences, pédiatrie et médecine de ville.",
        achievements: { title: "Formation", items: ["Thèse mention très honorable", "Stage urgences pédiatriques", "Consultation de médecine interne"] },
      },
    ],
    skills: [
      { title: "Médical", items: ["Médecine générale", "Maladies chroniques", "Gériatrie", "Pédiatrie"] },
      { title: "Administratif", items: ["Logiciel Mediboard", "Coordination soins", "Formation médicale continue"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "lecture médicale" },
    ],
  },

  // 8. Comptable
  {
    title: "Comptable · Expert-Comptable Stagiaire · Cabinet",
    contact: {
      firstname: "Sophie",
      lastname: "Garnier",
      phone: "+33 6 23 45 67 89",
      email: "sophie.garnier@comptabilite.fr",
      location: "Lille",
      website: "",
    },
    bio: {
      sentences: [
        "Comptable expérimentée avec 7 ans de pratique en cabinet d'expertise comptable, je maîtrise la tenue de comptes, les déclarations fiscales et les bilans.",
        "Rigoureuse et organisée, je conseille également mes clients TPE/PME sur leur gestion financière.",
      ],
      skills: [],
    },
    formations: [
      { date: "2017", school: "IAE Lille – Université de Lille", title: "Master CCA – Comptabilité Contrôle Audit" },
    ],
    experiences: [
      {
        job: "Collaboratrice Comptable",
        company: "Cabinet Durand & Associés",
        date: "sept. 2019 → aujourd'hui",
        current: true,
        description: "Gestion d'un portefeuille de 60 dossiers clients – PME et professions libérales.",
        achievements: { title: "Missions", items: ["Établissement des bilans et liasses fiscales", "Déclarations TVA et IS", "Conseil en optimisation fiscale"] },
      },
      {
        job: "Comptable",
        company: "Cabinet Expertise Plus",
        date: "2017 – 2019",
        current: false,
        description: "Tenue comptable et saisie pour des clients artisans et commerçants.",
        achievements: { title: "Réalisations", items: ["Dématérialisation des pièces comptables", "Gestion paie 30 entreprises", "Réduction des délais de clôture de 20%"] },
      },
    ],
    skills: [
      { title: "Comptabilité", items: ["Sage", "Cegid", "QuickBooks", "Liasses fiscales"] },
      { title: "Fiscal", items: ["TVA", "IS", "BIC/BNC", "CVAE"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "intermédiaire" },
    ],
  },

  // 9. Architecte
  {
    title: "Architecte DPLG · Conception · Maîtrise d'œuvre",
    contact: {
      firstname: "Élise",
      lastname: "Lecomte",
      phone: "+33 6 87 65 43 21",
      email: "elise.lecomte@architecture.fr",
      location: "Strasbourg",
      website: "",
    },
    bio: {
      sentences: [
        "Architecte passionnée par les projets de rénovation durable et d'architecture bioclimatique, je conçois des espaces alliant esthétique et performance énergétique.",
        "J'assure la maîtrise d'œuvre complète, du permis de construire à la réception des travaux.",
      ],
      skills: [],
    },
    formations: [
      { date: "2013", school: "ENSAS – École Nationale Supérieure d'Architecture Strasbourg", title: "Architecte DPLG" },
    ],
    experiences: [
      {
        job: "Architecte Associée",
        company: "Atelier Lecomte & Partners",
        date: "janv. 2018 → aujourd'hui",
        current: true,
        description: "Direction artistique et technique de projets résidentiels et tertiaires.",
        achievements: { title: "Projets", items: ["Éco-quartier 45 logements BBC", "Réhabilitation école primaire Bas-Rhin", "Villa contemporaine bois lauréate concours régional"] },
      },
      {
        job: "Architecte Chef de Projet",
        company: "Cabinet Renzo & Dupuis",
        date: "2014 – 2018",
        current: false,
        description: "Conduite de projets publics et privés – permis de construire, DCE, suivi chantier.",
        achievements: { title: "Réalisations", items: ["Extension médiathèque 3000m²", "Coordination MOE et entreprises", "Respect budgets et délais"] },
      },
    ],
    skills: [
      { title: "Outils", items: ["AutoCAD", "Revit", "SketchUp", "Archicad"] },
      { title: "Compétences", items: ["Maîtrise d'œuvre", "HQE", "Rénovation énergétique"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Allemand", level: "courant" },
    ],
  },

  // 10. Chef cuisinier
  {
    title: "Chef Cuisinier · Gastronomie Française · Brigade",
    contact: {
      firstname: "Nicolas",
      lastname: "Bernard",
      phone: "+33 6 54 32 10 98",
      email: "nicolas.bernard@cuisine.fr",
      location: "Lyon",
      website: "",
    },
    bio: {
      sentences: [
        "Chef cuisinier formé dans de grandes maisons lyonnaises, je défends une cuisine du terroir revisitée, ancrée dans les produits locaux et de saison.",
        "Manager de brigade expérimenté, je place la rigueur et la créativité au cœur de chaque assiette.",
      ],
      skills: [],
    },
    formations: [
      { date: "2009", school: "Institut Paul Bocuse – Écully", title: "Bac Pro Cuisine" },
    ],
    experiences: [
      {
        job: "Chef de Cuisine",
        company: "Restaurant Le Comptoir du Rhône",
        date: "mars 2019 → aujourd'hui",
        current: true,
        description: "Direction de cuisine d'un restaurant gastronomique 60 couverts, étoilé Michelin.",
        achievements: { title: "Réalisations", items: ["Maintien de l'étoile Michelin 3 ans consécutifs", "Menu dégustation 7 plats renouvelé chaque saison", "Brigade de 8 cuisiniers managée"] },
      },
      {
        job: "Sous-Chef",
        company: "Brasserie La Traboule",
        date: "2014 – 2019",
        current: false,
        description: "Second de cuisine, élaboration des menus et gestion des stocks.",
        achievements: { title: "Impact", items: ["120 couverts/service gérés", "Réduction du food cost de 12%", "Formation de 4 commis"] },
      },
    ],
    skills: [
      { title: "Cuisine", items: ["Gastronomie française", "Pâtisserie", "Boucherie", "Cuisson sous-vide"] },
      { title: "Management", items: ["Gestion de brigade", "Achats", "Hygiène HACCP"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "scolaire" },
    ],
  },

  // 11. Enseignant primaire
  {
    title: "Professeur des Écoles · CM1-CM2 · Éducation Nationale",
    contact: {
      firstname: "Claire",
      lastname: "Martin",
      phone: "+33 6 11 22 33 44",
      email: "claire.martin@education.gouv.fr",
      location: "Montpellier",
      website: "",
    },
    bio: {
      sentences: [
        "Professeure des écoles depuis 9 ans, je m'investis pleinement dans l'épanouissement de mes élèves en proposant des séquences pédagogiques innovantes et différenciées.",
        "Convaincue de l'importance du numérique à l'école, j'intègre les outils TNI et les ressources numériques dans mes pratiques quotidiennes.",
      ],
      skills: [],
    },
    formations: [
      { date: "2015", school: "ESPE Montpellier – Université Paul-Valéry", title: "Master MEEF – Professorat des Écoles" },
    ],
    experiences: [
      {
        job: "Professeure des Écoles – Cycle 3",
        company: "École Primaire Jean Jaurès",
        date: "sept. 2017 → aujourd'hui",
        current: true,
        description: "Enseignement toutes matières en CM1 puis CM2, classe de 26 élèves.",
        achievements: { title: "Actions", items: ["Projet lecture partenariat médiathèque", "Classe numérique (tablettes)", "Référente cycle 3 de l'école"] },
      },
      {
        job: "Professeure des Écoles Stagiaire puis Titulaire",
        company: "Circonscription Montpellier 1",
        date: "2015 – 2017",
        current: false,
        description: "Postes en CP et CE2 dans différentes écoles de l'académie.",
        achievements: { title: "Missions", items: ["Suivi personnalisé apprentissage de la lecture", "Collaboration avec RASED", "Participation au conseil d'école"] },
      },
    ],
    skills: [
      { title: "Pédagogie", items: ["Différenciation", "Évaluation par compétences", "Numérique éducatif"] },
      { title: "Matières", items: ["Français", "Mathématiques", "Sciences", "Histoire-Géo"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Espagnol", level: "intermédiaire" },
    ],
  },

  // 12. Professeur de yoga
  {
    title: "Professeur de Yoga · Hatha · Vinyasa",
    contact: {
      firstname: "Aude",
      lastname: "Petit",
      phone: "+33 6 66 55 44 33",
      email: "aude.petit@yoga.fr",
      location: "Marseille",
      website: "",
    },
    bio: {
      sentences: [
        "Professeure de yoga certifiée RYT-500, j'accompagne mes élèves vers plus de bien-être physique et mental à travers des pratiques adaptées à tous les niveaux.",
        "Je propose des cours de Hatha, Vinyasa et Yin yoga, en studio et en entreprise pour la prévention des risques professionnels.",
      ],
      skills: [],
    },
    formations: [
      { date: "2018", school: "Yoga Alliance – Rishikesh, Inde", title: "Formation 500h RYT – Hatha & Vinyasa" },
      { date: "2016", school: "Centre Yoga Marseille", title: "Formation 200h – Professeur de Yoga" },
    ],
    experiences: [
      {
        job: "Professeure de Yoga",
        company: "Studio Lotus Marseille",
        date: "janv. 2019 → aujourd'hui",
        current: true,
        description: "Animation de 15 cours hebdomadaires – groupes de 8 à 20 personnes.",
        achievements: { title: "Activité", items: ["250 élèves réguliers", "Retraites yoga week-end en Provence", "Cours entreprise (Airbus, CMA CGM)"] },
      },
      {
        job: "Professeure de Yoga – Freelance",
        company: "Cours particuliers et associations",
        date: "2016 – 2019",
        current: false,
        description: "Cours individuels et en groupe dans diverses structures marseillaises.",
        achievements: { title: "Expériences", items: ["Yoga thérapeutique personnes âgées", "Partenariat maternité – yoga prénatal", "60 élèves fidélisés"] },
      },
    ],
    skills: [
      { title: "Yoga", items: ["Hatha", "Vinyasa", "Yin", "Yoga prénatal", "Méditation"] },
      { title: "Bien-être", items: ["Respiration pranayama", "Relaxation", "Anatomie appliquée"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
    ],
  },

  // 13. Commercial immobilier
  {
    title: "Agent Commercial Immobilier · Résidentiel & Investissement",
    contact: {
      firstname: "Julien",
      lastname: "Thomas",
      phone: "+33 6 78 90 12 34",
      email: "julien.thomas@immo.fr",
      location: "Nice",
      website: "",
    },
    bio: {
      sentences: [
        "Agent commercial immobilier spécialisé sur le marché résidentiel de la Côte d'Azur, je combine expertise locale et sens du service client pour concrétiser chaque projet d'achat ou de vente.",
        "Fort d'un réseau solide et d'une maîtrise des outils digitaux, j'optimise la visibilité des biens et la satisfaction de mes clients.",
      ],
      skills: [],
    },
    formations: [
      { date: "2015", school: "IUT Nice Côte d'Azur – Techniques de Commercialisation", title: "DUT Techniques de Commercialisation" },
    ],
    experiences: [
      {
        job: "Agent Commercial Immobilier",
        company: "Century 21 Nice Maritime",
        date: "mars 2018 → aujourd'hui",
        current: true,
        description: "Transaction résidentielle sur Nice et alentours – appartements, villas, investissements locatifs.",
        achievements: { title: "Résultats", items: ["3,2M€ de ventes annuelles", "Top 5 vendeurs agence 3 ans consécutifs", "Spécialiste secteur Cimiez / Promenade"] },
      },
      {
        job: "Commercial Immobilier",
        company: "ORPI Alpes Maritimes",
        date: "2015 – 2018",
        current: false,
        description: "Prospection, estimation et accompagnement acheteurs / vendeurs.",
        achievements: { title: "Impact", items: ["120 transactions réalisées", "Délai moyen vente 42 jours", "Formation des nouveaux commerciaux"] },
      },
    ],
    skills: [
      { title: "Commercial", items: ["Prospection", "Négociation", "Estimation", "Compromis de vente"] },
      { title: "Digital", items: ["SeLoger", "Logic-Immo", "Réseaux sociaux", "Visite virtuelle"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
      { language: "Italien", level: "notions" },
    ],
  },

  // 14. Vendeur en parfumerie / beauté
  {
    title: "Conseiller(ère) Beauté · Parfumerie · Maquillage",
    contact: {
      firstname: "Léa",
      lastname: "Dubois",
      phone: "+33 6 22 33 44 55",
      email: "lea.dubois@beaute.fr",
      location: "Paris 1er",
      website: "",
    },
    bio: {
      sentences: [
        "Passionnée de beauté et de parfumerie, j'accompagne chaque cliente dans la découverte de son parfum signature et de sa routine soin avec bienveillance et expertise.",
        "Formée aux grandes maisons de parfumerie, je maîtrise les univers olfactifs et les techniques de maquillage professionnel.",
      ],
      skills: [],
    },
    formations: [
      { date: "2016", school: "Lycée Professionnel Elisa Lemonnier – Paris", title: "Bac Pro Esthétique Cosmétique" },
    ],
    experiences: [
      {
        job: "Conseillère Beauté Senior",
        company: "Sephora – Galeries Lafayette Haussmann",
        date: "mars 2019 → aujourd'hui",
        current: true,
        description: "Conseil vente parfumerie, soin et maquillage dans un flagship de 2000m².",
        achievements: { title: "Performances", items: ["CA individuel 450K€/an", "Top vente parfumerie niche 2022-2023", "Coaching de 3 conseillers juniors"] },
      },
      {
        job: "Conseillère de vente",
        company: "Marionnaud – Châtelet",
        date: "2016 – 2019",
        current: false,
        description: "Accueil, conseil et fidélisation de la clientèle.",
        achievements: { title: "Résultats", items: ["Taux de fidélisation +28%", "Animations make-up week-end", "Référente parfumerie de niche"] },
      },
    ],
    skills: [
      { title: "Beauté", items: ["Parfumerie", "Maquillage", "Soins visage", "Conseil couleur"] },
      { title: "Commerce", items: ["Vente conseil", "Fidélisation", "Merchandising", "Caisse"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
    ],
  },

  // 15. Chauffeur routier
  {
    title: "Chauffeur Routier · Longue Distance · SPL",
    contact: {
      firstname: "Patrick",
      lastname: "Girard",
      phone: "+33 6 33 44 55 66",
      email: "patrick.girard@transport.fr",
      location: "Clermont-Ferrand",
      website: "",
    },
    bio: {
      sentences: [
        "Chauffeur SPL expérimenté avec 15 ans de route, je transporte des marchandises en France et en Europe en respectant scrupuleusement la réglementation et les délais.",
        "Professionnel fiable et autonome, j'entretiens mon véhicule avec soin et gère mes temps de conduite avec rigueur.",
      ],
      skills: [],
    },
    formations: [
      { date: "2009", school: "CFA Transport Auvergne", title: "Permis EC + FIMO Marchandises" },
    ],
    experiences: [
      {
        job: "Chauffeur SPL Grand Routier",
        company: "Transports Auvernier",
        date: "janv. 2014 → aujourd'hui",
        current: true,
        description: "Livraisons longue distance Europe – secteur agroalimentaire et grande distribution.",
        achievements: { title: "Bilan", items: ["800 000 km sans accident", "Tournées Allemagne, Espagne, Belgique", "FCOS à jour – renouvellement 2023"] },
      },
      {
        job: "Chauffeur PL Régional",
        company: "GEODIS Auvergne",
        date: "2009 – 2014",
        current: false,
        description: "Distribution régionale, messagerie et groupage.",
        achievements: { title: "Missions", items: ["100+ livraisons/semaine", "Gestion chargement et arrimage", "Permis C + EC obtenus"] },
      },
    ],
    skills: [
      { title: "Conduite", items: ["SPL", "Longue distance", "Tachygraphe numérique", "ADR"] },
      { title: "Logistique", items: ["Chargement", "Lettres de voiture", "Réglementation sociale"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "notions routières" },
    ],
  },

  // 16. Graphiste freelance
  {
    title: "Graphiste Freelance · Identité Visuelle · Print & Web",
    contact: {
      firstname: "Emma",
      lastname: "Lefebvre",
      phone: "+33 6 44 55 66 77",
      email: "emma.lefebvre@graphisme.fr",
      location: "Nantes",
      website: "",
    },
    bio: {
      sentences: [
        "Graphiste indépendante spécialisée en identité visuelle et création print, j'accompagne startups et PME dans la construction d'une image de marque cohérente et mémorable.",
        "De la conception du logo à la charte graphique complète, je travaille à l'écoute de mes clients pour des résultats qui leur ressemblent.",
      ],
      skills: [],
    },
    formations: [
      { date: "2014", school: "École Supérieure d'Arts et Médias de Caen-Cherbourg", title: "DNSEP Design Graphique" },
    ],
    experiences: [
      {
        job: "Graphiste Freelance",
        company: "À mon compte",
        date: "janv. 2017 → aujourd'hui",
        current: true,
        description: "Création d'identités visuelles, supports print et digitaux pour une clientèle variée.",
        achievements: { title: "Projets", items: ["80+ identités visuelles créées", "Clients : restaurants, startups, associations", "CA 55K€ annuel moyen"] },
      },
      {
        job: "Graphiste Studio",
        company: "Agence Trait d'Union",
        date: "2014 – 2017",
        current: false,
        description: "Création de supports print et digitaux pour des annonceurs régionaux.",
        achievements: { title: "Réalisations", items: ["Campagnes affichage grand format", "Mise en page de catalogues produits", "Coordination avec imprimeurs"] },
      },
    ],
    skills: [
      { title: "Design", items: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma"] },
      { title: "Spécialités", items: ["Identité visuelle", "Packaging", "Typographie", "Print"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "professionnel" },
    ],
    projects: [
      {
        name: "Brand Studio Portfolio",
        status: "Personnel · en ligne",
        description: "Portfolio interactif présentant mes 50 meilleures réalisations de branding.",
        stack: ["Figma", "Webflow"],
        achievements: ["Sélectionné sur Behance Featured"],
      },
    ],
  },

  // 17. Photographe professionnel
  {
    title: "Photographe Professionnel · Portrait · Événementiel",
    contact: {
      firstname: "Hugo",
      lastname: "Renard",
      phone: "+33 6 55 66 77 88",
      email: "hugo.renard@photo.fr",
      location: "Paris",
      website: "",
    },
    bio: {
      sentences: [
        "Photographe professionnel spécialisé en portrait corporate et photographie événementielle, je capture l'authenticité des moments avec un œil artistique affirmé.",
        "Formé aux techniques de studio et de reportage, j'accompagne mes clients de la préparation au rendu final retouché.",
      ],
      skills: [],
    },
    formations: [
      { date: "2013", school: "École Nationale Supérieure Louis-Lumière – Paris", title: "Diplôme National Supérieur de Photographie" },
    ],
    experiences: [
      {
        job: "Photographe Freelance",
        company: "Hugo Renard Photographie",
        date: "janv. 2016 → aujourd'hui",
        current: true,
        description: "Prestations portrait, corporate, mariage et événements culturels.",
        achievements: { title: "Activité", items: ["200+ événements photographiés", "Clients : L'Oréal, Accor, collectivités", "Galerie expo Marais 2023"] },
      },
      {
        job: "Assistant Photographe",
        company: "Studio Lumino – Paris",
        date: "2013 – 2016",
        current: false,
        description: "Assistance et prise de vue publicité mode et beauté.",
        achievements: { title: "Expériences", items: ["Shooting éditoriaux magazines", "Éclairage studio haute gamme", "Post-traitement Lightroom / Photoshop"] },
      },
    ],
    skills: [
      { title: "Photo", items: ["Portrait", "Reportage", "Studio", "Mariage"] },
      { title: "Post-prod", items: ["Lightroom", "Photoshop", "Capture One", "Retouche"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
    ],
    projects: [
      {
        name: "Série « Visages de Paris »",
        status: "Projet artistique · exposé",
        description: "Série de 100 portraits documentaires de Parisiens anonymes.",
        stack: ["Sony A7R", "Lightroom"],
        achievements: ["Exposition galerie Le Marais – 3 semaines", "Publication Revue Photo"],
      },
    ],
  },

  // 18. Avocat
  {
    title: "Avocat au Barreau de Paris · Droit des Affaires",
    contact: {
      firstname: "Alexandre",
      lastname: "Perrin",
      phone: "+33 6 90 01 23 45",
      email: "alexandre.perrin@avocat-paris.fr",
      location: "Paris 8e",
      website: "",
    },
    bio: {
      sentences: [
        "Avocat inscrit au Barreau de Paris depuis 10 ans, je conseille et défends les entreprises dans leurs problématiques contractuelles, de fusion-acquisition et de contentieux commerciaux.",
        "Mon approche est résolument pragmatique : comprendre les enjeux business de mes clients pour apporter des solutions juridiques efficaces.",
      ],
      skills: [],
    },
    formations: [
      { date: "2015", school: "École de Formation des Barreaux – Paris", title: "CAPA – Certificat d'Aptitude à la Profession d'Avocat" },
      { date: "2014", school: "Université Paris II Panthéon-Assas", title: "Master 2 Droit des Affaires" },
    ],
    experiences: [
      {
        job: "Avocat Associé",
        company: "Cabinet Perrin & Associés",
        date: "janv. 2020 → aujourd'hui",
        current: true,
        description: "Conseil en droit des sociétés, M&A et contentieux commercial.",
        achievements: { title: "Dossiers", items: ["20+ opérations M&A conseillées", "Contentieux gagnés à 80%", "Équipe de 4 avocats pilotée"] },
      },
      {
        job: "Avocat Collaborateur",
        company: "Cabinet Gide Loyrette Nouel",
        date: "2015 – 2020",
        current: false,
        description: "Collaboration en droit des affaires et droit de la distribution.",
        achievements: { title: "Expériences", items: ["Due diligences juridiques", "Rédaction de contrats complexes", "Assistance à arbitrages internationaux"] },
      },
    ],
    skills: [
      { title: "Domaines", items: ["Droit des sociétés", "M&A", "Contrats", "Contentieux"] },
      { title: "Outils", items: ["Lexis360", "Doctrine", "MS Office", "Dictaphone"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "bilingue juridique" },
    ],
  },

  // 19. Journaliste
  {
    title: "Journaliste · Presse Écrite & Web · Investigation",
    contact: {
      firstname: "Manon",
      lastname: "Simon",
      phone: "+33 6 01 23 45 67",
      email: "manon.simon@presse.fr",
      location: "Paris 5e",
      website: "",
    },
    bio: {
      sentences: [
        "Journaliste polyvalente spécialisée en enquêtes société et politique économique, je travaille pour la presse nationale depuis 8 ans avec un sens aigu du terrain et de la vérification des faits.",
        "Adepte du datajournalisme, je combine narration classique et visualisation de données pour des articles à fort impact.",
      ],
      skills: [],
    },
    formations: [
      { date: "2016", school: "CFJ – Centre de Formation des Journalistes – Paris", title: "Diplôme de journalisme (reconnu CPNEJ)" },
    ],
    experiences: [
      {
        job: "Journaliste Enquête",
        company: "Le Monde",
        date: "sept. 2020 → aujourd'hui",
        current: true,
        description: "Enquêtes longue durée société, politique et économie.",
        achievements: { title: "Publications", items: ["Série enquête sur les déserts médicaux (Prix Varenne 2022)", "50+ articles publiés sur lemonde.fr", "Podcast investigation 80K écoutes"] },
      },
      {
        job: "Journaliste Reporter",
        company: "L'Express",
        date: "2016 – 2020",
        current: false,
        description: "Rédaction d'articles d'actualité générale et de grands reportages.",
        achievements: { title: "Missions", items: ["Reportages terrain (Afrique subsaharienne, Moyen-Orient)", "Couverture élections présidentielles 2017", "Responsable de la rubrique société"] },
      },
    ],
    skills: [
      { title: "Journalisme", items: ["Enquête", "Reportage", "Interview", "Fact-checking"] },
      { title: "Digital", items: ["Datajournalisme", "SEO éditorial", "Réseaux sociaux", "Podcast"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
      { language: "Arabe", level: "intermédiaire" },
    ],
  },

  // 20. Community manager
  {
    title: "Community Manager · Réseaux Sociaux · Contenu",
    contact: {
      firstname: "Chloé",
      lastname: "Laurent",
      phone: "+33 6 12 23 34 45",
      email: "chloe.laurent@social.fr",
      location: "Bordeaux",
      website: "",
    },
    bio: {
      sentences: [
        "Community Manager créative et analytique, je construis et anime des communautés engagées sur les réseaux sociaux en produisant des contenus qui génèrent de la valeur pour la marque.",
        "Maîtrisant les codes de chaque plateforme, j'adapte les messages pour maximiser l'engagement et la croissance organique.",
      ],
      skills: [],
    },
    formations: [
      { date: "2018", school: "IUT Bordeaux Montaigne – MMI", title: "BUT Métiers du Multimédia et de l'Internet" },
    ],
    experiences: [
      {
        job: "Community Manager",
        company: "Groupe Castel – Vins & Spiritueux",
        date: "janv. 2020 → aujourd'hui",
        current: true,
        description: "Animation des comptes Instagram, Facebook et LinkedIn de 4 marques de vins.",
        achievements: { title: "Résultats", items: ["+85K abonnés sur 3 ans", "Taux d'engagement 4,2% (moyenne secteur 1,8%)", "Campagne UGC virale 2M impressions"] },
      },
      {
        job: "Social Media Manager",
        company: "Agence Konect Digital",
        date: "2018 – 2020",
        current: false,
        description: "Gestion des réseaux sociaux de 8 clients PME et startups.",
        achievements: { title: "Actions", items: ["Stratégie de contenu mensuelle", "Production photo et vidéo courte", "Reporting hebdomadaire KPIs"] },
      },
    ],
    skills: [
      { title: "Réseaux", items: ["Instagram", "LinkedIn", "TikTok", "Facebook", "X (Twitter)"] },
      { title: "Outils", items: ["Canva", "Hootsuite", "Meta Business Suite", "Google Analytics"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
    ],
  },

  // 21. Responsable RH
  {
    title: "Responsable RH · Recrutement · GPEC",
    contact: {
      firstname: "Isabelle",
      lastname: "Durand",
      phone: "+33 6 56 67 78 89",
      email: "isabelle.durand@rh.fr",
      location: "Grenoble",
      website: "",
    },
    bio: {
      sentences: [
        "Responsable des Ressources Humaines avec 11 ans d'expérience, je pilote l'ensemble des politiques RH : recrutement, formation, gestion des carrières et relations sociales.",
        "Convaincue que le capital humain est le premier actif de l'entreprise, j'œuvre pour créer un environnement de travail où chacun peut donner le meilleur de lui-même.",
      ],
      skills: [],
    },
    formations: [
      { date: "2013", school: "IAE Grenoble – Université Grenoble Alpes", title: "Master 2 Management des Ressources Humaines" },
    ],
    experiences: [
      {
        job: "Responsable RH",
        company: "Schneider Electric – Division France",
        date: "fév. 2018 → aujourd'hui",
        current: true,
        description: "Pilotage RH d'un périmètre de 350 collaborateurs sur 3 sites.",
        achievements: { title: "Réalisations", items: ["Réduction du turnover de 18% à 11%", "Plan de formation 800K€ piloté", "Accord télétravail négocié avec les IRP"] },
      },
      {
        job: "Chargée de Recrutement et Formation",
        company: "Groupe Rossignol",
        date: "2013 – 2018",
        current: false,
        description: "Recrutement cadres et techniciens, gestion du plan de développement des compétences.",
        achievements: { title: "Impact", items: ["150 recrutements/an", "SIRH Workday déployé", "Programme onboarding créé de zéro"] },
      },
    ],
    skills: [
      { title: "RH", items: ["Recrutement", "GPEC", "Formation", "Relations sociales"] },
      { title: "Outils", items: ["Workday", "ATS Greenhouse", "Excel RH", "Droit du travail"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
    ],
  },

  // 22. Directeur commercial
  {
    title: "Directeur Commercial · B2B · Développement Grand Comptes",
    contact: {
      firstname: "François",
      lastname: "Legrand",
      phone: "+33 6 70 80 90 01",
      email: "francois.legrand@direction.fr",
      location: "Paris La Défense",
      website: "",
    },
    bio: {
      sentences: [
        "Directeur Commercial expérimenté en B2B, je pilote des équipes commerciales sur des marchés compétitifs en construisant des stratégies de croissance durables et ambitieuses.",
        "Mon approche repose sur le développement de relations de confiance avec les grands comptes et une culture de la performance bienveillante.",
      ],
      skills: [],
    },
    formations: [
      { date: "2005", school: "ESSEC Business School – Cergy", title: "Programme Grande École – Majeure Vente & Négociation" },
    ],
    experiences: [
      {
        job: "Directeur Commercial France",
        company: "Dassault Systèmes",
        date: "janv. 2017 → aujourd'hui",
        current: true,
        description: "Direction d'une équipe de 25 commerciaux – CA 180M€.",
        achievements: { title: "Résultats", items: ["Croissance CA +22% en 3 ans", "Signature compte Total, LVMH, Airbus", "NPS clients 62 (secteur 45)"] },
      },
      {
        job: "Directeur Régional des Ventes",
        company: "Oracle France",
        date: "2009 – 2017",
        current: false,
        description: "Management d'équipe commerciale Île-de-France – solutions ERP et cloud.",
        achievements: { title: "Impact", items: ["Équipe de 12 Account Managers", "Objectifs dépassés 6 années consécutives", "Programme mentoring juniors créé"] },
      },
    ],
    skills: [
      { title: "Management", items: ["Leadership", "Coaching commercial", "Forecasting", "CRM Salesforce"] },
      { title: "Business", items: ["Grands comptes", "Négociation", "B2B SaaS", "Stratégie go-to-market"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "bilingue" },
    ],
  },

  // 23. Électricien
  {
    title: "Électricien · Installations Tertiaires & Résidentielles",
    contact: {
      firstname: "Sébastien",
      lastname: "Michel",
      phone: "+33 6 43 54 65 76",
      email: "sebastien.michel@elec.fr",
      location: "Rouen",
      website: "",
    },
    bio: {
      sentences: [
        "Électricien qualifié avec 12 ans d'expérience dans le bâtiment résidentiel et tertiaire, je réalise des installations électriques conformes aux normes NF C 15-100.",
        "Autonome et rigoureux, je travaille aussi bien en neuf qu'en rénovation, avec une expertise particulière en domotique et énergies renouvelables.",
      ],
      skills: [],
    },
    formations: [
      { date: "2012", school: "CFA Bâtiment Normandie", title: "Bac Pro MELEC – Métiers de l'Électricité" },
    ],
    experiences: [
      {
        job: "Électricien Chef d'Équipe",
        company: "SNEF Normandie",
        date: "mars 2016 → aujourd'hui",
        current: true,
        description: "Encadrement d'une équipe de 4 électriciens sur chantiers tertiaires.",
        achievements: { title: "Réalisations", items: ["Chantier lycée 2500m² livré en délais", "Certifications IRVE (borne recharge VE)", "Habilitations B2V, BR, BC à jour"] },
      },
      {
        job: "Électricien",
        company: "Entreprise Dupas Électricité",
        date: "2012 – 2016",
        current: false,
        description: "Pose de câblages, tableaux électriques et équipements en maisons individuelles.",
        achievements: { title: "Missions", items: ["100+ logements câblés", "Installation panneaux solaires photovoltaïques", "Maintenance dépannage urgence"] },
      },
    ],
    skills: [
      { title: "Électricité", items: ["NF C 15-100", "IRVE", "Domotique KNX", "Photovoltaïque"] },
      { title: "Outils", items: ["AutoCAD électrique", "Habilitations électriques", "EPI"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
    ],
  },

  // 24. Pharmacien
  {
    title: "Pharmacien Titulaire · Officine · Conseil Patient",
    contact: {
      firstname: "Céline",
      lastname: "Morvan",
      phone: "+33 6 67 78 89 90",
      email: "celine.morvan@pharmacie.fr",
      location: "Angers",
      website: "",
    },
    bio: {
      sentences: [
        "Pharmacienne titulaire d'officine depuis 8 ans, je place le conseil patient et la prévention santé au cœur de mon exercice professionnel.",
        "Engagée dans la transformation du métier, j'ai développé les entretiens pharmaceutiques et les nouvelles missions de vaccination dans mon officine.",
      ],
      skills: [],
    },
    formations: [
      { date: "2016", school: "Université d'Angers – Faculté de Pharmacie", title: "Docteur en Pharmacie (Thèse)" },
    ],
    experiences: [
      {
        job: "Pharmacienne Titulaire",
        company: "Pharmacie de la Cathédrale",
        date: "janv. 2018 → aujourd'hui",
        current: true,
        description: "Direction d'une officine de 8 personnes – 1200 ordonnances/semaine.",
        achievements: { title: "Actions", items: ["Programme entretiens observance (diabète, asthme)", "Vaccination anti-grippale 450 patients/an", "Chiffre d'affaires +15% en 4 ans"] },
      },
      {
        job: "Pharmacienne Adjointe",
        company: "Grande Pharmacie de la Gare – Nantes",
        date: "2016 – 2018",
        current: false,
        description: "Délivrance et conseil, gestion des stupéfiants et des commandes.",
        achievements: { title: "Missions", items: ["Référente homéopathie et phytothérapie", "Formation des préparateurs", "Bilan de médication partagé"] },
      },
    ],
    skills: [
      { title: "Pharmacie", items: ["Délivrance", "Conseil", "Entretiens pharmaceutiques", "Tiers payant"] },
      { title: "Gestion", items: ["Logiciel Winpharma", "Gestion stocks", "Management équipe"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "scientifique" },
    ],
  },

  // 25. Kinésithérapeute
  {
    title: "Kinésithérapeute · Rééducation Orthopédique · Sport",
    contact: {
      firstname: "Thomas",
      lastname: "Beaumont",
      phone: "+33 6 38 49 50 61",
      email: "thomas.beaumont@kine.fr",
      location: "Grenoble",
      website: "",
    },
    bio: {
      sentences: [
        "Kinésithérapeute spécialisé en rééducation orthopédique et traumatologie du sport, j'accompagne mes patients de la phase aiguë jusqu'à la reprise complète de leurs activités.",
        "Pratiquant moi-même de ski et d'escalade, je comprends les exigences physiques des sportifs et adapte mes protocoles à leurs objectifs.",
      ],
      skills: [],
    },
    formations: [
      { date: "2017", school: "IFMK Grenoble – Institut de Formation Masso-Kinésithérapie", title: "Diplôme d'État de Masseur-Kinésithérapeute" },
    ],
    experiences: [
      {
        job: "Kinésithérapeute",
        company: "Cabinet Kinésport Grenoble",
        date: "sept. 2019 → aujourd'hui",
        current: true,
        description: "Rééducation post-opératoire, traumatologie et préparation physique de sportifs de haut niveau.",
        achievements: { title: "Activité", items: ["Suivi athlètes équipe de France ski alpin", "500 patients par an", "Formé en thérapie manuelle HVLA"] },
      },
      {
        job: "Kinésithérapeute",
        company: "Centre de Rééducation Fonctionnelle Belledonne",
        date: "2017 – 2019",
        current: false,
        description: "Rééducation neurologique et orthopédique en hospitalisation.",
        achievements: { title: "Missions", items: ["Rééducation AVC et traumatismes crâniens", "Balnéothérapie", "Travail en équipe pluridisciplinaire"] },
      },
    ],
    skills: [
      { title: "Techniques", items: ["Thérapie manuelle", "Rééducation proprioceptive", "Électrothérapie", "Massage"] },
      { title: "Sport", items: ["Traumatologie sportive", "Prévention blessures", "Retour au sport"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "professionnel" },
    ],
  },

  // 26. Psychologue clinicien
  {
    title: "Psychologue Clinicienne · TCC · Adultes & Adolescents",
    contact: {
      firstname: "Laura",
      lastname: "Vidal",
      phone: "+33 6 29 30 41 52",
      email: "laura.vidal@psychologue.fr",
      location: "Toulouse",
      website: "",
    },
    bio: {
      sentences: [
        "Psychologue clinicienne formée aux Thérapies Cognitivo-Comportementales, j'accompagne adultes et adolescents dans la gestion des troubles anxieux, dépressifs et des traumatismes.",
        "Mon approche est bienveillante, structurée et orientée vers des objectifs concrets, tout en respectant le rythme de chaque patient.",
      ],
      skills: [],
    },
    formations: [
      { date: "2018", school: "Université Toulouse Jean Jaurès – UFR Psychologie", title: "Master 2 Psychologie Clinique et Psychopathologie" },
    ],
    experiences: [
      {
        job: "Psychologue Clinicienne",
        company: "Cabinet privé",
        date: "janv. 2020 → aujourd'hui",
        current: true,
        description: "Consultations individuelles adultes et adolescents – TCC et ACT.",
        achievements: { title: "Activité", items: ["25 consultations/semaine", "Spécialisation anxiété et phobies", "Téléconsultation 30% de l'activité"] },
      },
      {
        job: "Psychologue",
        company: "CMP – Centre Médico-Psychologique de Toulouse",
        date: "2018 – 2020",
        current: false,
        description: "Suivi psychologique de patients adultes en souffrance psychique.",
        achievements: { title: "Missions", items: ["Bilan psychologique et tests projectifs", "Groupes thérapeutiques hebdomadaires", "Liaison avec psychiatres et travailleurs sociaux"] },
      },
    ],
    skills: [
      { title: "Thérapies", items: ["TCC", "ACT", "EMDR (en formation)", "Mindfulness"] },
      { title: "Bilans", items: ["Tests psychométriques", "Évaluation cognitive", "Psychopathologie"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Espagnol", level: "courant" },
    ],
  },

  // 27. Product Manager
  {
    title: "Product Manager · SaaS B2B · Agile",
    contact: {
      firstname: "Romain",
      lastname: "Giraud",
      phone: "+33 6 91 02 13 24",
      email: "romain.giraud@product.fr",
      location: "Paris 2e",
      website: "",
    },
    bio: {
      sentences: [
        "Product Manager passionné par la construction de produits SaaS B2B à forte valeur ajoutée, je traduis les besoins utilisateurs en roadmap priorisée et en fonctionnalités impactantes.",
        "Mon approche data-driven et ma culture tech me permettent de travailler en totale symbiose avec les équipes engineering, design et business.",
      ],
      skills: [],
    },
    formations: [
      { date: "2016", school: "École Centrale Paris", title: "Diplôme d'Ingénieur – Spécialité Numérique" },
    ],
    experiences: [
      {
        job: "Product Manager Senior",
        company: "Pennylane",
        date: "sept. 2021 → aujourd'hui",
        current: true,
        description: "Responsable du produit comptabilité en ligne pour les experts-comptables.",
        achievements: { title: "Réalisations", items: ["Feature adoption +40% en 6 mois", "NPS segment EC : 71 → 82", "Squad de 8 (dev, design, data) pilotée"] },
      },
      {
        job: "Product Manager",
        company: "Aircall",
        date: "2017 – 2021",
        current: false,
        description: "PM sur le produit intégrations CRM et analytics.",
        achievements: { title: "Impact", items: ["Intégrations Salesforce et HubSpot lancées", "Réduction churn -15%", "Discovery avec 200+ clients/an"] },
      },
    ],
    skills: [
      { title: "Product", items: ["Roadmapping", "User stories", "OKR", "A/B testing", "Analytics"] },
      { title: "Outils", items: ["JIRA", "Notion", "Mixpanel", "Figma", "SQL"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "courant" },
    ],
  },

  // 28. Responsable logistique
  {
    title: "Responsable Logistique · Supply Chain · Entrepôt",
    contact: {
      firstname: "David",
      lastname: "Rolland",
      phone: "+33 6 52 63 74 85",
      email: "david.rolland@logistique.fr",
      location: "Lyon",
      website: "",
    },
    bio: {
      sentences: [
        "Responsable logistique avec 13 ans d'expérience en gestion d'entrepôt et coordination de la supply chain, je pilote les flux de marchandises avec un souci constant d'optimisation et de réduction des coûts.",
        "Manager de terrain, je fedère des équipes opérationnelles autour d'objectifs de performance clairs et mesurables.",
      ],
      skills: [],
    },
    formations: [
      { date: "2011", school: "IUT Lumière Lyon 2 – Gestion Logistique et Transport", title: "DUT GLT – Gestion Logistique et Transport" },
    ],
    experiences: [
      {
        job: "Responsable Logistique",
        company: "Décathlon – Entrepôt National Lyon",
        date: "janv. 2016 → aujourd'hui",
        current: true,
        description: "Direction opérationnelle d'un entrepôt de 35 000m² – 80 collaborateurs.",
        achievements: { title: "Résultats", items: ["Productivité +25% en 2 ans", "Taux de service 99,2%", "Déploiement WMS Manhattan Associates"] },
      },
      {
        job: "Chef d'Équipe Logistique",
        company: "Amazon – Centre de Fulfillment",
        date: "2011 – 2016",
        current: false,
        description: "Management d'équipes de picking et préparation de commandes.",
        achievements: { title: "Impact", items: ["Équipe de 30 préparateurs", "Peak period Noël géré 3 ans", "Certification interne Associate Logistics Manager"] },
      },
    ],
    skills: [
      { title: "Logistique", items: ["WMS", "Supply Chain", "Gestion stocks", "Lean Management"] },
      { title: "Management", items: ["Gestion d'équipe", "KPIs", "Amélioration continue", "HSE"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "professionnel" },
    ],
  },

  // 29. Traducteur / Interprète
  {
    title: "Traductrice-Interprète · FR/EN/ES · Juridique & Médical",
    contact: {
      firstname: "Nathalie",
      lastname: "Coste",
      phone: "+33 6 17 28 39 40",
      email: "nathalie.coste@traduction.fr",
      location: "Montpellier",
      website: "",
    },
    bio: {
      sentences: [
        "Traductrice-interprète assermentée spécialisée en traduction juridique et médicale, je fournis des traductions précises et fidèles en français, anglais et espagnol.",
        "Mon expertise couvre les contrats internationaux, les dossiers médicaux et l'interprétation consécutive en milieu judiciaire et médical.",
      ],
      skills: [],
    },
    formations: [
      { date: "2014", school: "Université Paul-Valéry Montpellier 3 – ISIT", title: "Master Traduction Spécialisée Multilingue" },
    ],
    experiences: [
      {
        job: "Traductrice-Interprète Assermentée",
        company: "Freelance",
        date: "janv. 2016 → aujourd'hui",
        current: true,
        description: "Traduction de documents juridiques et médicaux, interprétation judiciaire auprès des tribunaux.",
        achievements: { title: "Activité", items: ["Assermentée Cour d'Appel de Montpellier", "500K mots traduits / an", "Clients : cabinets d'avocats, CHU, grandes entreprises"] },
      },
      {
        job: "Traductrice",
        company: "Bureau de Traductions TransLang – Barcelone",
        date: "2014 – 2016",
        current: false,
        description: "Traduction technique et juridique ES/FR/EN en agence.",
        achievements: { title: "Expériences", items: ["Traductions brevets et normes ISO", "Sous-titrage documentaires", "Gestion mémoires de traduction SDL Trados"] },
      },
    ],
    skills: [
      { title: "Langues", items: ["Français (natif)", "Anglais (C2)", "Espagnol (C2)"] },
      { title: "Outils", items: ["SDL Trados", "memoQ", "Déjà Vu", "CAT tools"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "C2" },
      { language: "Espagnol", level: "C2" },
    ],
  },

  // 30. Consultant en stratégie
  {
    title: "Consultant en Stratégie · Transformation · Grands Comptes",
    contact: {
      firstname: "Paul",
      lastname: "Chevalier",
      phone: "+33 6 80 91 02 13",
      email: "paul.chevalier@strategy.fr",
      location: "Paris 7e",
      website: "",
    },
    bio: {
      sentences: [
        "Consultant senior en stratégie, j'accompagne des dirigeants de grands groupes et d'ETI dans leurs transformations organisationnelles et leurs choix stratégiques à fort enjeu.",
        "Mon expertise couvre la stratégie de croissance, l'excellence opérationnelle et la transformation digitale, avec une capacité à aller de la vision à l'exécution.",
      ],
      skills: [],
    },
    formations: [
      { date: "2011", school: "HEC Paris", title: "Programme Grande École – Majeure Stratégie" },
    ],
    experiences: [
      {
        job: "Senior Manager",
        company: "McKinsey & Company – Bureau de Paris",
        date: "sept. 2016 → aujourd'hui",
        current: true,
        description: "Missions de stratégie, transformation et performance opérationnelle pour des clients CAC 40.",
        achievements: { title: "Missions", items: ["Plan stratégique 5 ans groupe industriel 5Mds€ CA", "Programme d'excellence opérationnelle -80M€ de coûts", "Équipes projet de 6 à 12 consultants pilotées"] },
      },
      {
        job: "Consultant",
        company: "Boston Consulting Group",
        date: "2011 – 2016",
        current: false,
        description: "Missions de stratégie et transformation dans les secteurs banque, assurance et retail.",
        achievements: { title: "Expériences", items: ["Stratégie de fusion post-acquisition", "Plan de transformation digitale groupe bancaire", "Publication BCG Perspectives"] },
      },
    ],
    skills: [
      { title: "Stratégie", items: ["Stratégie corporate", "M&A", "Transformation", "Business plan"] },
      { title: "Outils", items: ["PowerPoint avancé", "Excel modélisation", "Analyse de données", "Présentation comex"] },
    ],
    languages: [
      { language: "Français", level: "natif" },
      { language: "Anglais", level: "bilingue" },
    ],
  },
];
