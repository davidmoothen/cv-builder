import { normalizeImageUrl } from "./image"

describe("normalizeImageUrl", () => {
  it("transforme un lien Google Drive standard", () => {
    const input = "https://drive.google.com/file/d/1ABC123xyz/view"
    expect(normalizeImageUrl(input)).toBe(
      "https://drive.google.com/uc?export=view&id=1ABC123xyz"
    )
  })

  it("transforme un lien Google Drive avec paramètres supplémentaires", () => {
    const input = "https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing"
    expect(normalizeImageUrl(input)).toBe(
      "https://drive.google.com/uc?export=view&id=1ABC123xyz"
    )
  })

  it("retourne l'URL inchangée pour une URL non Google Drive", () => {
    const input = "https://example.com/photo.jpg"
    expect(normalizeImageUrl(input)).toBe("https://example.com/photo.jpg")
  })
})
