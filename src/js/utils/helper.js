/**
 * 
 * @param {string} href 
 * @returns Capitalized String
 */
export function normalizeHrefText(href = "#getting-started") {
  if (typeof href !== "string" || href.charAt(0) !== "#") {
    throw Error(`Model: Invalid href type: ${href} should be a string and start with "#" `);
  }

  const validTitle =  Array.from(href.trim().slice(1).split("-"))
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return validTitle.length > 0 ? validTitle : "Home"
}
