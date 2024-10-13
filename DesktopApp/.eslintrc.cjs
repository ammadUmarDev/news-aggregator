module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    React: "readonly",
    JSX: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "airbnb",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-unused-vars": [1, { args: "after-used", argsIgnorePattern: "^_" }],
    eqeqeq: "warn",
    "no-var": 1,
    "max-params": [1, { max: 4 }],
    "no-unreachable": 1,
    "no-redeclare": 1,
    "no-duplicate-imports": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
