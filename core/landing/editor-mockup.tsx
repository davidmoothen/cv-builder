/** CSS-only mockup of the two-column editor. No images needed. */
export function EditorMockup() {
  return (
    <div
      className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200"
      aria-hidden="true"
    >
      {/* Chrome bar */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-300" />
        <span className="w-3 h-3 rounded-full bg-yellow-300" />
        <span className="w-3 h-3 rounded-full bg-green-300" />
        <div className="ml-3 flex-1 bg-white rounded border border-gray-200 px-3 py-1 text-xs text-gray-400">
          cvbuilder.app/editor
        </div>
      </div>

      {/* App shell */}
      <div className="flex bg-gray-200" style={{ height: 380 }}>

        {/* Preview column */}
        <div className="flex-1 flex items-start justify-center p-5 overflow-hidden">
          {/* Miniature CV card */}
          <div className="bg-white rounded shadow-lg flex overflow-hidden" style={{ width: 210, height: 297 }}>
            {/* Sidebar strip */}
            <div className="bg-gray-200 flex flex-col gap-2 p-3" style={{ width: 68 }}>
              <div className="w-full aspect-square rounded-full bg-gray-300 mb-1" />
              <div className="h-1.5 bg-gray-300 rounded w-4/5" />
              <div className="h-1.5 bg-gray-300 rounded w-3/5" />
              <div className="h-1.5 bg-gray-300 rounded w-4/5" />
              <div className="mt-2 h-1 bg-gray-300 rounded w-full" />
              <div className="h-1.5 bg-gray-300 rounded w-4/5 mt-1" />
              <div className="h-1.5 bg-gray-300 rounded w-3/5" />
              <div className="h-1.5 bg-gray-300 rounded w-4/5" />
              <div className="mt-2 h-1 bg-gray-300 rounded w-full" />
              <div className="h-1.5 bg-gray-300 rounded w-3/5 mt-1" />
              <div className="h-1.5 bg-gray-300 rounded w-4/5" />
            </div>
            {/* Main strip */}
            <div className="flex-1 flex flex-col">
              <div className="bg-gray-800 p-3 flex flex-col gap-1.5">
                <div className="h-2 bg-white/60 rounded w-2/3" />
                <div className="h-1.5 bg-white/30 rounded w-1/2" />
              </div>
              <div className="p-3 flex flex-col gap-2">
                <div className="h-1.5 bg-gray-200 rounded w-full" />
                <div className="h-1.5 bg-gray-200 rounded w-5/6" />
                <div className="mt-1 h-1 bg-gray-100 rounded w-full" />
                <div className="h-2 bg-gray-300 rounded w-1/2 mt-1" />
                <div className="h-1.5 bg-gray-200 rounded w-full" />
                <div className="h-1.5 bg-gray-200 rounded w-5/6" />
                <div className="h-1.5 bg-gray-200 rounded w-4/6" />
                <div className="mt-1 h-1 bg-gray-100 rounded w-full" />
                <div className="h-2 bg-gray-300 rounded w-1/2 mt-1" />
                <div className="h-1.5 bg-gray-200 rounded w-full" />
                <div className="h-1.5 bg-gray-200 rounded w-3/6" />
              </div>
            </div>
          </div>
        </div>

        {/* Editor panel */}
        <div className="bg-white border-l border-gray-200 flex flex-col" style={{ width: 220 }}>
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
            <div className="h-2 bg-gray-300 rounded w-2/3" />
          </div>
          {[
            ["Identité", "3/4"],
            ["Bio", "2/3"],
            ["Expériences", "full"],
            ["Compétences", "2/3"],
            ["Langues", "1/2"],
          ].map(([label, width]) => (
            <div key={label} className="px-4 py-3 border-b border-gray-100">
              <div className="h-1.5 bg-gray-400 rounded w-1/3 mb-2" />
              <div className={`h-6 bg-gray-100 rounded border border-dashed border-gray-200 w-${width}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
