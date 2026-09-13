import { DEFAULT_FONT_GROUP_ID } from "./resume.fonts";
import type { ResolvedTheme, Resume } from "./resume.types";

/**
 * Reproduit l'apparence historique : sidebar bg-black/15 sur blanc = #D9D9D9
 * avec texte noir, bandeau bg-black/80 sur blanc = #333333 avec texte blanc.
 */
export const DEFAULT_THEME: ResolvedTheme = {
  sidebarBg: "#D9D9D9",
  sidebarText: "#000000",
  headerBg: "#333333",
  headerText: "#FFFFFF",
  fontGroup: DEFAULT_FONT_GROUP_ID,
};

/**
 * Toujours passer par cette fonction plutôt que de lire `resume.theme` directement :
 * elle garantit un thème complet même quand le champ est absent (CV persisté avant
 * l'ajout du thème, JSON importé sans `theme`) ou partiellement rempli.
 */
export function getTheme(resume: Resume): ResolvedTheme {
  return { ...DEFAULT_THEME, ...resume.theme };
}
