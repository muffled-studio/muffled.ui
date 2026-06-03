import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const storiesDir = join(root, "stories");
const demosDir = join(root, "demos");

mkdirSync(demosDir, { recursive: true });

function extractImports(content: string): string {
  const blocks: string[] = [];
  const importRegex = /^import[\s\S]*?from\s+["'][^"']+["'];?/gm;

  for (const match of content.matchAll(importRegex)) {
    const block = match[0];
    if (block.includes("@storybook") || block.includes("theme-decorator")) {
      continue;
    }
    blocks.push(block.endsWith(";") ? block : `${block};`);
  }

  return blocks.join("\n");
}

const storyFiles = readdirSync(storiesDir).filter((file) =>
  file.endsWith(".stories.tsx"),
);

const slugs: string[] = [];
const indexImports: string[] = [];
const indexEntries: string[] = [];

function extractHelpers(content: string): string {
  let rest = content.replace(/^"use client";\s*\n?/, "");
  rest = rest.replace(/^import[\s\S]*?from\s+["'][^"']+["'];?\n/gm, (block) => {
    if (block.includes("@storybook") || block.includes("theme-decorator")) {
      return "";
    }
    return "";
  });

  const helperMatch = rest.match(/^([\s\S]*?)function (\w+Demo)/);
  return helperMatch?.[1]?.trim() ?? "";
}

for (const file of storyFiles) {
  const slug = file.replace(".stories.tsx", "");
  const content = readFileSync(join(storiesDir, file), "utf8");

  const demoMatch = content.match(
    /function (\w+Demo)\(([\s\S]*?)\) \{([\s\S]*?)\n\}\n\n(?:function \w+Demo|const meta)/,
  );

  if (!demoMatch) {
    console.warn(`skip ${slug}: no Demo function`);
    continue;
  }

  const [, demoName, demoParams, demoBody] = demoMatch;
  const imports = extractImports(content);
  const helpers = extractHelpers(content);
  const params = demoParams.trim() ? `(${demoParams})` : "()";

  writeFileSync(
    join(demosDir, `${slug}.tsx`),
    `"use client";

${imports}
${helpers ? `\n${helpers}\n` : ""}
export function ${demoName}${params} {${demoBody}
}
`,
    "utf8",
  );

  slugs.push(slug);
  indexImports.push(`import { ${demoName} } from "./${slug}";`);
  indexEntries.push(`  "${slug}": ${demoName},`);
}

writeFileSync(
  join(demosDir, "index.ts"),
  `import type { ComponentType } from "react";

${indexImports.join("\n")}

export type DemoComponent = ComponentType<{ theme?: "light" | "dark" }>;

export const demos: Record<string, DemoComponent> = {
${indexEntries.join("\n")}
};

export const demoSlugs = ${JSON.stringify(slugs)} as const;
`,
  "utf8",
);

console.log(`generated ${slugs.length} demos`);
