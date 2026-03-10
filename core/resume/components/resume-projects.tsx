import { ResumeSubtitle } from "./resume-subtitle";
import { ResumeProjectItem } from "./resume-project";
import type { ResumeProject } from "../resume.types";

interface ResumeProjectsProps {
  projects: ResumeProject[];
}

export function ResumeProjects({ projects }: ResumeProjectsProps) {
  return (
    <section className="break-inside-avoid">
      <ResumeSubtitle title="Projets personnels" />
      {projects.map((project, index) => (
        <ResumeProjectItem key={`project-${index}`} project={project} />
      ))}
    </section>
  );
}
