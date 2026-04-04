import angularConfig = require("@pellegrims/eslint-config-angular");
import ngrx = require("@ngrx/eslint-plugin");

const ngrxPlugin = ngrx as any;
const ngrxRecommendedRules = {
  ...(ngrxPlugin?.configs?.store?.rules || ({} as Record<string, any>)),
  ...(ngrxPlugin?.configs?.effects?.rules || ({} as Record<string, any>)),
  ...(ngrxPlugin?.configs?.["component-store"]?.rules ||
    ({} as Record<string, any>)),
  ...(ngrxPlugin?.configs?.operators?.rules || ({} as Record<string, any>)),
};

const config = [
  ...angularConfig,
  {
    plugins: {
      "@ngrx": ngrxPlugin,
    },
    rules: {
      ...ngrxRecommendedRules,
      "@ngrx/avoid-cyclic-effects": "error",
      "@ngrx/avoid-mapping-selectors": "error",
      "@ngrx/good-action-hygiene": "error",
      "@ngrx/no-typed-global-store": "error",
      "@ngrx/on-function-explicit-return-type": "error",
      "@ngrx/prefer-effect-callback-in-block-statement": "off",
      "@ngrx/prefer-inline-action-props": "off",
      "@ngrx/select-style": "error",
      "@ngrx/updater-explicit-return-type": "error",
      "@ngrx/use-consistent-global-store-name": ["error", "store$"],
    },
  },
];

export = config;
