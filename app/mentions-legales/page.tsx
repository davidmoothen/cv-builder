import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — CV Builder",
};

const GITHUB_URL = "https://github.com/davidmoothen/cv-builder";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple navbar */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-raleway font-light uppercase tracking-widest text-sm text-gray-900 hover:text-gray-600 transition-colors"
          >
            ← CV Builder
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-raleway font-light uppercase tracking-widest text-gray-900 mb-10">
          Mentions légales
        </h1>

        <div className="flex flex-col gap-10 text-sm text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Éditeur du site
            </h2>
            <p>David Moothen — Fractional CTO & Lead Tech</p>
            <p>SIREN : [à compléter]</p>
            <p>
              Contact :{" "}
              <a href="mailto:david.moothen.pro@gmail.com" className="underline underline-offset-2 hover:text-gray-900 transition-colors">
                david.moothen.pro@gmail.com
              </a>
            </p>
            <p>
              Site :{" "}
              <a href="https://jinio.us" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gray-900 transition-colors">
                jinio.us
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Hébergement
            </h2>
            <p>Hetzner Online GmbH</p>
            <p>Industriestr. 25, 91710 Gunzenhausen, Allemagne</p>
            <p>
              <a href="https://hetzner.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gray-900 transition-colors">
                hetzner.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              Le code source de ce projet est disponible sous licence MIT sur{" "}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gray-900 transition-colors">
                GitHub
              </a>
              . Vous êtes libre de l'utiliser, le modifier et le redistribuer selon les termes de cette licence.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Données personnelles
            </h2>
            <p>
              Aucune donnée personnelle n'est collectée ni transmise à un serveur. Les informations saisies dans l'éditeur sont uniquement stockées localement dans le navigateur de l'utilisateur via{" "}
              <code className="bg-gray-50 border border-gray-200 px-1.5 py-0.5 rounded text-xs font-mono">localStorage</code>{" "}
              et ne quittent jamais son appareil.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Cookies & Mesure d'audience
            </h2>
            <p>
              Ce site n'utilise pas de cookies tiers. Un outil de mesure d'audience (
              <a href="https://umami.is" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gray-900 transition-colors">
                Umami Analytics
              </a>
              , auto-hébergé) est utilisé pour analyser le trafic de façon anonyme et sans cookie de tracking. Aucune donnée personnelle identifiable n'est collectée.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Contact
            </h2>
            <p>
              <a href="mailto:david.moothen.pro@gmail.com" className="underline underline-offset-2 hover:text-gray-900 transition-colors">
                david.moothen.pro@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
