import Link from "next/link";
import { GithubIcon } from "lucide-react";

const GITHUB_URL = "https://github.com/davidmoothen/cv-builder";

export function LandingNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-raleway font-light uppercase tracking-widest text-sm text-gray-900">
          CV Builder
        </span>

        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Code source sur GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <Link
            href="/editor"
            className="flex items-center gap-1.5 bg-gray-900 text-white text-sm
                       px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Créer mon CV →
          </Link>
        </div>
      </div>
    </header>
  );
}
