import { ResumeView } from "@/core/resume";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-8 print:p-0 print:bg-white print:block">
      <ResumeView />
    </div>
  );
}
