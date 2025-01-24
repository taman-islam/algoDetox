const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const unusedImportsPlugin = require("eslint-plugin-unused-imports");
const stylisticPlugin = require("@stylistic/eslint-plugin");

module.exports = [
  {
    files: [
      "app/**/*.ts",
      "app/**/*.tsx",
      "components/**/*.ts",
      "components/**/*.tsx",
      "lib/**/*.ts",
      "lib/**/*.tsx",
      "store/**/*.ts",
      "store/**/*.tsx",
      "services/**/*.ts",
      "services/**/*.tsx",
      "hooks/**/*.ts",
      "hooks/**/*.tsx",
    ],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "unused-imports": unusedImportsPlugin,
      "@stylistic": stylisticPlugin,
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "eol-last": ["error", "always"],
      "arrow-parens": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "@stylistic/padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: ["export", "class", "function", "interface"],
        },
      ],
      // Prettier handles all the formattings
      "no-trailing-spaces": "off",
      "max-len": ["off"],
      "@stylistic/no-trailing-spaces": "error",
      quotes: ["off"],
      indent: ["off"],
    },
    ignores: ["dist/**/*", "node_modules/**/*", "src/scripts/**/*"],
  },
];
