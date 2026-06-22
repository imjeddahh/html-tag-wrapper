import * as vscode from 'vscode';
import { getActiveSelection, replaceSelection } from '../utils/editor';
import { wrapWithLink } from '../utils/wrapper';

/**
 * Wraps the current selection with an <a href="..." target="_blank"
 * rel="noopener noreferrer"> tag. Prompts the user for the URL; cancels
 * silently if the user dismisses the prompt.
 */
export async function wrapLinkBlank(): Promise<void> {
  const context = getActiveSelection();
  if (!context) {
    return;
  }

  const url = await vscode.window.showInputBox({
    prompt: 'Enter the URL for the link (opens in a new tab)',
    placeHolder: 'https://example.com',
    ignoreFocusOut: true,
  });

  // User pressed Escape or cancelled the input box.
  if (url === undefined) {
    return;
  }

  const wrapped = wrapWithLink(context.text, url, true);
  await replaceSelection(context.editor, context.selection, wrapped);
}
