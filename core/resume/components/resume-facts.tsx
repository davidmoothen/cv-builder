interface ResumeFactsProps {
  facts: string[];
}

export function ResumeFacts({ facts }: ResumeFactsProps) {
  const visible = facts.filter(Boolean);
  if (visible.length === 0) return null;

  return (
    <p className="font-bold leading-relaxed mt-3">
      {visible.map((fact, i) => (
        <span key={i} className="whitespace-nowrap">
          {fact}{i < visible.length - 1 && <span className="whitespace-normal"> · </span>}
        </span>
      ))}
    </p>
  );
}
