import type { Preview } from "@storybook/react";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "paper",
      values: [
        { name: "paper", value: "#f7f7f2" },
        { name: "ink", value: "#0f0f0c" },
      ],
    },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ fontFamily: "\"Martian Mono\", monospace", padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;