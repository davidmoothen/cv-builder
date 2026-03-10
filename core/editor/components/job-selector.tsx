"use client"
import { useState, useRef, useEffect } from "react"
import { ChevronDownIcon, SearchIcon } from "lucide-react"
import { randomResumes } from "@/core/data/random-resumes"
import type { Resume } from "@/core/resume"

interface JobSelectorProps {
  onSelect: (resume: Resume) => void
}

export function JobSelector({ onSelect }: JobSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const filtered = randomResumes.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div ref={ref} className="relative flex-1">
      <button
        type="button"
        onClick={() => setIsOpen(o => !o)}
        className="w-full flex items-center justify-between gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-gray-400 bg-white transition-colors"
      >
        <span className="truncate">Sélectionner un métier</span>
        <ChevronDownIcon className={`w-3.5 h-3.5 flex-shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="p-2 border-b border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-2 py-1.5">
              <SearchIcon className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <input
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher un métier..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="max-h-52 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="px-3 py-3 text-xs text-gray-400 text-center">Aucun résultat</p>
            ) : (
              filtered.map((resume, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    onSelect(resume)
                    setIsOpen(false)
                    setSearch("")
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors truncate"
                >
                  {resume.title}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
