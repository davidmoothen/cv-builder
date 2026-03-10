import { PrinterIcon } from "lucide-react";

interface EditorNavbarProps {
  onPrint: () => void;
}

export function EditorNavbar({ onPrint }: EditorNavbarProps) {
  return (
    <header className="flex-shrink-0 h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <span className="font-raleway font-light uppercase tracking-widest text-sm text-gray-800">
        CV Builder
      </span>
      <button
        onClick={onPrint}
        className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900
                   hover:bg-gray-100 px-3 py-1.5 rounded-md transition-colors"
      >
        <PrinterIcon className="w-3.5 h-3.5" />
        Imprimer
      </button>
    </header>
  );
}
