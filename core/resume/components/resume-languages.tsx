import { ResumeSubtitle } from "./resume-subtitle";
import type { ResumeLanguages } from "../resume.types";

interface ResumeLanguagesProps {
  languages: ResumeLanguages[];
}

export function ResumeLanguages({ languages }: ResumeLanguagesProps) {
  return (
    <section>
      <ResumeSubtitle title="Langues" />
      <ul className="list-none list-inside">
        {languages.map((language, index) => (
          <li key={`language-${index}`}>
            {language.language} — {language.level}
          </li>
        ))}
      </ul>
    </section>
  );
}
