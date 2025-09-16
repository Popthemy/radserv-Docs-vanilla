export function normalizeHrefText(href = "#getting-started") {
  if (typeof href !== "string") {
    throw Error(`Model: Invalid href type: ${href}`);
  }
  const validTitle =  Array.from(href.trim().slice(1).split("-"))
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return validTitle.length > 0 ? validTitle : "Home"
}
