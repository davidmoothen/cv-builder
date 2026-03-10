"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import type { Resume } from "./resume.types";
import { ResumeDocument } from "./components/resume-document";

// 297mm × 210mm at 96 dpi
const PAGE_HEIGHT_PX = 1123;
const PAGE_WIDTH_PX = 794;

interface ResumePagedPreviewProps {
  resume: Resume;
}

export function ResumePagedPreview({ resume }: ResumePagedPreviewProps) {
  const ghostRef = useRef<HTMLDivElement>(null);
  const [pageCount, setPageCount] = useState(1);

  const measure = useCallback(() => {
    if (!ghostRef.current) return;
    const h = ghostRef.current.scrollHeight;
    setPageCount(Math.max(1, Math.ceil(h / PAGE_HEIGHT_PX)));
  }, []);

  useEffect(() => {
    measure();
    const el = ghostRef.current;
    if (!el) return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [resume, measure]);

  return (
    <>
      {/* Ghost: off-screen, used to measure the natural document height */}
      <div
        ref={ghostRef}
        className="fixed pointer-events-none opacity-0 -z-50"
        style={{ top: -9999, left: -9999, width: PAGE_WIDTH_PX }}
        aria-hidden="true"
      >
        <ResumeDocument resume={resume} />
      </div>

      {/* Screen preview: N clipped A4 pages separated by gap */}
      <div className="flex flex-col items-center gap-8 p-8 print:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <div
            key={i}
            className="relative bg-white shadow-xl overflow-hidden"
            style={{ width: PAGE_WIDTH_PX, height: PAGE_HEIGHT_PX }}
          >
            <div
              className="absolute top-0 left-0"
              style={{
                transform: `translateY(-${i * PAGE_HEIGHT_PX}px)`,
                width: PAGE_WIDTH_PX,
              }}
            >
              <ResumeDocument resume={resume} />
            </div>
          </div>
        ))}
      </div>

      {/* Print: full flowing document — @page + break-inside-avoid handles pagination */}
      <div className="hidden print:block">
        <ResumeDocument resume={resume} />
      </div>
    </>
  );
}
