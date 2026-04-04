import baseConfig = require("@pellegrims/eslint-config-base");
import unicorn = require("eslint-plugin-unicorn");

const config = [
  ...baseConfig,
  {
    plugins: {
      unicorn,
    },
    rules: {
      "unicorn/filename-case": "error",
      "unicorn/no-abusive-eslint-disable": "error",
    },
  },
];

export = config;
