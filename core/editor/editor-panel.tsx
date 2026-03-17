"use client"
import { useState } from "react"
import { RotateCcwIcon, ShuffleIcon } from "lucide-react"
import { useResumeStore } from "@/core/resume"
import { randomResumes } from "@/core/data/random-resumes"
import { FormPhoto } from "./components/form-photo"
import { FormIdentity } from "./components/form-identity"
import { FormBio } from "./components/form-bio"
import { FormFormation } from "./components/form-formation"
import { FormSkills } from "./components/form-skills"
import { FormLanguages } from "./components/form-languages"
import { FormExperiences } from "./components/form-experiences"
import { FormProjects } from "./components/form-projects"
import { JobSelector } from "./components/job-selector"
import { ConfirmationModal } from "./components/confirmation-modal"
import { useTracking } from "@/core/hooks/useTracking"
import type { Resume } from "@/core/resume"

export function EditorPanel() {
  const { resetResume, loadResume, isDirty } = useResumeStore()
  const [resetKey, setResetKey] = useState(0)
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null)
  const { track } = useTracking()

  const confirmAction = (action: () => void) => {
    if (isDirty) {
      setPendingAction(() => action)
    } else {
      action()
    }
  }

  const handleReset = () => confirmAction(() => {
    track("cv-reset")
    resetResume()
    setResetKey(k => k + 1)
  })

  const handleLoadResume = (resume: Resume) => confirmAction(() => {
    loadResume(resume)
    setResetKey(k => k + 1)
  })

  const handleJobSelect = (resume: Resume) => {
    track("job-selected", { job: resume.title })
    handleLoadResume(resume)
  }

  const handleRandom = () => {
    const r = randomResumes[Math.floor(Math.random() * randomResumes.length)]
    track("random-cv-generated", { job: r.title })
    handleLoadResume(r)
  }

  return (
    <>
      <div className="flex flex-col min-h-full">
        {/* Load CV section */}
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Charger un CV exemple
          </p>
          <div className="flex gap-2">
            <JobSelector onSelect={handleJobSelect} />
            <button
              type="button"
              onClick={handleRandom}
              className="flex-shrink-0 flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors bg-white"
              title="CV aléatoire"
            >
              <ShuffleIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Forms — remount on reset via key */}
        <div key={resetKey} className="flex-1">
          <FormPhoto />
          <FormIdentity />
          <FormBio />
          <FormFormation />
          <FormSkills />
          <FormLanguages />
          <FormExperiences />
          <FormProjects />
        </div>

        {/* Reset button */}
        <div className="px-5 py-5 border-t border-gray-100 sticky bottom-0 bg-white z-20">
          <button
            type="button"
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-red-500 border border-gray-200 hover:border-red-200 rounded-lg py-2.5 transition-colors"
          >
            <RotateCcwIcon className="w-3.5 h-3.5" />
            Réinitialiser le CV
          </button>
        </div>
      </div>

      <ConfirmationModal
        isOpen={pendingAction !== null}
        onCancel={() => setPendingAction(null)}
        onConfirm={() => {
          pendingAction?.()
          setPendingAction(null)
        }}
      />
    </>
  )
}
