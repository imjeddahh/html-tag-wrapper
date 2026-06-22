/**
 * Pure string-manipulation helpers for building wrapped HTML markup.
 * Kept free of VS Code APIs so they can be unit tested in isolation.
 */

/**
 * Escapes characters that would otherwise break out of a double-quoted
 * HTML attribute value (e.g. a URL containing a stray quote).
 */
export function escapeAttributeValue(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Wraps text with a simple opening/closing tag pair, e.g. <strong>text</strong>.
 */
export function wrapWithTag(text: string, tagName: string): string {
  return `<${tagName}>${text}</${tagName}>`;
}

/**
 * Wraps text with an anchor tag pointing to the given URL.
 * @param openInNewTab When true, adds target="_blank" rel="noopener noreferrer".
 */
export function wrapWithLink(text: string, url: string, openInNewTab: boolean): string {
  const safeUrl = escapeAttributeValue(url);
  const targetAttrs = openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a href="${safeUrl}"${targetAttrs}>${text}</a>`;
}

/**
 * Validates a user-supplied custom tag name.
 * Only standard HTML tag name characters are allowed (letters, digits, hyphen),
 * and it must start with a letter — this also covers custom elements like
 * "my-component".
 */
export function isValidTagName(tagName: string): boolean {
  return /^[a-zA-Z][a-zA-Z0-9-]*$/.test(tagName.trim());
}
