# muffled.ui registry

Standalone shadcn-style component registry for `muffled.ui`, published as static JSON plus docs.

Design system reference: `design-system/README.md`, tokens in `app/globals.css`.

## Consumer install

```bash
bunx shadcn@latest add https://ui.muffled.studio/r/utils.json
```

Docs site: [https://ui.muffled.studio/](https://ui.muffled.studio/)

## Add a new component

Create the source file in `registry/ui`, register it in `registry.json`, run `bun run build:registry`, add stories in `stories/`, update docs route rendering in `app/(docs)/components/[slug]/page.tsx`, then run visual and build checks.

Match `design-system/preview/*.html` and the rules in `AGENTS.md`.
