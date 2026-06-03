# muffled.studio handoff

Drop-in brief for AI coding agents (Claude Code, Cursor, Zed, …). Two repos, two
roles: the **library** *implements* the design system; **consuming apps**
*compose* it.

```
handoff/
├─ CLAUDE.md                  ← UI LIBRARY: full ruleset (always-on)
├─ AGENTS.md                  ← UI LIBRARY: same rules, generic format
├─ .cursor/rules/…mdc         ← UI LIBRARY: same rules, Cursor native
└─ consuming-project/
   ├─ CLAUDE.md               ← CONSUMING APP: thin "use the lib" rules
   ├─ AGENTS.md               ← CONSUMING APP: same, generic format
   └─ SKILL.md                ← CONSUMING APP: full system, invoked on demand
```

## UI library repo (the shadcn one)
This repo *is* the design system, so the rules are **always-on guardrails**.

1. Copy this project's `design-system/` folder into the repo (README,
   `colors_and_type.css`, `assets/`, `fonts/`, `preview/`). Put the `fonts/*.ttf`
   somewhere the app serves them (e.g. `public/fonts/`).
2. Copy **`CLAUDE.md`** (Claude Code) **or** **`AGENTS.md`** (Cursor/Zed/others)
   **or** the **`.cursor/`** folder (Cursor native) to the repo root — pick one.
3. Example prompt: *"Read `@design-system/README.md` and
   `@design-system/colors_and_type.css`. Map ink/paper onto shadcn's variables,
   `--primary` = ink, 0.5px borders, 6px radius, no shadows, no gray ramp.
   Self-host the fonts. Match `@design-system/preview/*.html`."*

## Consuming app(s)
These import the published library, so rules are **thin + on-demand**.

1. Copy **`consuming-project/CLAUDE.md`** *or* **`AGENTS.md`** to the repo root —
   the short "use the lib, don't restyle, follow the voice" guardrail.
2. Install the skill: copy **`consuming-project/SKILL.md`** to
   `.claude/skills/muffled-studio-design/SKILL.md`. The agent pulls it in when
   building screens — it carries the full voice/spacing/layout rules without
   bloating every session.

## Why the split
- **Library** edits touch tokens and component styling every time → load the full
  rules always.
- **Consuming** work is mostly composition → keep the always-on file thin to save
  context, and let the skill supply depth only when a new screen is being built.

All rule files carry consistent guidance; use whichever format your tool reads.
