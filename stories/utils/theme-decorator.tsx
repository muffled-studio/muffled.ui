import type { Decorator } from "@storybook/react";
import React from "react";

export const withTheme =
  (theme: "paper" | "ink"): Decorator =>
  (Story) => (
    <div
      className={
        theme === "ink"
          ? "dark flex min-h-screen w-full items-center justify-center bg-background p-6 text-foreground"
          : "flex min-h-screen w-full items-center justify-center bg-background p-6 text-foreground"
      }
      data-theme={theme === "ink" ? "dark" : "light"}
    >
      <Story />
    </div>
  );
