import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // Node.js specific rules
      "no-buffer-constructor": "error",
      "no-path-concat": "error",
      "no-process-exit": "error",
      "no-sync": "warn",

      // Modern JavaScript rules
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "prefer-destructuring": ["error", { object: true, array: false }],
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "no-useless-rename": "error",
      "object-shorthand": "error",
      "no-duplicate-imports": "error",

      // Additional quality rules
      eqeqeq: ["error", "always"],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-return-await": "error",
      "require-await": "error",
      "no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true },
      ],
      "no-throw-literal": "error",
      "prefer-promise-reject-errors": "error",
      "no-useless-catch": "error",
      "no-useless-return": "error",
      "no-template-curly-in-string": "error",
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  eslintConfigPrettier,
];
