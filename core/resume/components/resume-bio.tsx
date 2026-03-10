import type { ResumeBio } from "../resume.types";

interface ResumeBioProps {
  bio: ResumeBio;
}

export function ResumeBio({ bio }: ResumeBioProps) {
  return (
    <section className="grid gap-2">
      {bio.sentences.map((sentence, index) => (
        <p key={`bio-${index}`}>{sentence}</p>
      ))}
      {bio.skills.length > 0 && (
        <ul className="list-disc list-inside">
          {bio.skills.map((skill, index) => (
            <li key={`bio-skill-${index}`}>{skill}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
