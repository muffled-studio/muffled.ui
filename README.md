# muffled.ui registry

Standalone shadcn-style component registry for `muffled.ui`, published as static JSON plus docs.

Design system reference: `design-system/README.md`, tokens in `app/globals.css`.

## Consumer install

Add to `components.json`:

```json
"registries": {
  "@muffled": "https://ui.muffled.studio/r/{name}.json"
}
```

```bash
bunx shadcn@latest add @muffled/theme
bunx shadcn@latest add @muffled/button
```

Docs site: [https://ui.muffled.studio/](https://ui.muffled.studio/)

## Add a new component

Create the source file in `registry/ui`, register it in `registry.json`, run `bun run build:registry`, add stories in `stories/`, update docs route rendering in `app/(docs)/components/[slug]/page.tsx`, then run visual and build checks.

Match Storybook stories and the rules in `AGENTS.md`.
