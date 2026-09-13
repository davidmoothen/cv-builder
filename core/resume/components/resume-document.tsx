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
import { getTheme } from "../resume.theme";
import { getFontGroup } from "../resume.fonts";
import type { Resume } from "../resume.types";

interface ResumeDocumentProps {
  resume: Resume;
}

export function ResumeDocument({ resume }: ResumeDocumentProps) {
  const theme = getTheme(resume);
  const fonts = getFontGroup(theme.fontGroup);

  return (
    <article
      className="resume-document font-text text-xs w-[210mm] bg-white grid grid-cols-[260px_1fr] items-start"
      style={
        {
          "--font-header": fonts.header,
          "--font-title": fonts.title,
          "--font-text": fonts.text,
        } as React.CSSProperties
      }
    >
      {/* LEFT COLUMN */}
      <aside
        className="resume-sidebar px-8 py-4 flex flex-col min-h-[1123px]"
        style={{ backgroundColor: theme.sidebarBg, color: theme.sidebarText }}
      >
        <ResumeAvatar
          photoUrl={resume.contact.photoUrl}
          photoBase64={resume.contact.photoBase64}
          firstname={resume.contact.firstname}
          lastname={resume.contact.lastname}
        />
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
        <ResumeHeader contact={resume.contact} title={resume.title} theme={theme} />
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
