import { EditableSubtitle } from "./resume-editable-subtitle";
import type { ResumeLanguages } from "../resume.types";

interface ResumeLanguagesProps {
  languages: ResumeLanguages[];
  title?: string;
  onSaveTitle?: (value: string) => void;
}

export function ResumeLanguages({ languages, title = "Langues", onSaveTitle }: ResumeLanguagesProps) {
  return (
    <section className="break-inside-avoid">
      <EditableSubtitle title={title} onSave={onSaveTitle ?? (() => {})} />
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
