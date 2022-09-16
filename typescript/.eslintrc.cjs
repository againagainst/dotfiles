module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["eslint:recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-multi-spaces": "warn",
    "no-multiple-empty-lines": "warn",
    "no-unused-expressions": "warn",
    "no-use-before-define": "warn",
    "no-var": "warn",
    "prefer-const": "warn",
    "space-in-parens": "warn",
  },
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
};
