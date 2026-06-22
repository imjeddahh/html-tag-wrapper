import * as vscode from 'vscode';

/**
 * Result of resolving the active editor's selection.
 */
export interface SelectionContext {
  editor: vscode.TextEditor;
  selection: vscode.Selection;
  text: string;
}

/**
 * Validates that there is an active editor with a non-empty selection.
 * Shows a user-friendly warning and returns undefined if validation fails,
 * so callers never need to throw on the unhappy path.
 */
export function getActiveSelection(): SelectionContext | undefined {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage('HTML Tag Wrapper: No active editor found.');
    return undefined;
  }

  const { selection } = editor;
  const text = editor.document.getText(selection);
  if (!text || text.trim().length === 0) {
    vscode.window.showWarningMessage('HTML Tag Wrapper: Please select some text to wrap.');
    return undefined;
  }

  return { editor, selection, text };
}

/**
 * Replaces the given selection in the editor with new text.
 */
export async function replaceSelection(
  editor: vscode.TextEditor,
  selection: vscode.Selection,
  newText: string
): Promise<void> {
  await editor.edit((editBuilder) => {
    editBuilder.replace(selection, newText);
  });
}
