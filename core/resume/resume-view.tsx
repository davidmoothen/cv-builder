"use client";

import { useResumeStore } from "./resume.store";
import { ResumePageBuilder } from "./resume-page-builder";

export function ResumeView() {
  const resume = useResumeStore((state) => state.resume);
  return <ResumePageBuilder resume={resume} />;
}
