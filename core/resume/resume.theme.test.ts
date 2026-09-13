import { DEFAULT_THEME, getTheme } from "@/core/resume/resume.theme"
import { DEFAULT_FONT_GROUP_ID, FONT_GROUPS, getFontGroup } from "@/core/resume/resume.fonts"
import { defaultResume } from "@/core/data/default-resume"

describe("getTheme", () => {
  it("retombe sur les valeurs par défaut quand le CV n'a pas de thème", () => {
    expect(getTheme(defaultResume)).toEqual(DEFAULT_THEME)
  })

  it("complète un thème partiel sans écraser ce qui est défini", () => {
    const theme = getTheme({ ...defaultResume, theme: { headerBg: "#2D3B2F" } })
    expect(theme.headerBg).toBe("#2D3B2F")
    expect(theme.sidebarBg).toBe(DEFAULT_THEME.sidebarBg)
    expect(theme.headerText).toBe(DEFAULT_THEME.headerText)
  })
})

describe("getFontGroup", () => {
  it("retombe sur le groupe par défaut pour un id absent ou inconnu", () => {
    expect(getFontGroup(undefined).id).toBe(DEFAULT_FONT_GROUP_ID)
    expect(getFontGroup("inexistant").id).toBe(DEFAULT_FONT_GROUP_ID)
  })

  it("renvoie le groupe demandé", () => {
    expect(getFontGroup("compact").label).toBe("Compact")
  })

  it("expose 6 groupes aux ids uniques", () => {
    const ids = FONT_GROUPS.map(g => g.id)
    expect(ids).toHaveLength(6)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("déclare une stack pour chacun des trois rôles", () => {
    for (const group of FONT_GROUPS) {
      for (const role of ["header", "title", "text"] as const) {
        // Doit référencer une variable next/font, sinon la police est muette.
        expect(group[role]).toMatch(/^var\(--font-[a-z0-9-]+\),/)
      }
    }
  })
})
