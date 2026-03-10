"use client"
import { PlusIcon, Trash2Icon } from "lucide-react"
import { twMerge } from "tailwind-merge"
import type { ReactNode } from "react"

export const inputCls = "w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
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
