/*
 * Groupes de polices proposés dans la section « Design ».
 *
 * Les stacks référencent les variables par famille déclarées dans `app/fonts.ts`
 * (`--font-inter`, `--font-playfair-display`, …) : tout nom qui diverge entre les
 * deux fichiers fait silencieusement retomber le CV sur la police système.
 *
 * Les rôles `header` / `title` / `text` correspondent aux variables CSS
 * `--font-header` / `--font-title` / `--font-text` définies dans `app/globals.css`.
 */

const SANS_FALLBACK = "ui-sans-serif, system-ui, sans-serif";
const SERIF_FALLBACK = "ui-serif, Georgia, serif";

export interface FontGroup {
  id: string;
  label: string;
  /** Nom de la famille affiché sur la carte d'aperçu, pour le rôle correspondant. */
  headerName: string;
  textName: string;
  /** Nom et titre du bandeau, initiales de l'avatar, en-tête courant des pages 2+. */
  header: string;
  /** Sous-titres de section. */
  title: string;
  /** Corps du CV. */
  text: string;
}

export const FONT_GROUPS: FontGroup[] = [
  {
    id: "classique",
    label: "Classique",
    headerName: "Raleway",
    textName: "Inter",
    header: `var(--font-raleway-family), ${SANS_FALLBACK}`,
    title: `var(--font-noto-sans), ${SANS_FALLBACK}`,
    text: `var(--font-inter), ${SANS_FALLBACK}`,
  },
  {
    id: "editorial",
    label: "Éditorial",
    headerName: "Playfair Display",
    textName: "Source Sans 3",
    header: `var(--font-playfair-display), ${SERIF_FALLBACK}`,
    title: `var(--font-source-sans-3), ${SANS_FALLBACK}`,
    text: `var(--font-source-sans-3), ${SANS_FALLBACK}`,
  },
  {
    id: "moderne",
    label: "Moderne",
    headerName: "Montserrat",
    textName: "Open Sans",
    header: `var(--font-montserrat), ${SANS_FALLBACK}`,
    title: `var(--font-montserrat), ${SANS_FALLBACK}`,
    text: `var(--font-open-sans), ${SANS_FALLBACK}`,
  },
  {
    id: "technique",
    label: "Technique",
    headerName: "Space Grotesk",
    textName: "DM Sans",
    header: `var(--font-space-grotesk), ${SANS_FALLBACK}`,
    title: `var(--font-space-grotesk), ${SANS_FALLBACK}`,
    text: `var(--font-dm-sans), ${SANS_FALLBACK}`,
  },
  {
    id: "elegant",
    label: "Élégant",
    headerName: "Fraunces",
    textName: "Lora",
    header: `var(--font-fraunces), ${SERIF_FALLBACK}`,
    title: `var(--font-lora), ${SERIF_FALLBACK}`,
    text: `var(--font-lora), ${SERIF_FALLBACK}`,
  },
  {
    id: "compact",
    label: "Compact",
    headerName: "Oswald",
    textName: "Roboto",
    header: `var(--font-oswald), ${SANS_FALLBACK}`,
    title: `var(--font-oswald), ${SANS_FALLBACK}`,
    text: `var(--font-roboto), ${SANS_FALLBACK}`,
  },
];

export const DEFAULT_FONT_GROUP_ID = FONT_GROUPS[0].id;

/**
 * Retombe sur le groupe par défaut pour un id absent ou inconnu — un CV exporté
 * par une autre version de l'app doit s'afficher, pas casser.
 */
export function getFontGroup(id: string | undefined): FontGroup {
  return FONT_GROUPS.find((group) => group.id === id) ?? FONT_GROUPS[0];
}
