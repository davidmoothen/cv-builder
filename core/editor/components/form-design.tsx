"use client"
import { DEFAULT_FONT_GROUP_ID, DEFAULT_THEME, FONT_GROUPS, getTheme, useResumeStore } from "@/core/resume"
import type { ResumeTheme } from "@/core/resume"
import { ColorField, FontGroupField, SectionBody, SectionTitle } from "./ui"

export function FormDesign() {
  const resume = useResumeStore(s => s.resume)
  const patchResume = useResumeStore(s => s.patchResume)
  const theme = getTheme(resume)

  /*
   * Reset writes the default value back instead of dropping the key, so the theme
   * always stays a complete object — `getTheme` covers the missing-key case anyway.
   */
  const set = (patch: Partial<ResumeTheme>) => patchResume({ theme: { ...theme, ...patch } })

  return (
    <>
      <SectionTitle title="Typographie" />
      <SectionBody>
        <FontGroupField
          groups={FONT_GROUPS}
          value={theme.fontGroup}
          defaultValue={DEFAULT_FONT_GROUP_ID}
          onChange={id => set({ fontGroup: id })}
          onReset={() => set({ fontGroup: DEFAULT_FONT_GROUP_ID })}
        />
      </SectionBody>

      <SectionTitle title="Couleurs" />
      <SectionBody>
        <ColorField
          label="Fond de la colonne de gauche"
          value={theme.sidebarBg}
          defaultValue={DEFAULT_THEME.sidebarBg}
          onChange={v => set({ sidebarBg: v })}
          onReset={() => set({ sidebarBg: DEFAULT_THEME.sidebarBg })}
        />
        <ColorField
          label="Texte de la colonne de gauche"
          value={theme.sidebarText}
          defaultValue={DEFAULT_THEME.sidebarText}
          onChange={v => set({ sidebarText: v })}
          onReset={() => set({ sidebarText: DEFAULT_THEME.sidebarText })}
        />
        <ColorField
          label="Fond du bandeau (nom et titre)"
          value={theme.headerBg}
          defaultValue={DEFAULT_THEME.headerBg}
          onChange={v => set({ headerBg: v })}
          onReset={() => set({ headerBg: DEFAULT_THEME.headerBg })}
        />
        <ColorField
          label="Texte du bandeau (nom et titre)"
          value={theme.headerText}
          defaultValue={DEFAULT_THEME.headerText}
          onChange={v => set({ headerText: v })}
          onReset={() => set({ headerText: DEFAULT_THEME.headerText })}
        />
      </SectionBody>
    </>
  )
}
