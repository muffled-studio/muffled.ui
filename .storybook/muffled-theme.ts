import { create } from "storybook/internal/theming/create";

const brandTitle = [
  '<span style="display:inline-flex;align-items:center;gap:8px">',
  '<img src="./logo-ink.svg" alt="" style="height:24px;width:24px;object-fit:contain !important;object-position:top" />',
  '<span style="font-family:Space Mono,ui-monospace,monospace;font-size:14px;color:#1a1a1a;letter-spacing:-0.02em">muffled.ui</span>',
  "</span>",
].join("");

export const muffledTheme = create({
  base: "light",
  brandTitle,
  brandUrl: "./",
  brandImage: null,
  brandTarget: "_self",
  appBg: "#f5f5f5",
  appContentBg: "#f5f5f5",
  appPreviewBg: "#f5f5f5",
  barBg: "#f5f5f5",
  barTextColor: "#1a1a1a",
  appBorderColor: "transparent",
  barSelectedColor: "#1a1a1a",
  barHoverColor: "#1a1a1a",
  colorPrimary: "#1a1a1a",
  colorSecondary: "#1a1a1a",
  textColor: "#1a1a1a",
  fontBase: '"Space Grotesk", system-ui, sans-serif',
  fontCode: '"Space Mono", ui-monospace, monospace',
});
