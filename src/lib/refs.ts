// Per-page citation numbering, in order of first appearance.
// Astro renders a page's components in document order, so a counter keyed by
// pathname gives Wikipedia-style sequential numbers. <References /> renders last
// and clears the page's entry, so a re-render (dev server) starts clean.
const pages = new Map<string, string[]>()

export function cite(pathname: string, id: string): number {
  let list = pages.get(pathname)
  if (!list) {
    list = []
    pages.set(pathname, list)
  }
  let i = list.indexOf(id)
  if (i === -1) {
    list.push(id)
    i = list.length - 1
  }
  return i + 1
}

export function used(pathname: string): string[] {
  return pages.get(pathname) ?? []
}

export function reset(pathname: string): void {
  pages.delete(pathname)
}
