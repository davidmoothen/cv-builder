"use client";

import { useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import { ResumeView } from "@/core/resume";
import { Footer } from "@/core/components/footer";
import { EditorNavbar } from "./editor-navbar";
import { EditorPanel } from "./editor-panel";

const PANEL_WIDTH = 390;
// Delay print until the panel close animation finishes
const ANIMATION_DURATION_MS = 320;

export function EditorLayout() {
  const [isOpen, setIsOpen] = useState(true);

  const handlePrint = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => window.print(), ANIMATION_DURATION_MS);
    } else {
      window.print();
    }
  };

  return (
    /*
     * Screen: h-screen overflow-hidden for the editor shell.
     * Print:  completely reset — block layout, auto height, visible overflow
     *         so the browser can paginate the full CV content.
     */
    <div className="h-screen overflow-hidden flex flex-col print:block print:h-auto print:overflow-visible">
      {/* ── Navbar: hidden at print ──────────────────────────────────────── */}
      <div className="print:hidden">
        <EditorNavbar onPrint={handlePrint} />
      </div>

      {/* ── Body (preview + panel) ──────────────────────────────────────── */}
      <div className="flex-1 flex overflow-hidden min-h-0 print:block print:overflow-visible">

        {/* ── Left: preview area ──────────────────────────────────────────── */}
        <div className="flex-1 min-w-0 overflow-auto bg-gray-200 print:overflow-visible print:bg-white">
          <ResumeView />
        </div>

        {/* ── Desktop panel: hidden at print ──────────────────────────────── */}
        <div
          className="hidden lg:block flex-shrink-0 overflow-hidden
                     transition-[width] duration-300 ease-in-out
                     print:hidden"
          style={{ width: isOpen ? PANEL_WIDTH : 0 }}
        >
          <div
            className="h-full overflow-y-auto bg-white border-l border-gray-200"
            style={{ width: PANEL_WIDTH }}
          >
            <EditorPanel />
          </div>
        </div>

        {/* ── Mobile panel: hidden at print ───────────────────────────────── */}
        <div
          className="lg:hidden fixed inset-y-0 right-0 z-40
                     bg-white border-l border-gray-200 overflow-y-auto
                     transition-transform duration-300 ease-in-out
                     print:hidden"
          style={{
            width: PANEL_WIDTH,
            transform: isOpen ? "translateX(0)" : `translateX(${PANEL_WIDTH}px)`,
          }}
        >
          <EditorPanel />
        </div>
      </div>

      {/* ── Footer: always visible, hidden at print ─────────────────────── */}
      <div className="print:hidden">
        <Footer />
      </div>

      {/* ── Toggle "languette": hidden at print ─────────────────────────── */}
      <button
        className="fixed top-1/2 -translate-y-1/2 z-50
                   flex items-center justify-center
                   w-6 py-5 bg-white border border-gray-200 border-r-0
                   rounded-l-lg shadow-md
                   hover:bg-gray-50 active:bg-gray-100
                   transition-[right] duration-300 ease-in-out
                   print:hidden"
        style={{ right: isOpen ? PANEL_WIDTH : 0 }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fermer le panneau" : "Ouvrir le panneau"}
      >
        <ChevronRightIcon
          className={`w-3.5 h-3.5 text-gray-500
                      transition-transform duration-300
                      ${isOpen ? "" : "rotate-180"}`}
        />
      </button>
    </div>
  );
}
