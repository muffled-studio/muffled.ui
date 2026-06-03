import type { Decorator } from "@storybook/react";
import React from "react";

export const withTheme =
  (theme: "paper" | "ink"): Decorator =>
  (Story) => (
    <div
      className={theme === "ink" ? "dark min-w-[320px] bg-background p-6 text-foreground" : "min-w-[320px] bg-background p-6 text-foreground"}
      data-theme={theme === "ink" ? "dark" : undefined}
    >
      <Story />
    </div>
  );
