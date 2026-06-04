<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/logo-paper.svg">
    <img src="public/logo-ink.svg" alt="muffled.studio" height="56">
  </picture>
</p>

<h1 align="center">muffled.ui</h1>

<p align="center">
  shadcn-compatible component registry.<br>
  ink, paper, hairlines — no shadows.
</p>

<p align="center">
  <a href="https://ui.muffled.studio/">docs</a>
  ·
  <a href="https://ui.muffled.studio/registry.json">registry.json</a>
  ·
  <a href="https://github.com/muffled-studio/muffled.skills">design system (skills)</a>
</p>

---

## what this is

we ship UI as static JSON. install components with the shadcn CLI — same workflow, different defaults.

50+ components. Space Mono headings, Space Grotesk body, 0.5px borders, zero box shadows. tokens live in `app/globals.css`; rules in `AGENTS.md`.

## install

add the registry to `components.json`:

```json
"registries": {
  "@muffled": "https://ui.muffled.studio/r/{name}.json"
}
```

pull the theme first, then whatever we need. use the `@muffled/<name>` namespace on the CLI — registry manifests declare namespaced `registryDependencies` (e.g. `@muffled/surface`, not bare `surface`), so the resolver stays on `ui.muffled.studio` instead of `ui.shadcn.com`.

```bash
bunx shadcn@latest add @muffled/theme
bunx shadcn@latest add @muffled/button
bunx shadcn@latest add @muffled/input-group
```

full catalog: [ui.muffled.studio](https://ui.muffled.studio/)

## development

```bash
bun install
bun run dev          # docs site
bun run storybook    # component stories
bun run build        # registry + next build
bun run test:visual  # playwright snapshots
```

## add a component

1. source in `registry/ui`
2. register in `registry.json`
3. `bun run build:registry`
4. stories in `stories/`
5. docs route in `app/(docs)/components/[slug]/page.tsx`
6. visual + build checks

match Storybook stories and the rules in `AGENTS.md`.

## agent skills

All skills: [muffled.skills](https://github.com/muffled-studio/muffled.skills)

```bash
# this repo
bunx skills add muffled-studio/muffled.skills --skill muffled-ui-maintainer --skill muffled-studio-design -a cursor -a claude-code -y

# consumer app
bunx skills add muffled-studio/muffled.skills --skill muffled-ui --skill muffled-studio-design -a cursor -a claude-code -y
```
