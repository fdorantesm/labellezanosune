/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#822081",
        secondary: "#b33d8c",
        "primary-alt": "#8f3d91",
        "primary-contrast": "#d2a722",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--tw-color-primary": theme("colors.primary"),
          "--tw-color-secondary": theme("colors.secondary"),
          "--tw-color-primary-alt": theme("colors.primary-alt"),
          "--tw-color-primary-contrast": theme("colors.primary-contrast"),
        },
        h1: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h3: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h4: {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h5: {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h6: {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
      });
    }),
  ],
};
