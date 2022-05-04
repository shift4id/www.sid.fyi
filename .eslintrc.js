/**
 * @type {import("eslint").Linter.Config}
 */

module.exports = {
  extends: ["eslint:recommended", "next/core-web-vitals", "prettier"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
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
};
