module.exports = {
  extends: ["eslint:recommended", "next/core-web-vitals", "prettier"],
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
