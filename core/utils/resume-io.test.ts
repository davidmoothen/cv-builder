import { buildResumeFile, parseResumeFile, resumeFileName, RESUME_FILE_VERSION } from "./resume-io"
import { defaultResume } from "@/core/data/default-resume"
import type { Resume } from "@/core/resume/resume.types"

describe("buildResumeFile", () => {
  it("enveloppe le CV avec une version et une date d'export", () => {
    const file = buildResumeFile(defaultResume)
    expect(file.version).toBe(RESUME_FILE_VERSION)
    expect(new Date(file.exportedAt).toString()).not.toBe("Invalid Date")
    expect(file.resume).toEqual(defaultResume)
  })
})

describe("parseResumeFile", () => {
  it("fait un aller-retour fidèle avec buildResumeFile", () => {
    const text = JSON.stringify(buildResumeFile(defaultResume), null, 2)
    expect(parseResumeFile(text)).toEqual(defaultResume)
  })

  it("accepte un objet Resume nu, sans enveloppe", () => {
    expect(parseResumeFile(JSON.stringify(defaultResume))).toEqual(defaultResume)
  })

  it("conserve la photo uploadée en base64", () => {
    const withPhoto: Resume = {
      ...defaultResume,
      contact: { ...defaultResume.contact, photoBase64: "data:image/jpeg;base64,AAAA" },
    }
    const parsed = parseResumeFile(JSON.stringify(buildResumeFile(withPhoto)))
    expect(parsed.contact.photoBase64).toBe("data:image/jpeg;base64,AAAA")
  })

  it("conserve les couleurs du thème", () => {
    const theme = {
      sidebarBg: "#1F2937",
      sidebarText: "#FFFFFF",
      headerBg: "#2D3B2F",
      headerText: "#F5F5F5",
    }
    const themed: Resume = { ...defaultResume, theme }
    const parsed = parseResumeFile(JSON.stringify(buildResumeFile(themed)))
    expect(parsed.theme).toEqual(theme)
  })

  it("conserve le groupe de polices", () => {
    const themed: Resume = { ...defaultResume, theme: { fontGroup: "elegant" } }
    const parsed = parseResumeFile(JSON.stringify(buildResumeFile(themed)))
    expect(parsed.theme?.fontGroup).toBe("elegant")
  })

  it("accepte un groupe de polices inconnu (c'est getFontGroup qui corrige)", () => {
    const themed: Resume = { ...defaultResume, theme: { fontGroup: "inexistant" } }
    expect(() => parseResumeFile(JSON.stringify(themed))).not.toThrow()
  })

  it("accepte un thème partiel (couleur ajoutée après l'export)", () => {
    const partial: Resume = { ...defaultResume, theme: { sidebarBg: "#1F2937" } }
    const parsed = parseResumeFile(JSON.stringify(partial))
    expect(parsed.theme).toEqual({ sidebarBg: "#1F2937" })
  })

  it("accepte un CV sans thème (fichiers exportés avant la feature)", () => {
    const legacy = JSON.parse(JSON.stringify(defaultResume))
    delete legacy.theme
    expect(parseResumeFile(JSON.stringify(legacy)).theme).toBeUndefined()
  })

  it("rejette un thème dont les couleurs ne sont pas des hex #RRGGBB", () => {
    const broken = { ...defaultResume, theme: { sidebarBg: "red", headerBg: "#GGGGGG" } }
    expect(() => parseResumeFile(JSON.stringify(broken))).toThrow(/CV valide/)
  })

  it("rejette un fichier qui n'est pas du JSON", () => {
    expect(() => parseResumeFile("pas du json {{{")).toThrow(/JSON valide/)
  })

  it("rejette un JSON valide mais non conforme", () => {
    expect(() => parseResumeFile(JSON.stringify({ foo: 1 }))).toThrow(/CV valide/)
  })

  it("rejette une enveloppe dont le CV est incomplet", () => {
    const broken = { version: 1, exportedAt: "2026-01-01", resume: { title: "Dev" } }
    expect(() => parseResumeFile(JSON.stringify(broken))).toThrow(/CV valide/)
  })
})

describe("resumeFileName", () => {
  const contactWith = (firstname: string, lastname: string): Resume => ({
    ...defaultResume,
    contact: { ...defaultResume.contact, firstname, lastname },
  })

  it("construit un nom de fichier à partir du prénom et du nom", () => {
    expect(resumeFileName(contactWith("Jean", "Dupont"))).toBe("cv-jean-dupont.json")
  })

  it("retire les accents et les caractères spéciaux", () => {
    expect(resumeFileName(contactWith("Élise", "Lefèvre-Ruiz"))).toBe("cv-elise-lefevre-ruiz.json")
  })

  it("retombe sur cv.json quand le contact n'a pas de nom", () => {
    expect(resumeFileName(contactWith("", ""))).toBe("cv.json")
  })
})
