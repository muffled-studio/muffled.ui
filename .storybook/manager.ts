import { addons } from "storybook/internal/manager-api";

import { muffledTheme } from "./muffled-theme";

addons.setConfig({ theme: muffledTheme });
