import * as vscode from 'vscode';
import { wrapLink } from './commands/wrapLink';
import { wrapLinkBlank } from './commands/wrapLinkBlank';
import { wrapStrong } from './commands/wrapStrong';
import { wrapEmphasis } from './commands/wrapEmphasis';
import { wrapCustomTag } from './commands/wrapCustomTag';

/**
 * Maps each contributed command id (see package.json "contributes.commands")
 * to its implementation. Centralizing this map keeps activation simple and
 * makes it obvious which command id maps to which handler.
 */
const COMMANDS: Record<string, () => Promise<void>> = {
  'htmlTagWrapper.wrapLink': wrapLink,
  'htmlTagWrapper.wrapLinkBlank': wrapLinkBlank,
  'htmlTagWrapper.wrapStrong': wrapStrong,
  'htmlTagWrapper.wrapEmphasis': wrapEmphasis,
  'htmlTagWrapper.wrapCustomTag': wrapCustomTag,
};

export function activate(context: vscode.ExtensionContext): void {
  for (const [commandId, handler] of Object.entries(COMMANDS)) {
    const disposable = vscode.commands.registerCommand(commandId, handler);
    context.subscriptions.push(disposable);
  }
}

export function deactivate(): void {
  // No teardown required — all disposables are registered via
  // context.subscriptions and cleaned up automatically by VS Code.
}
