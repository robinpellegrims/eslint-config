import angularConfig = require("@pellegrims/eslint-config-angular");
import rxjs = require("eslint-plugin-rxjs-updated");

const rxjsPlugin = rxjs as any;
const rxjsRecommendedRules =
  rxjsPlugin?.configs?.recommended?.rules ?? ({} as Record<string, any>);

const config = [
  ...angularConfig,
  {
    plugins: {
      rxjs: rxjsPlugin,
    },
    rules: {
      ...rxjsRecommendedRules,
      // Legacy mapping from rxjs-angular/prefer-async-pipe.
      "rxjs/no-async-subscribe": "warn",
      "rxjs/no-implicit-any-catch": "error",
      "rxjs/no-unbound-methods": "error",
      "rxjs/no-unsafe-switchmap": "error",
      // Legacy mapping from rxjs-angular/prefer-takeuntil.
      "rxjs/no-unsafe-takeuntil": "error",
      "rxjs/finnish": [
        "error",
        {
          functions: false,
          methods: false,
          parameters: false,
          strict: true,
        },
      ],
    },
  },
];

export = config;
