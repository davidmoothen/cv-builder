import { twMerge } from "tailwind-merge";

interface ResumeSeparatorProps {
  className?: string;
}

export function ResumeSeparator({ className }: ResumeSeparatorProps) {
  return <div className={twMerge("h-px bg-current w-full my-4", className)} />;
}
