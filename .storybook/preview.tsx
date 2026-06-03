import type { Preview } from "@storybook/react";
import React from "react";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "paper",
      values: [
        { name: "paper", value: "#f5f5f5" },
        { name: "ink", value: "#1a1a1a" },
      ],
    },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
