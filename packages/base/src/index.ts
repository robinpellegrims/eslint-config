import js = require("@eslint/js");
import importPlugin = require("eslint-plugin-import");
import tseslint = require("typescript-eslint");

// eslint-plugin-functional publishes types via modern exports, which can fail
// under legacy TS moduleResolution in CI. Resolve it at runtime instead.
const functionalPluginModule = require("eslint-plugin-functional") as {
  default?: unknown;
};
const functionalPlugin =
  functionalPluginModule.default ?? functionalPluginModule;
const strictTypeCheckedForTs = tseslint.configs.strictTypeChecked.map(
  (configItem) => ({
    ...configItem,
    files: ["**/*.{ts,tsx,cts,mts}"],
  }),
);

const config = tseslint.config(
  js.configs.recommended,
  ...strictTypeCheckedForTs,
  {
    plugins: {
      functional: functionalPlugin,
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
      "arrow-body-style": ["error", "as-needed"],
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
      "import/no-cycle": "error",
      "import/exports-last": "error",
      "import/no-absolute-path": "error",
      "import/no-default-export": "error",
      "import/no-import-module-exports": "error",
      "import/no-internal-modules": ["error", { allow: ["**/index"] }],
      "import/no-mutable-exports": "error",
      "import/no-namespace": "error",
      "import/no-self-import": "error",
      "import/no-useless-path-segments": "error",
      "import/first": "error",
      "import/newline-after-import": ["error", { count: 1 }],
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
      "functional/immutable-data": "error",
      "functional/no-let": "error",
      "functional/no-loop-statements": "error",
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
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" },
      ],
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
      "@typescript-eslint/no-duplicate-type-constituents": "error",
      "@typescript-eslint/no-confusing-void-expression": [
        "error",
        { ignoreArrowShorthand: true },
      ],
      "@typescript-eslint/no-meaningless-void-operator": "error",
      "@typescript-eslint/no-shadow": ["error", { hoist: "all" }],
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/no-unnecessary-template-expression": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowTernary: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true },
      ],
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowNumber: true, allowBoolean: false },
      ],
      "@typescript-eslint/triple-slash-reference": [
        "error",
        { path: "always" },
      ],
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
