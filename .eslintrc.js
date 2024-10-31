// @ts-check
const { resolve } = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

/** @type {import('eslint').Linter.LegacyConfig} */
const config = {
  extends: [
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
  ].map((extend) => require.resolve(extend)),
  parserOptions: {
    project,
    globals: {
      React: true,
    },
  },
  settings: {
    "jsx-a11y": {
      components: {
        Image: "img",
        Link: "a",
      },
    },
  },
  rules: {
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: "last",
        ignoreCase: false,
        reservedFirst: true,
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        "newlines-between": "never",
        pathGroups: [{ pattern: "@/**", group: "parent" }],
      },
    ],
  },
  overrides: [
    {
      files: ["src/app/**/*.ts", "src/app/**/*.tsx", "next.config.mjs", "tailwind.config.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};

module.exports = config;
