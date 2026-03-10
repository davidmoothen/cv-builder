"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultResume } from "@/core/data/default-resume";

const emptyResume = {
  title: "",
  contact: { lastname: "", firstname: "", phone: "", email: "", location: "", website: "", avatar: "", birthdate: "" },
  bio: { sentences: [], skills: [] },
  formations: [],
  experiences: [],
  skills: [],
  languages: [],
  projects: [],
};
import type { Resume } from "./resume.types";

interface ResumeStore {
  resume: Resume;
  isDirty: boolean;
  updateResume: (resume: Resume) => void;
  patchResume: (patch: Partial<Resume>) => void;
  resetResume: () => void;
  loadResume: (resume: Resume) => void;
  setDirty: (v: boolean) => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      resume: defaultResume,
      isDirty: false,
      updateResume: (resume) => set({ resume, isDirty: true }),
      patchResume: (patch) => set(state => ({ resume: { ...state.resume, ...patch }, isDirty: true })),
      resetResume: () => set({ resume: emptyResume, isDirty: false }),
      loadResume: (resume) => set({ resume, isDirty: false }),
      setDirty: (v) => set({ isDirty: v }),
    }),
    {
      name: "cv-resume",
      partialize: (state) => ({ resume: state.resume }), // only persist resume, not isDirty
    }
  )
);
