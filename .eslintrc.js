module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:react/jsx-runtime"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  "prettier/prettier": [
    "error",
    {
      endOfLine: "auto",
    },
  ],
  plugins: ["react"],
  rules: {
    "no-console": "off",
    "react/jsx-one-expression-per-line": "off",
    "object-curly-newline": [
      "error",
      { ImportDeclaration: { minProperties: 7 } },
    ],
    "wrap-iife": ["error", "inside"],
  },
};
