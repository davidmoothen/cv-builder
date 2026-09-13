interface ResumeSubtitleProps {
  title: string;
}

export function ResumeSubtitle({ title }: ResumeSubtitleProps) {
  return (
    <h2 className="text-sm font-bold font-title tracking-widest uppercase mb-4">
      {title}
    </h2>
  );
}
