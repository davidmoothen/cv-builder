interface ResumeSubtitleProps {
  title: string;
}

export function ResumeSubtitle({ title }: ResumeSubtitleProps) {
  return (
    <h2 className="text-sm font-bold font-noto tracking-widest uppercase mb-4">
      {title}
    </h2>
  );
}
