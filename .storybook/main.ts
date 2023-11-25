import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    config.module = config.module || { rules: [] }
    config.module.rules = config.module.rules || []
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    })

    return config
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
}
export default config
