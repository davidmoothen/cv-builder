"use client";

import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import type { Resume } from "./resume.types";
import { ResumeHeader } from "./components/resume-header";
import { ResumeBio } from "./components/resume-bio";
import { ResumeSeparator } from "./components/resume-separator";
import { ResumeSubtitle } from "./components/resume-subtitle";
import { ResumeExperienceItem } from "./components/resume-experience";
import { ResumeProjectItem } from "./components/resume-project";
import { ResumeAvatar } from "./components/resume-avatar";
import { ResumeContact } from "./components/resume-contact";
import { ResumeFormation } from "./components/resume-formation";
import { ResumeSkills } from "./components/resume-skills";
import { ResumeLanguages } from "./components/resume-languages";

// 210mm × 297mm at 96 dpi
const PAGE_WIDTH = 794;
const PAGE_HEIGHT = 1123;
const SIDEBAR_WIDTH = 260;
const MAIN_WIDTH = PAGE_WIDTH - SIDEBAR_WIDTH; // 534px

// Vertical breathing room for page content.
// PADDING_TOP must be >= height of the mini-header rendered on pages 2+.
const PADDING_TOP = 40;    // applied on pages 2+ (accommodates mini-header ~36px + gap)
const PADDING_BOTTOM = 32; // applied on all pages

const FIRST_PAGE_CONTENT_HEIGHT = PAGE_HEIGHT - PADDING_BOTTOM;
const OTHER_PAGE_CONTENT_HEIGHT = PAGE_HEIGHT - PADDING_TOP - PADDING_BOTTOM;

// ---------------------------------------------------------------------------
// Block model
// ---------------------------------------------------------------------------

interface ContentBlock {
  id: string;
  node: React.ReactNode;
}

/**
 * Flatten a Resume into an ordered list of individually-measurable blocks.
 * Separator + section title are bundled to prevent orphaned titles at page top.
 */
function buildBlocks(resume: Resume): ContentBlock[] {
  const blocks: ContentBlock[] = [];

  blocks.push({
    id: "header",
    node: <ResumeHeader contact={resume.contact} title={resume.title} />,
  });

  blocks.push({
    id: "bio",
    node: <ResumeBio bio={resume.bio} />,
  });

  blocks.push({
    id: "experiences-heading",
    node: (
      <>
        <ResumeSeparator />
        <ResumeSubtitle title="Expériences" />
      </>
    ),
  });

  resume.experiences.forEach((exp, i) => {
    blocks.push({ id: `exp-${i}`, node: <ResumeExperienceItem experience={exp} /> });
  });

  if (resume.projects && resume.projects.length > 0) {
    blocks.push({
      id: "projects-heading",
      node: (
        <>
          <ResumeSeparator />
          <ResumeSubtitle title="Projets personnels" />
        </>
      ),
    });

    resume.projects.forEach((proj, i) => {
      blocks.push({ id: `proj-${i}`, node: <ResumeProjectItem project={proj} /> });
    });
  }

  return blocks;
}

// ---------------------------------------------------------------------------
// Packing algorithm
// ---------------------------------------------------------------------------

/**
 * Greedy bin-packing: fills each page top-to-bottom.
 *
 * Heights are measured with `display: flow-root` wrappers (BFC), so they
 * include any bottom margins from child elements (no margin-collapse leakage).
 *
 * A block that does not fit in the remaining space starts a new page.
 * A block taller than a full page is forced onto its own page (no infinite loop).
 */
function packBlocks(
  blocks: ContentBlock[],
  heights: Record<string, number>,
  firstPageHeight: number,
  otherPageHeight: number
): ContentBlock[][] {
  const pages: ContentBlock[][] = [[]];
  let remaining = firstPageHeight;

  for (const block of blocks) {
    const h = heights[block.id] ?? 0;
    const current = pages[pages.length - 1];

    if (current.length === 0 || h <= remaining) {
      current.push(block);
      remaining -= h;
    } else {
      pages.push([block]);
      remaining = otherPageHeight - h;
    }
  }

  return pages;
}

// ---------------------------------------------------------------------------
// Sidebar
// ---------------------------------------------------------------------------

function SidebarContent({ resume }: { resume: Resume }) {
  return (
    <>
      <ResumeAvatar avatar={resume.contact.avatar} />
      <ResumeContact contact={resume.contact} />
      <ResumeSeparator />
      <ResumeFormation formations={resume.formations} />
      <ResumeSeparator />
      <ResumeSkills skills={resume.skills} />
      <ResumeSeparator />
      <ResumeLanguages languages={resume.languages} />
    </>
  );
}

// ---------------------------------------------------------------------------
// Single page
// ---------------------------------------------------------------------------

interface PageProps {
  resume: Resume;
  blocks: ContentBlock[];
  pageIndex: number;
  totalPages: number;
}

function Page({ resume, blocks, pageIndex, totalPages }: PageProps) {
  return (
    <div
      className="relative bg-white shadow-xl overflow-hidden print:shadow-none"
      style={{
        width: PAGE_WIDTH,
        height: PAGE_HEIGHT,
        breakAfter: pageIndex < totalPages - 1 ? "page" : "auto",
      }}
    >
      {/* Sidebar: full content on page 1, empty gray background on subsequent pages */}
      <div
        className="absolute inset-y-0 left-0 bg-black/15 font-sans text-xs px-8 py-4 flex flex-col"
        style={{ width: SIDEBAR_WIDTH }}
      >
        {pageIndex === 0 && <SidebarContent resume={resume} />}
      </div>

      {/*
       * Main content column.
       * px-8 mirrors the ghost so measured heights are identical to rendered heights.
       * overflow-hidden clips any sub-pixel overflow at the page boundary.
       * ResumeHeader uses -mx-8 to bleed edge-to-edge within this container.
       */}
      <div
        className="font-sans text-xs px-8 overflow-hidden"
        style={{
          marginLeft: SIDEBAR_WIDTH,
          height: PAGE_HEIGHT,
          paddingTop: pageIndex === 0 ? 0 : PADDING_TOP,
          paddingBottom: PADDING_BOTTOM,
        }}
      >
        {pageIndex > 0 && (
          <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-black/15">
            <span className="font-raleway font-light uppercase tracking-widest text-[10px] text-black/60">
              {resume.contact.firstname} {resume.contact.lastname}
            </span>
            <span className="text-[10px] text-black/40">
              {pageIndex + 1} / {totalPages}
            </span>
          </div>
        )}
        {blocks.map((block) => (
          /*
           * display: flow-root creates a Block Formatting Context (BFC).
           * This prevents margin-collapse leakage: bottom margins of children
           * (e.g. mb-4 on ResumeExperienceItem) are contained within this div,
           * so getBoundingClientRect().height in the ghost returns the true
           * visual height including those margins. Without BFC, margins escape
           * the wrapper → heights are under-measured → content overflows.
           */
          <div key={block.id} style={{ display: "flow-root" }}>
            {block.node}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function ResumePageBuilder({ resume }: { resume: Resume }) {
  const blocks = useMemo(() => buildBlocks(resume), [resume]);
  const blockRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [pages, setPages] = useState<ContentBlock[][]>([]);

  const measure = useCallback(() => {
    const heights: Record<string, number> = {};
    for (const block of blocks) {
      const el = blockRefs.current[block.id];
      if (el) heights[block.id] = el.getBoundingClientRect().height;
    }
    setPages(packBlocks(blocks, heights, FIRST_PAGE_CONTENT_HEIGHT, OTHER_PAGE_CONTENT_HEIGHT));
  }, [blocks]);

  useEffect(() => {
    // document.fonts.ready: ensures web fonts are loaded before measuring.
    // requestAnimationFrame: defers until after the browser has painted the ghost.
    document.fonts.ready.then(() => requestAnimationFrame(measure));
  }, [measure]);

  return (
    <>
      {/*
       * Ghost container: same font-sans text-xs px-8 as the page main column.
       * display:flow-root on each block wrapper (BFC) matches the page render exactly.
       * Fixed off-screen so it never affects layout or scroll.
       */}
      <div
        className="fixed font-sans text-xs px-8 pointer-events-none opacity-0"
        style={{ top: -9999, left: -9999, width: MAIN_WIDTH }}
        aria-hidden="true"
      >
        {blocks.map((block) => (
          <div
            key={block.id}
            ref={(el) => {
              blockRefs.current[block.id] = el;
            }}
            style={{ display: "flow-root" }}
          >
            {block.node}
          </div>
        ))}
      </div>

      {/* Screen preview: pages stacked with gap. Print: stacked with page breaks. */}
      <div className="flex flex-col items-center gap-8 p-8 print:p-0 print:gap-0 print:block">
        {pages.map((pageBlocks, i) => (
          <Page
            key={i}
            resume={resume}
            blocks={pageBlocks}
            pageIndex={i}
            totalPages={pages.length}
          />
        ))}
      </div>
    </>
  );
}
