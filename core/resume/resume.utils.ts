export function calculateAge(birthdate?: string): number | null {
  if (!birthdate) return null
  const birth = new Date(birthdate)
  if (isNaN(birth.getTime())) return null
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const m = today.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
  return age > 0 && age < 120 ? age : null
}

const MONTH_PATTERNS: [RegExp, number][] = [
  [/^jan/, 0],
  [/^fev/, 1],
  [/^mar/, 2],
  [/^avr/, 3],
  [/^mai/, 4],
  [/^juin/, 5],
  [/^juil/, 6],
  [/^aou/, 7],
  [/^sep/, 8],
  [/^oct/, 9],
  [/^nov/, 10],
  [/^dec/, 11],
]

const CURRENT_PATTERN = /aujourd|present|présent|actuel/i

/** Removes accents, dots and casing so month labels can be matched loosely. */
function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\./g, '')
}

/** Resolves a french month label (jan., janv., juin, sept...) to its 0-based index. */
function parseMonth(label?: string): number {
  if (!label) return 0
  const normalized = normalize(label)
  const found = MONTH_PATTERNS.find(([pattern]) => pattern.test(normalized))
  return found ? found[1] : 0
}

/** Extracts every "[mois] YYYY" occurrence of a free-form date string, in order. */
function extractDatePoints(date: string): { year: number; month: number }[] {
  const points: { year: number; month: number }[] = []
  const regex = /(?:([a-zA-ZÀ-ÿ]+)\.?\s+)?(\d{4})/g
  let match: RegExpExecArray | null
  while ((match = regex.exec(date)) !== null) {
    points.push({ year: parseInt(match[2], 10), month: parseMonth(match[1]) })
  }
  return points
}

/** Formats a month count as "3 ans 4 mois", omitting any unit equal to zero. */
export function formatDuration(totalMonths: number): string | null {
  if (totalMonths <= 0) return null
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts: string[] = []
  if (years > 0) parts.push(`${years} an${years > 1 ? 's' : ''}`)
  if (months > 0) parts.push(`${months} mois`)
  return parts.length > 0 ? parts.join(' ') : null
}

/**
 * Computes the duration of a free-form date range ("juin 2022 → aujourd'hui",
 * "2016 – 2022"). Returns null when the range is unreadable or shorter than a month.
 */
export function getDuration(date: string, current = false): string | null {
  const points = extractDatePoints(date)
  if (points.length === 0) return null

  const start = points[0]
  const isCurrent = current || CURRENT_PATTERN.test(date)
  const today = new Date()
  if (!isCurrent && points.length < 2) return null

  const end = isCurrent
    ? { year: today.getFullYear(), month: today.getMonth() }
    : points[points.length - 1]

  const totalMonths = (end.year - start.year) * 12 + (end.month - start.month)
  return formatDuration(totalMonths)
}
