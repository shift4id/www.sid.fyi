// @ts-check

/** @type {import('prettier').Config} */
const config = {
  printWidth: 110,
  tailwindFunctions: ["cn"],
  plugins: ["prettier-plugin-packagejson", "prettier-plugin-tailwindcss"],
};

export default config;
