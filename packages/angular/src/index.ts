import angularEslint = require("@angular-eslint/eslint-plugin");
import angularTemplateEslint = require("@angular-eslint/eslint-plugin-template");
import angularTemplateParser = require("@angular-eslint/template-parser");
import baseConfig = require("@pellegrims/eslint-config-base");
import tseslint = require("typescript-eslint");

const config = tseslint.config(
  ...baseConfig,
  {
    files: ["**/*.html"],
    plugins: { "@angular-eslint/template": angularTemplateEslint },
    languageOptions: { parser: angularTemplateParser as any },
    rules: {
      ...(angularTemplateEslint.configs.recommended.rules as Record<
        string,
        any
      >),
    },
  },
  {
    files: ["**/*.ts"],
    plugins: { "@angular-eslint/template": angularTemplateEslint },
    processor: "@angular-eslint/template/extract-inline-html",
  },
  {
    files: ["**/*.ts"],
    plugins: { "@angular-eslint": angularEslint },
    rules: {
      ...(angularEslint.configs.recommended.rules as Record<string, any>),
      "@angular-eslint/prefer-on-push-component-change-detection": "warn",
      "@angular-eslint/use-component-view-encapsulation": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
    },
  },
);

export = config;
