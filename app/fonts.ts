import {
  DM_Sans,
  Fraunces,
  Inter,
  Lora,
  Montserrat,
  Noto_Sans,
  Open_Sans,
  Oswald,
  Playfair_Display,
  Raleway,
  Roboto,
  Source_Sans_3,
  Space_Grotesk,
} from "next/font/google";

/*
 * Variables par famille, consommées par les groupes de polices de
 * `core/resume/resume.fonts.ts` — un nom qui diverge entre les deux fichiers
 * fait silencieusement retomber le CV sur la police système.
 *
 * Seul le groupe par défaut est préchargé. Les autres ont `preload: false` :
 * le navigateur ne télécharge une famille que si un CV l'utilise réellement,
 * au lieu d'alourdir chaque page des 13 familles.
 */

// ── Groupe « classique » (défaut) ────────────────────────────────────────────
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const notoSans = Noto_Sans({ variable: "--font-noto-sans", subsets: ["latin"] });
const raleway = Raleway({ variable: "--font-raleway-family", subsets: ["latin"] });

// ── Groupes optionnels ───────────────────────────────────────────────────────
// `subsets` est répété à chaque appel : next/font attend un littéral par famille
// (le type des sous-ensembles disponibles diffère d'une police à l'autre).
const playfairDisplay = Playfair_Display({ variable: "--font-playfair-display", subsets: ["latin"], preload: false });
const sourceSans3 = Source_Sans_3({ variable: "--font-source-sans-3", subsets: ["latin"], preload: false });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], preload: false });
const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"], preload: false });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], preload: false });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], preload: false });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], preload: false });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"], preload: false });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], preload: false });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], preload: false });

/** Toutes les classes `.variable` à poser sur <body> pour que les @font-face existent. */
export const fontVariables = [
  inter,
  notoSans,
  raleway,
  playfairDisplay,
  sourceSans3,
  montserrat,
  openSans,
  spaceGrotesk,
  dmSans,
  fraunces,
  lora,
  oswald,
  roboto,
]
  .map((font) => font.variable)
  .join(" ");
