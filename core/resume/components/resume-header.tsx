import { ResumeSeparator } from "./resume-separator";
import type { ResolvedTheme, ResumeContact } from "../resume.types";

interface ResumeHeaderProps {
  contact: ResumeContact;
  title: string;
  theme: ResolvedTheme;
}

export function ResumeHeader({ contact, title, theme }: ResumeHeaderProps) {
  return (
    <header
      className="-mx-8 px-8 py-8 flex items-center justify-center mb-8 break-inside-avoid break-after-avoid"
      style={{ backgroundColor: theme.headerBg, color: theme.headerText }}
    >
      <div className="text-center grid gap-4">
        <h1 className="text-4xl uppercase font-header font-light tracking-widest">
          {contact.firstname}
          <br />
          {contact.lastname}
        </h1>
        <ResumeSeparator className="max-w-[50px] mx-auto" />
        <p className="font-header font-light uppercase tracking-widest">
          {title}
        </p>
      </div>
    </header>
  );
}
