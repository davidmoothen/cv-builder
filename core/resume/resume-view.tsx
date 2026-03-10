"use client";

import { useResumeStore } from "./resume.store";
import { ResumeDocument } from "./components/resume-document";

export function ResumeView() {
  const resume = useResumeStore((state) => state.resume);
  return <ResumeDocument resume={resume} />;
}
