"use client"
import { useState } from "react"
import { RotateCcwIcon } from "lucide-react"
import { useResumeStore } from "@/core/resume"
import { FormIdentity } from "./components/form-identity"
import { FormBio } from "./components/form-bio"
import { FormFormation } from "./components/form-formation"
import { FormSkills } from "./components/form-skills"
import { FormLanguages } from "./components/form-languages"
import { FormExperiences } from "./components/form-experiences"
import { FormProjects } from "./components/form-projects"

export function EditorPanel() {
  const resetResume = useResumeStore(s => s.resetResume)
  const [resetKey, setResetKey] = useState(0)

  const handleReset = () => {
    resetResume()
    setResetKey(k => k + 1)
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Forms — remount on reset via key */}
      <div key={resetKey} className="flex-1">
        <FormIdentity />
        <FormBio />
        <FormFormation />
        <FormSkills />
        <FormLanguages />
        <FormExperiences />
        <FormProjects />
      </div>

      {/* Reset button */}
      <div className="px-5 py-5 border-t border-gray-100 sticky bottom-0 bg-white">
        <button
          type="button"
          onClick={handleReset}
          className="w-full flex items-center justify-center gap-2
                     text-sm text-gray-500 hover:text-red-500
                     border border-gray-200 hover:border-red-200
                     rounded-lg py-2.5 transition-colors"
        >
          <RotateCcwIcon className="w-3.5 h-3.5" />
          Réinitialiser le CV
        </button>
      </div>
    </div>
  )
}
