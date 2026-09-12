"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultResume } from "@/core/data/default-resume";

const emptyResume = {
  title: "",
  contact: { lastname: "", firstname: "", phone: "", email: "", location: "", website: "", birthdate: "" },
  bio: { sentences: [], skills: [] },
  formations: [],
  experiences: [],
  skills: [],
  languages: [],
  projects: [],
  facts: [],
};
import type { Resume } from "./resume.types";

interface ResumeStore {
  resume: Resume;
  isDirty: boolean;
  photoMode: "url" | "upload";
  /** Bumped on every external load/reset so the editor forms remount with fresh defaults. */
  formVersion: number;
  updateResume: (resume: Resume) => void;
  patchResume: (patch: Partial<Resume>) => void;
  resetResume: () => void;
  loadResume: (resume: Resume) => void;
  setDirty: (v: boolean) => void;
  setPhotoMode: (mode: "url" | "upload") => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      resume: defaultResume,
      isDirty: false,
      photoMode: "url",
      formVersion: 0,
      updateResume: (resume) => set({ resume, isDirty: true }),
      patchResume: (patch) => set(state => ({ resume: { ...state.resume, ...patch }, isDirty: true })),
      resetResume: () => set(state => ({
        resume: emptyResume,
        isDirty: false,
        photoMode: "url",
        formVersion: state.formVersion + 1,
      })),
      loadResume: (resume) => set(state => ({
        resume,
        isDirty: false,
        photoMode: resume.contact.photoBase64 ? "upload" : "url",
        formVersion: state.formVersion + 1,
      })),
      setDirty: (v) => set({ isDirty: v }),
      setPhotoMode: (mode) => set({ photoMode: mode }),
    }),
    {
      name: "cv-resume",
      // Persist photoMode alongside the resume: without it an uploaded photo
      // is stored but never displayed again after a reload.
      partialize: (state) => ({ resume: state.resume, photoMode: state.photoMode }),
      // Derive photoMode for CVs persisted before it was stored.
      merge: (persisted, current) => {
        const saved = (persisted ?? {}) as Partial<Pick<ResumeStore, "resume" | "photoMode">>;
        const resume = saved.resume ?? current.resume;
        return {
          ...current,
          resume,
          photoMode: saved.photoMode ?? (resume.contact.photoBase64 ? "upload" : "url"),
        };
      },
    }
  )
);
