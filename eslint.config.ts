import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default antfu(
  {
    stylistic: false,
    react: true,
  },
  compat.extends("plugin:@next/next/recommended"),
  {
    ignores: ["package.json"],
  },
);
