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
      updateResume: (resume) => set({ resume, isDirty: true }),
      patchResume: (patch) => set(state => ({ resume: { ...state.resume, ...patch }, isDirty: true })),
      resetResume: () => set({ resume: emptyResume, isDirty: false }),
      loadResume: (resume) => set({ resume, isDirty: false }),
      setDirty: (v) => set({ isDirty: v }),
      setPhotoMode: (mode) => set({ photoMode: mode }),
    }),
    {
      name: "cv-resume",
      partialize: (state) => ({ resume: state.resume }), // only persist resume, not isDirty
    }
  )
);
