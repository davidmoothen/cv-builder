"use client";
import { useState } from "react";
import { RotateCcwIcon, ShuffleIcon } from "lucide-react";
import { useResumeStore } from "@/core/resume";
import { randomResumes } from "@/core/data/random-resumes";
import { FormDesign } from "./components/form-design";
import { FormPhoto } from "./components/form-photo";
import { FormIdentity } from "./components/form-identity";
import { FormBio } from "./components/form-bio";
import { FormFacts } from "./components/form-facts";
import { FormFormation } from "./components/form-formation";
import { FormSkills } from "./components/form-skills";
import { FormLanguages } from "./components/form-languages";
import { FormExperiences } from "./components/form-experiences";
import { FormProjects } from "./components/form-projects";
import { JobSelector } from "./components/job-selector";
import { ConfirmationModal } from "./components/confirmation-modal";
import { useTracking } from "@/core/hooks/useTracking";
import type { Resume } from "@/core/resume";

const TABS = [
  { id: "form" as const, label: "Formulaire" },
  { id: "design" as const, label: "Design" },
];

type TabId = (typeof TABS)[number]["id"];

export function EditorPanel() {
  const { resetResume, loadResume, isDirty } = useResumeStore();
  const formVersion = useResumeStore((s) => s.formVersion);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);
  const [tab, setTab] = useState<TabId>("form");
  const { track } = useTracking();

  const confirmAction = (action: () => void) => {
    if (isDirty) {
      setPendingAction(() => action);
    } else {
      action();
    }
  };

  const handleReset = () =>
    confirmAction(() => {
      track("cv-reset");
      resetResume();
    });

  const handleLoadResume = (resume: Resume) =>
    confirmAction(() => {
      loadResume(resume);
    });

  const handleJobSelect = (resume: Resume) => {
    track("job-selected", { job: resume.title });
    handleLoadResume(resume);
  };

  const handleRandom = () => {
    const r = randomResumes[Math.floor(Math.random() * randomResumes.length)];
    track("random-cv-generated", { job: r.title });
    handleLoadResume(r);
  };

  return (
    <>
      {/*
       * The panel owns its scrolling (editor-layout only sizes it): the tab bar
       * and the reset footer stay put, and the sticky SectionTitle of each form
       * sticks to the content area rather than to the whole panel.
       */}
      <div className="flex flex-col h-full">
        {/* Tabs */}
        {/* <nav className="flex-shrink-0 flex border-b border-gray-200">
          {TABS.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              aria-current={tab === t.id ? "page" : undefined}
              className={`flex-1 py-3 text-xs font-semibold uppercase tracking-widest border-b-2 -mb-px transition-colors ${
                tab === t.id
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav> */}

        <div className="flex-1 min-h-0 overflow-y-auto">
          {tab === "design" && <FormDesign />}

          <div className={tab === "form" ? undefined : "hidden"}>
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
            <div key={formVersion}>
              <FormPhoto />
              <FormIdentity />
              <FormBio />
              <FormFacts />
              <FormFormation />
              <FormSkills />
              <FormLanguages />
              <FormExperiences />
              <FormProjects />
            </div>
          </div>
        </div>

        {/* Reset button */}
        <div className="flex-shrink-0 px-5 py-5 border-t border-gray-100 bg-white">
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
          pendingAction?.();
          setPendingAction(null);
        }}
      />
    </>
  );
}
