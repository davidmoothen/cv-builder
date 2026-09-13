"use client"
import { useState } from "react"
import { PlusIcon, RotateCcwIcon, Trash2Icon } from "lucide-react"
import { twMerge } from "tailwind-merge"
import type { ReactNode } from "react"
import type { FontGroup } from "@/core/resume"

export const inputCls = "w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
export const textareaCls = twMerge(inputCls, "resize-none")

export function Field({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <label className="text-xs font-medium text-gray-500">{label}</label>
      {children}
    </div>
  )
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="px-5 py-3 bg-gray-50 border-y border-gray-100 sticky top-0 z-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">{title}</p>
    </div>
  )
}

export function SectionBody({ children }: { children: ReactNode }) {
  return <div className="px-5 py-5 flex flex-col gap-4">{children}</div>
}

export function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 py-1 transition-colors"
    >
      <PlusIcon className="w-3.5 h-3.5" />
      {label}
    </button>
  )
}

export function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-shrink-0 text-gray-300 hover:text-red-400 transition-colors p-0.5"
      aria-label="Supprimer"
    >
      <Trash2Icon className="w-3.5 h-3.5" />
    </button>
  )
}

export function ItemCard({ children }: { children: ReactNode }) {
  return (
    <div className="border border-gray-100 rounded-lg p-3 flex flex-col gap-3 bg-gray-50/50">
      {children}
    </div>
  )
}

/**
 * Normalizes a free-form hex input (`abc`, `#abc`, `1f2937`, `#1F2937`) to `#RRGGBB`.
 * Returns null when the value is not a valid hex color.
 *
 * `allowShorthand` is off while typing: `1f2` is a valid 3-digit color but is
 * almost always just the first keystrokes of a 6-digit one, and committing it
 * would repaint the CV with a wildly different color mid-word.
 */
export function normalizeHexColor(value: string, allowShorthand = true): string | null {
  const raw = value.trim().replace(/^#/, "")
  if (allowShorthand && /^[0-9a-fA-F]{3}$/.test(raw)) {
    return `#${raw.split("").map(c => c + c).join("").toUpperCase()}`
  }
  if (/^[0-9a-fA-F]{6}$/.test(raw)) {
    return `#${raw.toUpperCase()}`
  }
  return null
}

interface ColorFieldProps {
  label: string
  value: string
  defaultValue: string
  onChange: (hex: string) => void
  onReset: () => void
}

export function ColorField({ label, value, defaultValue, onChange, onReset }: ColorFieldProps) {
  /*
   * Local draft so the hex field can be typed into character by character without
   * pushing every keystroke to the store. Only valid values are committed; an
   * invalid one is reverted on blur.
   */
  const [draft, setDraft] = useState(value)
  const [lastValue, setLastValue] = useState(value)
  const isDefault = value.toUpperCase() === defaultValue.toUpperCase()

  /*
   * Resync during render (React's "adjust state when a prop changes" pattern)
   * when the value comes from elsewhere: swatch, reset button, CV import.
   * The draft is kept when it already denotes the incoming value, otherwise
   * committing a keystroke would immediately overwrite what is being typed.
   */
  if (value !== lastValue) {
    setLastValue(value)
    if (normalizeHexColor(draft) !== value) setDraft(value)
  }

  const handleDraftChange = (next: string) => {
    setDraft(next)
    const hex = normalizeHexColor(next, false)
    if (hex) onChange(hex)
  }

  const handleBlur = () => {
    const hex = normalizeHexColor(draft)
    setDraft(hex ?? value)
    if (hex && hex !== value) onChange(hex)
  }

  return (
    <Field label={label}>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value.toUpperCase())}
          className="w-10 h-9 flex-shrink-0 rounded-md border border-gray-200 bg-white p-0.5 cursor-pointer"
          aria-label={`${label} — sélecteur`}
        />
        <input
          className={inputCls}
          value={draft}
          onChange={(e) => handleDraftChange(e.target.value)}
          onBlur={handleBlur}
          spellCheck={false}
          placeholder={defaultValue}
          aria-label={`${label} — code hexadécimal`}
        />
        <ResetButton onClick={onReset} disabled={isDefault} label="Revenir à la couleur par défaut" />
      </div>
    </Field>
  )
}

function ResetButton({ onClick, disabled, label }: { onClick: () => void; disabled: boolean; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex-shrink-0 p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:hover:text-gray-400 disabled:hover:bg-transparent disabled:cursor-default transition-colors"
      title={label}
      aria-label={label}
    >
      <RotateCcwIcon className="w-3.5 h-3.5" />
    </button>
  )
}

interface FontGroupFieldProps {
  groups: FontGroup[]
  value: string
  defaultValue: string
  onChange: (id: string) => void
  onReset: () => void
}

export function FontGroupField({ groups, value, defaultValue, onChange, onReset }: FontGroupFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-gray-500">Groupe de polices</label>
        <ResetButton
          onClick={onReset}
          disabled={value === defaultValue}
          label="Revenir aux polices par défaut"
        />
      </div>
      <div className="flex flex-col gap-2">
        {groups.map((group) => {
          const selected = group.id === value
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => onChange(group.id)}
              aria-pressed={selected}
              className={twMerge(
                "w-full text-left border rounded-lg px-3 py-2 transition-colors",
                selected
                  ? "border-gray-900 bg-gray-50"
                  : "border-gray-200 hover:border-gray-400 bg-white"
              )}
            >
              {/* Chaque ligne est rendue dans la police du rôle qu'elle illustre. */}
              <div className="flex items-baseline justify-between gap-2">
                <span
                  className="text-sm uppercase tracking-widest text-gray-900 truncate"
                  style={{ fontFamily: group.header }}
                >
                  {group.label}
                </span>
                <span className="text-[10px] text-gray-400 flex-shrink-0">{group.headerName}</span>
              </div>
              <div className="flex items-baseline justify-between gap-2 mt-0.5">
                <span className="text-xs text-gray-600 truncate" style={{ fontFamily: group.text }}>
                  Aa — Développeur fullstack
                </span>
                <span className="text-[10px] text-gray-400 flex-shrink-0">{group.textName}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
