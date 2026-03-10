import { ResumeClientItem } from "./resume-client";
import type { ResumeExperience } from "../resume.types";

interface ResumeExperienceProps {
  experience: ResumeExperience;
}

export function ResumeExperienceItem({ experience }: ResumeExperienceProps) {
  return (
    <div className="grid gap-2 mb-4 break-inside-avoid">
      <div>
        <div>
          <span className="font-bold">{experience.job}</span>{" "}
          <span className="text-black/50">— {experience.company}</span>
        </div>
        <p className="text-black/60 italic">{experience.date}</p>
      </div>
      <p>{experience.description}</p>
      {experience.achievements.items.length > 0 && (
        <ul className="list-disc list-inside">
          {experience.achievements.items.map((item, index) => (
            <li key={`experience-achievement-${index}`}>{item}</li>
          ))}
        </ul>
      )}
      {experience.clients && experience.clients.length > 0 && (
        <div className="grid gap-3 mt-1">
          {experience.clients.map((client, index) => (
            <ResumeClientItem key={`client-${index}`} client={client} />
          ))}
        </div>
      )}
    </div>
  );
}
