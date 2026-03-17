export function normalizeImageUrl(url: string): string {
  const match = url.match(/drive\.google\.com\/file\/d\/([^/]+)\//)
  if (match) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`
  }
  return url
}
