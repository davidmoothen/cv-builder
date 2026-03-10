import type { ResumeClient } from "../resume.types";

interface ResumeClientProps {
  client: ResumeClient;
}

export function ResumeClientItem({ client }: ResumeClientProps) {
  return (
    <div className="border-l-2 border-black/20 pl-3 grid gap-1 break-inside-avoid">
      <div>
        <span className="font-semibold">{client.name}</span>
        <span className="text-black/50 italic"> · {client.date}</span>
      </div>
      <p className="text-black/70">{client.description}</p>
      {client.links && client.links.length > 0 && (
        <p className="text-black/50 text-[10px]">{client.links.join(" · ")}</p>
      )}
      {client.achievements.items.length > 0 && (
        <ul className="list-disc list-inside mt-1">
          {client.achievements.items.map((item, index) => (
            <li key={`client-achievement-${index}`}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
