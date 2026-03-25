import { EditableSubtitle } from "./resume-editable-subtitle";
import type { ResumeFormation } from "../resume.types";

interface ResumeFormationProps {
  formations: ResumeFormation[];
  title?: string;
  onSaveTitle?: (value: string) => void;
}

export function ResumeFormation({ formations, title = "Formation", onSaveTitle }: ResumeFormationProps) {
  return (
    <section className="break-inside-avoid">
      <EditableSubtitle title={title} onSave={onSaveTitle ?? (() => {})} />
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
