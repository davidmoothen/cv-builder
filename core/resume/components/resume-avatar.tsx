"use client"
import { useResumeStore } from "@/core/resume"
import { normalizeImageUrl } from "@/core/utils/image"

interface ResumeAvatarProps {
  photoUrl?: string
  photoBase64?: string
  firstname: string
  lastname: string
}

export function ResumeAvatar({ photoUrl, photoBase64, firstname, lastname }: ResumeAvatarProps) {
  const photoMode = useResumeStore(s => s.photoMode)
  const initials = `${firstname?.[0] ?? ""}${lastname?.[0] ?? ""}`.toUpperCase()

  const src =
    photoMode === "upload"
      ? (photoBase64 ?? null)
      : (photoUrl ? normalizeImageUrl(photoUrl) : null)

  if (src) {
    return (
      <div className="mx-auto w-[90%] aspect-square rounded-full border-5 border-white/30 overflow-hidden mb-4">
        <img src={src} alt={`${firstname} ${lastname}`} className="w-full h-full object-cover" />
      </div>
    )
  }

  return (
    <div className="mx-auto w-[90%] aspect-square rounded-full border-5 border-white/30 overflow-hidden mb-4 bg-gray-700 flex items-center justify-center">
      <span className="font-raleway font-light text-white text-2xl tracking-widest">
        {initials || "?"}
      </span>
    </div>
  )
}
