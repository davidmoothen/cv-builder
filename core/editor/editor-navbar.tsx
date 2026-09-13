"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DownloadIcon, PrinterIcon, UploadIcon } from "lucide-react";
import { useResumeStore } from "@/core/resume";
import type { Resume } from "@/core/resume";
import { downloadResume, parseResumeFile } from "@/core/utils/resume-io";
import { useTracking } from "@/core/hooks/useTracking";
import { ConfirmationModal } from "./components/confirmation-modal";

const ERROR_TIMEOUT_MS = 4000;

const navButtonCls =
  "flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 " +
  "hover:bg-gray-100 px-3 py-1.5 rounded-md transition-colors";

interface EditorNavbarProps {
  onPrint: () => void;
}

export function EditorNavbar({ onPrint }: EditorNavbarProps) {
  const { track } = useTracking();
  const loadResume = useResumeStore(s => s.loadResume);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [pendingResume, setPendingResume] = useState<Resume | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!error) return;
    const id = setTimeout(() => setError(null), ERROR_TIMEOUT_MS);
    return () => clearTimeout(id);
  }, [error]);

  const handlePrint = () => {
    track("cv-printed");
    onPrint();
  };

  const handleExport = () => {
    track("cv-exported");
    downloadResume(useResumeStore.getState().resume);
  };

  const applyImport = (resume: Resume) => {
    track("cv-imported");
    loadResume(resume);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    try {
      const resume = parseResumeFile(await file.text());
      if (useResumeStore.getState().isDirty) {
        setPendingResume(resume);
      } else {
        applyImport(resume);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import impossible.");
    }
    // Reset so re-picking the same file fires onChange again
    e.target.value = "";
  };

  return (
    <>
      <header className="flex-shrink-0 h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4">
        <Link href="/" className="font-header font-light uppercase tracking-widest text-sm text-gray-800 hover:text-gray-500 transition-colors">
          CV Builder
        </Link>

        <div className="flex items-center gap-1 min-w-0">
          {error && (
            <p className="text-xs text-red-500 truncate mr-2" role="alert">
              {error}
            </p>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={handleFileChange}
          />
          <button onClick={() => fileInputRef.current?.click()} className={navButtonCls} title="Importer un CV (JSON)">
            <UploadIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="hidden sm:inline">Importer</span>
          </button>

          <button onClick={handleExport} className={navButtonCls} title="Exporter le CV (JSON)">
            <DownloadIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="hidden sm:inline">Exporter</span>
          </button>

          <button onClick={handlePrint} className={navButtonCls} title="Imprimer le CV">
            <PrinterIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="hidden sm:inline">Imprimer</span>
          </button>
        </div>
      </header>

      <ConfirmationModal
        isOpen={pendingResume !== null}
        message="Le CV importé remplacera le CV en cours. Continuer ?"
        onCancel={() => setPendingResume(null)}
        onConfirm={() => {
          if (pendingResume) applyImport(pendingResume);
          setPendingResume(null);
        }}
      />
    </>
  );
}
