import { CalendarIcon, GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { EditableSubtitle } from "./resume-editable-subtitle";
import type { ResumeContact } from "../resume.types";
import { calculateAge } from "../resume.utils";

interface ResumeContactProps {
  contact: ResumeContact;
  title?: string;
  onSaveTitle?: (value: string) => void;
}

export function ResumeContact({ contact, title = "Contact", onSaveTitle }: ResumeContactProps) {
  const age = calculateAge(contact.birthdate);
  const hasAge = contact.birthdate && age !== null;
  const hasAnyField = contact.phone || contact.email || contact.location || contact.website || hasAge;

  if (!hasAnyField) return null;

  return (
    <section className="break-inside-avoid">
      <EditableSubtitle title={title} onSave={onSaveTitle ?? (() => {})} />
      <div className="grid gap-1">
        {contact.phone && (
          <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
            <PhoneIcon className="w-4 h-4" />
            <p>{contact.phone}</p>
          </div>
        )}
        {contact.email && (
          <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
            <MailIcon className="w-4 h-4" />
            <p>{contact.email}</p>
          </div>
        )}
        {contact.location && (
          <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
            <MapPinIcon className="w-4 h-4" />
            <p>{contact.location}</p>
          </div>
        )}
        {contact.website && (
          <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
            <GlobeIcon className="w-4 h-4" />
            <p>{contact.website}</p>
          </div>
        )}
        {hasAge && (
          <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
            <CalendarIcon className="w-4 h-4" />
            <p>{age} ans</p>
          </div>
        )}
      </div>
    </section>
  );
}
