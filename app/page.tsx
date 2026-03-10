import { ResumeView } from "@/core/resume";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 print:bg-white overflow-x-auto">
      <ResumeView />
    </main>
  );
}
