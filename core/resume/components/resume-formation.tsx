import { ResumeSubtitle } from "./resume-subtitle";
import type { ResumeFormation } from "../resume.types";

interface ResumeFormationProps {
  formations: ResumeFormation[];
}

export function ResumeFormation({ formations }: ResumeFormationProps) {
  return (
    <section className="break-inside-avoid">
      <ResumeSubtitle title="Formation" />
      {formations.map((formation) => (
        <div key={`formation-${formation.date}`}>
          <p>{formation.date}</p>
          <p className="font-bold">{formation.title}</p>
          <p className="text-black/50">{formation.school}</p>
        </div>
      ))}
    </section>
  );
}
