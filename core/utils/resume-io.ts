import { resumeSchema } from "@/core/resume/resume.schema"
import type { Resume } from "@/core/resume/resume.types"

export const RESUME_FILE_VERSION = 1

export interface ResumeFile {
  version: number
  exportedAt: string
  resume: Resume
}

export function buildResumeFile(resume: Resume): ResumeFile {
  return {
    version: RESUME_FILE_VERSION,
    exportedAt: new Date().toISOString(),
    resume,
  }
}

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function resumeFileName(resume: Resume): string {
  const name = slugify(`${resume.contact.firstname} ${resume.contact.lastname}`)
  return name ? `cv-${name}.json` : "cv.json"
}

export function downloadResume(resume: Resume): void {
  const blob = new Blob([JSON.stringify(buildResumeFile(resume), null, 2)], {
    type: "application/json",
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = resumeFileName(resume)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function parseResumeFile(text: string): Resume {
  let parsed: unknown
  try {
    parsed = JSON.parse(text)
  } catch {
    throw new Error("Fichier illisible : ce n'est pas un JSON valide.")
  }

  // Accepts both the exported envelope { version, exportedAt, resume }
  // and a bare Resume object (hand-written file).
  const candidate =
    parsed && typeof parsed === "object" && "resume" in parsed
      ? (parsed as { resume: unknown }).resume
      : parsed

  const result = resumeSchema.safeParse(candidate)
  if (!result.success) {
    throw new Error("Ce fichier n'est pas un CV valide.")
  }
  return result.data
}
