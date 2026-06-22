import * as vscode from 'vscode';
import { getActiveSelection, replaceSelection } from '../utils/editor';
import { isValidTagName, wrapWithTag } from '../utils/wrapper';

/**
 * Wraps the current selection with a user-specified tag name.
 * Prompts for the tag name and validates it before wrapping.
 */
export async function wrapCustomTag(): Promise<void> {
  const context = getActiveSelection();
  if (!context) {
    return;
  }

  const tagName = await vscode.window.showInputBox({
    prompt: 'Enter the HTML tag name (e.g. span, div, mark)',
    placeHolder: 'span',
    ignoreFocusOut: true,
    validateInput: (value) => {
      if (!value || value.trim().length === 0) {
        return 'Tag name cannot be empty.';
      }
      if (!isValidTagName(value)) {
        return 'Tag name must start with a letter and contain only letters, digits, or hyphens.';
      }
      return null;
    },
  });

  // User pressed Escape or cancelled the input box.
  if (tagName === undefined) {
    return;
  }

  const wrapped = wrapWithTag(context.text, tagName.trim());
  await replaceSelection(context.editor, context.selection, wrapped);
}
