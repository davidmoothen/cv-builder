import {
  GithubIcon,
  DownloadIcon,
  LockIcon,
  CodeIcon,
  ZapIcon,
} from "lucide-react";
import { LandingNavbar } from "./landing-navbar";
import { EditorMockup } from "./editor-mockup";
import { CtaButton } from "./cta-button";
import { Footer } from "@/core/components/footer";

const GITHUB_URL = "https://github.com/davidmoothen/cv-builder";
const AUTHOR_URL = "https://jinio.us";

// ---------------------------------------------------------------------------
// Features
// ---------------------------------------------------------------------------

const FEATURES = [
  {
    icon: ZapIcon,
    title: "100% gratuit",
    description: "Aucun abonnement, aucun compte requis. Utilisez-le immédiatement.",
  },
  {
    icon: CodeIcon,
    title: "Open source",
    description: "Code source disponible sur GitHub. Forkez, adaptez, contribuez.",
  },
  {
    icon: DownloadIcon,
    title: "Export PDF",
    description: "Imprimez ou exportez en PDF directement depuis votre navigateur.",
  },
  {
    icon: LockIcon,
    title: "Données locales",
    description: "Vos données restent sur votre appareil. Rien n'est envoyé à un serveur.",
  },
] as const;

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Open Source · Gratuit · Sans inscription
        </span>
        <h1 className="text-5xl font-raleway font-light tracking-tight text-gray-900 mb-6 leading-tight">
          Créez un CV professionnel
          <br />
          <span className="font-normal">en quelques minutes.</span>
        </h1>
        <p className="text-lg text-gray-500 mb-4 max-w-xl mx-auto leading-relaxed">
          Un éditeur de CV A4 moderne, entièrement dans votre navigateur.
          Éditez, prévisualisez et exportez en PDF sans créer de compte.
        </p>
        <p className="text-sm text-gray-400 mt-2 mb-10">
          Créé par{" "}
          <a
            href={AUTHOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-gray-700 transition-colors"
          >
            David Moothen
          </a>
          {" "}· Fractional CTO & Lead Tech
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <CtaButton
            className="bg-gray-900 text-white px-7 py-3 rounded-lg text-sm
                       hover:bg-gray-700 transition-colors font-medium"
          >
            Créer mon CV →
          </CtaButton>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-200 text-gray-600
                       px-6 py-3 rounded-lg text-sm hover:border-gray-400
                       hover:text-gray-900 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            Voir le code source
          </a>
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto px-4">
        <EditorMockup />
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-12">
          Pourquoi CV Builder ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-raleway font-light text-gray-900 mb-4">
          Prêt à créer votre CV ?
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Remplissez vos informations dans le panneau de droite et votre CV
          se met à jour en temps réel. Imprimez ou exportez en PDF en un clic.
        </p>
        <CtaButton
          className="inline-flex items-center bg-gray-900 text-white
                     px-8 py-3.5 rounded-lg text-sm hover:bg-gray-700
                     transition-colors font-medium"
        >
          Ouvrir l'éditeur →
        </CtaButton>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <LandingNavbar />
      <main>
        <Hero />
        <Features />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}
