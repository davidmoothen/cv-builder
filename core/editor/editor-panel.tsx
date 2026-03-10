const SECTIONS = [
  { id: "identity", label: "Identité" },
  { id: "bio", label: "Bio" },
  { id: "experiences", label: "Expériences" },
  { id: "skills", label: "Compétences" },
  { id: "languages", label: "Langues" },
  { id: "projects", label: "Projets" },
  { id: "formation", label: "Formation" },
] as const;

export function EditorPanel() {
  return (
    <div className="flex flex-col divide-y divide-gray-100">
      <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Éditer le CV
        </p>
      </div>

      {SECTIONS.map((section) => (
        <div key={section.id} className="px-5 py-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-700">{section.label}</h3>
          </div>
          <div className="h-16 rounded-lg bg-gray-50 border border-dashed border-gray-200 flex items-center justify-center">
            <span className="text-xs text-gray-400">Formulaire à venir</span>
          </div>
        </div>
      ))}
    </div>
  );
}
