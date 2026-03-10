export function ResumeAvatar({ avatar }: { avatar?: string }) {
  const src = avatar || "/images/avatar.jpg"
  return (
    <div className="mx-auto w-[90%] aspect-square rounded-full border-5 border-white/30 overflow-hidden mb-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Avatar" className="w-full h-full object-cover" />
    </div>
  );
}
