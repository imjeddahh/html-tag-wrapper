# HTML Tag Wrapper

Wrap selected text with common HTML tags directly from the editor's right-click context menu. No snippets to remember, no manual typing of angle brackets — select text, pick a tag, done.

## What is HTML Tag Wrapper?

**HTML Tag Wrapper** is a lightweight VS Code extension for front-end developers who frequently need to wrap pieces of text or markup with HTML tags (links, `<strong>`, `<em>`, or any custom tag). Instead of manually typing opening/closing tags, select your text, right-click, and choose the tag you want from the **HTML Tag Wrapper** submenu.

## Installation

### From the Marketplace

1. Open VS Code.
2. Go to the **Extensions** view (`Cmd+Shift+X` / `Ctrl+Shift+X`).
3. Search for **HTML Tag Wrapper**.
4. Click **Install**.

### From a `.vsix` file

1. Download or build the `.vsix` package (see [Building & Packaging](#building--packaging) below).
2. In VS Code, open the **Extensions** view.
3. Click the `...` menu in the top-right corner → **Install from VSIX...**
4. Select the `.vsix` file.

Or via the command line:

```bash
code --install-extension html-tag-wrapper-0.0.1.vsix
```

## Usage

1. Select the text you want to wrap in any editor.
2. Right-click the selection.
3. Hover over **HTML Tag Wrapper** in the context menu.
4. Choose the action you want (e.g. **Wrap with Strong**).
5. If prompted (Link, Link (_blank), Custom Tag), enter the requested value and press Enter.

The selection is replaced in-place with the wrapped markup.

## Available Tags

### Link

Wraps the selection in an anchor tag and prompts for a URL.

```html
<!-- Before -->
Google

<!-- After (entered URL: https://google.com) -->
<a href="https://google.com">Google</a>
```

### Link (_blank)

Same as Link, but opens in a new tab with safe `rel` attributes.

```html
<!-- Before -->
Google

<!-- After (entered URL: https://google.com) -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>
```

### Strong

```html
<!-- Before -->
Important

<!-- After -->
<strong>Important</strong>
```

### Emphasis

```html
<!-- Before -->
Italic

<!-- After -->
<em>Italic</em>
```

### Custom Tag

Prompts for any tag name (letters, digits, and hyphens — e.g. `span`, `mark`, `my-component`).

```html
<!-- Before -->
Hello

<!-- Tag entered: span -->
<span>Hello</span>
```

## Screenshots

> _Add screenshots or a short GIF demonstrating the context menu and before/after wrapping here._

- `docs/screenshot-context-menu.png` — the right-click submenu
- `docs/screenshot-before-after.gif` — wrapping text in action

## Building & Packaging

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Run/debug inside VS Code: open this folder and press F5
```

To produce a distributable `.vsix` package:

```bash
npx vsce package
```

This creates `html-tag-wrapper-<version>.vsix` in the project root, which can be installed via **Install from VSIX...** as described above.

## Publishing to the Marketplace

1. Create a [publisher](https://marketplace.visualstudio.com/manage) if you don't already have one, and update the `publisher` field in `package.json` to match.
2. Generate a Personal Access Token (PAT) in Azure DevOps with **Marketplace (Manage)** scope.
3. Log in with `vsce`:

   ```bash
   npx vsce login <publisher-name>
   ```

4. Publish:

   ```bash
   npx vsce publish
   ```

   Or publish a specific version bump directly:

   ```bash
   npx vsce publish patch   # or minor / major
   ```

## License

[MIT](./LICENSE)
