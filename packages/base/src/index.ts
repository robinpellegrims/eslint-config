import js = require("@eslint/js");
import importPlugin = require("eslint-plugin-import");
import tseslint = require("typescript-eslint");

const config = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      globals: {
        browser: true,
        node: true,
        es2021: true,
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      ...importPlugin.configs.recommended.rules,
      "import/no-duplicates": "error",
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
        },
      ],
    },
    settings: {
      "import/resolver": {
        node: true,
      },
    },
  },
);

export = config;
