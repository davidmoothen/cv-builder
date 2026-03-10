import { ResumeSeparator } from "./resume-separator";
import type { ResumeContact } from "../resume.types";

interface ResumeHeaderProps {
  contact: ResumeContact;
  title: string;
}

export function ResumeHeader({ contact, title }: ResumeHeaderProps) {
  return (
    <header className="bg-black/80 text-white -mx-8 px-8 py-8 flex items-center justify-center mb-8 break-inside-avoid break-after-avoid">
      <div className="text-center grid gap-4">
        <h1 className="text-4xl uppercase font-raleway font-light tracking-widest">
          {contact.firstname}
          <br />
          {contact.lastname}
        </h1>
        <ResumeSeparator className="bg-white max-w-[50px] mx-auto" />
        <p className="font-raleway font-light uppercase tracking-widest">
          {title}
        </p>
      </div>
    </header>
  );
}
