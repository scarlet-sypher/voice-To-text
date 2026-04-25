/**
 * Capitalizes the first letter of a transcript string.
 * Extend this with punctuation, paragraph splitting, etc.
 */
export function formatTranscript(text = "") {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}
