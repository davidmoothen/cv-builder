import Link from "next/link";
import { GithubIcon } from "lucide-react";

const GITHUB_URL = "https://github.com/davidmoothen/cv-builder";
const AUTHOR_URL = "https://jinio.us";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <span>
          Fait avec{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors underline underline-offset-2"
          >
            Next.js
          </a>
        </span>
        <span className="text-gray-400">
          Un projet open source de{" "}
          <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
            David Moothen
          </a>
          {" "}· Fractional CTO & Lead Tech
        </span>
        <div className="flex items-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gray-700 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>
          <Link
            href="/mentions-legales"
            className="hover:text-gray-700 transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
