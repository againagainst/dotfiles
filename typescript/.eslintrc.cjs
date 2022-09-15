module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "no-multi-spaces": "warn",
    "no-multiple-empty-lines": "warn",
    "no-unused-expressions": "warn",
    "no-use-before-define": "warn",
    "no-var": "warn",
    "prefer-const": "warn",
    "space-in-parens": "warn",
  },
};
