import { getActiveSelection, replaceSelection } from '../utils/editor';
import { wrapWithTag } from '../utils/wrapper';

/**
 * Wraps the current selection with a <strong> tag.
 */
export async function wrapStrong(): Promise<void> {
  const context = getActiveSelection();
  if (!context) {
    return;
  }

  const wrapped = wrapWithTag(context.text, 'strong');
  await replaceSelection(context.editor, context.selection, wrapped);
}
