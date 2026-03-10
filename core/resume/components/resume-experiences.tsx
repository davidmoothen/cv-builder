import { ResumeSubtitle } from "./resume-subtitle";
import { ResumeExperienceItem } from "./resume-experience";
import type { ResumeExperience } from "../resume.types";

interface ResumeExperiencesProps {
  experiences: ResumeExperience[];
}

export function ResumeExperiences({ experiences }: ResumeExperiencesProps) {
  return (
    <section className="break-inside-avoid">
      <ResumeSubtitle title="Expériences" />
      {experiences.map((experience, index) => (
        <ResumeExperienceItem key={`experience-${index}`} experience={experience} />
      ))}
    </section>
  );
}
