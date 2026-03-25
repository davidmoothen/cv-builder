import { EditableSubtitle } from "./resume-editable-subtitle";
import type { ResumeSkills } from "../resume.types";

interface ResumeSkillsProps {
  skills: ResumeSkills[];
  title?: string;
  onSaveTitle?: (value: string) => void;
}

export function ResumeSkills({ skills, title = "Skills", onSaveTitle }: ResumeSkillsProps) {
  return (
    <section className="break-inside-avoid">
      <EditableSubtitle title={title} onSave={onSaveTitle ?? (() => {})} />
      {skills.map((skill, index) => (
        <div key={`skill-${index}`} className="mb-4">
          <p className="font-bold mb-2">{skill.title}</p>
          <p className="leading-relaxed">
            {skill.items.map((item, j) => (
              <span key={`skill-item-${index}-${j}`} className="whitespace-nowrap">
                {item}{j < skill.items.length - 1 && <span className="whitespace-normal"> · </span>}
              </span>
            ))}
          </p>
        </div>
      ))}
    </section>
  );
}
