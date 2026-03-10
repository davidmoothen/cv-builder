import { ResumeAvatar } from "./resume-avatar";
import { ResumeContact } from "./resume-contact";
import { ResumeSeparator } from "./resume-separator";
import { ResumeFormation } from "./resume-formation";
import { ResumeSkills } from "./resume-skills";
import { ResumeLanguages } from "./resume-languages";
import { ResumeHeader } from "./resume-header";
import { ResumeBio } from "./resume-bio";
import { ResumeExperiences } from "./resume-experiences";
import { ResumeProjects } from "./resume-projects";
import type { Resume } from "../resume.types";

interface ResumeDocumentProps {
  resume: Resume;
}

export function ResumeDocument({ resume }: ResumeDocumentProps) {
  return (
    <article className="resume-document font-sans text-xs w-[210mm] bg-white grid grid-cols-[260px_1fr] items-start">
      {/* LEFT COLUMN */}
      <aside className="resume-sidebar bg-black/15 px-8 py-4 flex flex-col min-h-[1123px]">
        <ResumeAvatar avatar="/images/avatar.jpg" />
        <ResumeContact contact={resume.contact} />
        <ResumeSeparator />
        <ResumeFormation formations={resume.formations} />
        <ResumeSeparator />
        <ResumeSkills skills={resume.skills} />
        <ResumeSeparator />
        <ResumeLanguages languages={resume.languages} />
      </aside>

      {/* RIGHT COLUMN */}
      <main className="resume-main px-8 grid">
        <ResumeHeader contact={resume.contact} title={resume.title} />
        <ResumeBio bio={resume.bio} />
        <ResumeSeparator />
        <ResumeExperiences experiences={resume.experiences} />
        {resume.projects && resume.projects.length > 0 && (
          <>
            <ResumeSeparator />
            <ResumeProjects projects={resume.projects} />
          </>
        )}
      </main>
    </article>
  );
}
