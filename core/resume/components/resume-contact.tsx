import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { ResumeSubtitle } from "./resume-subtitle";
import type { ResumeContact } from "../resume.types";

interface ResumeContactProps {
  contact: ResumeContact;
}

export function ResumeContact({ contact }: ResumeContactProps) {
  return (
    <section className="break-inside-avoid">
      <ResumeSubtitle title="Contact" />
      <div className="grid gap-1">
        <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
          <PhoneIcon className="w-4 h-4" />
          <p>{contact.phone}</p>
        </div>
        <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
          <MailIcon className="w-4 h-4" />
          <p>{contact.email}</p>
        </div>
        <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
          <MapPinIcon className="w-4 h-4" />
          <p>{contact.location}</p>
        </div>
        <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
          <GlobeIcon className="w-4 h-4" />
          <p>{contact.website}</p>
        </div>
      </div>
    </section>
  );
}
