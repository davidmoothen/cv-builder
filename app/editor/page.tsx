import type { Metadata } from "next";
import { EditorLayout } from "@/core/editor";

export const metadata: Metadata = {
  title: "Éditeur — CV Builder",
};

export default function EditorPage() {
  return <EditorLayout />;
}
