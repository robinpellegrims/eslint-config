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
      // Bring in eslint-plugin-import recommended rules
      ...importPlugin.configs.recommended.rules,
      "arrow-body-style": ["error"],
      "arrow-parens": ["off", "always"],
      "brace-style": ["off", "off"],
      "comma-dangle": "off",
      complexity: "error",
      curly: "error",
      "eol-last": "off",
      eqeqeq: ["error", "always"],
      "guard-for-in": "error",
      "id-blacklist": "off",
      "id-length": ["error", { exceptions: ["_"] }],
      "id-match": "off",
      "import/no-deprecated": "warn",
      "import/no-duplicates": "error",
      "linebreak-style": "off",
      "max-classes-per-file": "error",
      "max-len": "off",
      "max-params": "warn",
      "new-parens": "off",
      "newline-per-chained-call": "off",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-console": ["error", { allow: ["error", "warn"] }],
      "no-duplicate-imports": "off",
      "no-eval": "error",
      "no-extra-semi": "off",
      "no-irregular-whitespace": "off",
      "no-magic-numbers": ["warn", { ignore: [-1, 0, 1] }],
      "no-multiple-empty-lines": "off",
      "no-nested-ternary": "error",
      "no-new-wrappers": "error",
      "no-param-reassign": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "off",
      "no-undef-init": "error",
      "no-underscore-dangle": "off",
      "no-unneeded-ternary": "error",
      "object-shorthand": "error",
      "one-var": ["error", "never"],
      "prefer-arrow-callback": "error",
      "prefer-object-spread": "error",
      "prefer-template": "error",
      "quote-props": ["error", "as-needed"],
      radix: "error",
      "space-before-function-paren": "off",
      "space-in-parens": ["off", "never"],
      "spaced-comment": [
        "error",
        "always",
        { block: { exceptions: ["*"] }, markers: ["/"] },
      ],
    },
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    settings: {
      "import/extensions": [".ts", ".tsx", ".cts", ".mts", ".js", ".jsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".cts", ".mts"],
      },
    },
    rules: {
      "import/named": "off",
      "@typescript-eslint/array-type": ["error", { default: "array" }],
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/consistent-type-definitions": "error",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/explicit-member-accessibility": [
        "off",
        { accessibility: "explicit" },
      ],
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/naming-convention": "error",
      "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }],
      "@typescript-eslint/no-inferrable-types": [
        "error",
        { ignoreParameters: true },
      ],
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-shadow": ["error", { hoist: "all" }],
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowTernary: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true },
      ],
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/triple-slash-reference": [
        "error",
        { path: "always" },
      ],
      "@typescript-eslint/unified-signatures": "error",
    },
  },
  {
    files: ["**/*.tsx"],
    rules: {
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);

export = config;
