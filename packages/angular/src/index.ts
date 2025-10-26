import angularEslint = require("@angular-eslint/eslint-plugin");
import baseConfig = require("@pellegrims/eslint-config-base");
import tseslint = require("typescript-eslint");

const config = tseslint.config(...baseConfig, {
  files: ["**/*.ts"],
  plugins: {
    "@angular-eslint": angularEslint,
  },
  rules: {
    ...(angularEslint.configs.recommended.rules as Record<string, any>),
    "@angular-eslint/directive-selector": [
      "error",
      { type: "attribute", prefix: "app", style: "camelCase" },
    ],
    "@angular-eslint/component-selector": [
      "error",
      { type: "element", prefix: "app", style: "kebab-case" },
    ],
  },
});

export = config;
