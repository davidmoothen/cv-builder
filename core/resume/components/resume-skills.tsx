import { ResumeSubtitle } from "./resume-subtitle";
import type { ResumeSkills } from "../resume.types";

interface ResumeSkillsProps {
  skills: ResumeSkills[];
}

export function ResumeSkills({ skills }: ResumeSkillsProps) {
  return (
    <section>
      <ResumeSubtitle title="Skills" />
      {skills.map((skill, index) => (
        <div key={`skill-${index}`}>
          <p className="font-bold mb-2">{skill.title}</p>
          <ul className="list-none list-inside mb-4">
            {skill.items.map((item, j) => (
              <li key={`skill-item-${index}-${j}`}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
