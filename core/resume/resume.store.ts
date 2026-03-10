"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultResume } from "@/core/data/default-resume";
import type { Resume } from "./resume.types";

interface ResumeStore {
  resume: Resume;
  updateResume: (resume: Resume) => void;
  resetResume: () => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      resume: defaultResume,
      updateResume: (resume) => set({ resume }),
      resetResume: () => set({ resume: defaultResume }),
    }),
    {
      name: "cv-resume",
    }
  )
);
