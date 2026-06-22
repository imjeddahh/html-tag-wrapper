import { getActiveSelection, replaceSelection } from '../utils/editor';
import { wrapWithTag } from '../utils/wrapper';

/**
 * Wraps the current selection with an <em> tag.
 */
export async function wrapEmphasis(): Promise<void> {
  const context = getActiveSelection();
  if (!context) {
    return;
  }

  const wrapped = wrapWithTag(context.text, 'em');
  await replaceSelection(context.editor, context.selection, wrapped);
}
