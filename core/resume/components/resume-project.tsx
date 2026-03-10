import type { ResumeProject } from "../resume.types";

interface ResumeProjectProps {
  project: ResumeProject;
}

export function ResumeProjectItem({ project }: ResumeProjectProps) {
  return (
    <div className="grid gap-2 mb-3 break-inside-avoid">
      <div>
        <span className="font-bold">{project.name}</span>{" "}
        <span className="text-black/50">— {project.status}</span>
      </div>
      <p>{project.description}</p>
      <p className="text-black/60">Stack : {project.stack.join(" / ")}</p>
      {project.achievements.length > 0 && (
        <ul className="list-disc list-inside">
          {project.achievements.map((item, index) => (
            <li key={`project-achievement-${index}`}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
