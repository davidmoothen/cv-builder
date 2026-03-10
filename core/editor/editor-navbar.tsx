"use client"
import Link from "next/link";
import { PrinterIcon } from "lucide-react";
import { useTracking } from "@/core/hooks/useTracking";

interface EditorNavbarProps {
  onPrint: () => void;
}

export function EditorNavbar({ onPrint }: EditorNavbarProps) {
  const { track } = useTracking();

  const handlePrint = () => {
    track("cv-printed");
    onPrint();
  };

  return (
    <header className="flex-shrink-0 h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <Link href="/" className="font-raleway font-light uppercase tracking-widest text-sm text-gray-800 hover:text-gray-500 transition-colors">
        CV Builder
      </Link>
      <button
        onClick={handlePrint}
        className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900
                   hover:bg-gray-100 px-3 py-1.5 rounded-md transition-colors"
      >
        <PrinterIcon className="w-3.5 h-3.5" />
        Imprimer
      </button>
    </header>
  );
}
