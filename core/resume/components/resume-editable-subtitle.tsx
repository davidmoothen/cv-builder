"use client";

import { useState } from "react";
import { PencilIcon, CheckIcon, XIcon } from "lucide-react";

interface EditableSubtitleProps {
  title: string;
  onSave: (value: string) => void;
}

export function EditableSubtitle({ title, onSave }: EditableSubtitleProps) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(title);

  function handleEdit() {
    setValue(title);
    setEditing(true);
  }

  function handleConfirm() {
    onSave(value.trim() || title);
    setEditing(false);
  }

  function handleCancel() {
    setValue(title);
    setEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleConfirm();
    if (e.key === "Escape") handleCancel();
  }

  if (editing) {
    return (
      <div className="flex items-center gap-1 mb-4 print:hidden">
        <input
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="text-sm font-bold font-noto tracking-widest uppercase border-b border-black/40 bg-transparent outline-none flex-1 min-w-0"
        />
        <button
          onClick={handleConfirm}
          className="p-0.5 text-green-600 hover:text-green-700 shrink-0 cursor-pointer"
          title="Valider"
        >
          <CheckIcon className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={handleCancel}
          className="p-0.5 text-red-500 hover:text-red-600 shrink-0 cursor-pointer"
          title="Annuler"
        >
          <XIcon className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 mb-4 group/subtitle cursor-pointer" onClick={handleEdit}>
      <h2 className="text-sm font-bold font-noto tracking-widest uppercase">
        {title}
      </h2>
      <button
        onClick={handleEdit}
        className="p-0.5 text-black/30 hover:text-black/60 opacity-0 group-hover/subtitle:opacity-100 transition-opacity print:hidden shrink-0 cursor-pointer"
        title="Modifier le titre"
      >
        <PencilIcon className="w-3 h-3" />
      </button>
    </div>
  );
}
