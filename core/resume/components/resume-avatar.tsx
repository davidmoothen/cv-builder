interface ResumeAvatarProps {
  avatar?: string
  firstname: string
  lastname: string
}

export function ResumeAvatar({ avatar, firstname, lastname }: ResumeAvatarProps) {
  const initials = `${firstname?.[0] ?? ""}${lastname?.[0] ?? ""}`.toUpperCase()

  if (avatar) {
    return (
      <div className="mx-auto w-[90%] aspect-square rounded-full border-5 border-white/30 overflow-hidden mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatar} alt={`${firstname} ${lastname}`} className="w-full h-full object-cover" />
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
