import { CalendarIcon, GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { ResumeSubtitle } from "./resume-subtitle";
import type { ResumeContact } from "../resume.types";
import { calculateAge } from "../resume.utils";

interface ResumeContactProps {
  contact: ResumeContact;
}

export function ResumeContact({ contact }: ResumeContactProps) {
  const age = calculateAge(contact.birthdate)

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
        {contact.birthdate && age !== null && (
          <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
            <CalendarIcon className="w-4 h-4" />
            <p>{age} ans</p>
          </div>
        )}
      </div>
    </section>
  );
}
