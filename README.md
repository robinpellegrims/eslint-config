# @pellegrims ESLint Configs

This monorepo contains my shareable ESLint configurations, managed with npm workspaces.

These packages use the modern ESLint flat config format (`eslint.config.js`).

## Packages

- `@pellegrims/eslint-config-base`: The base config for TS, ESLint, and Imports.
- `@pellegrims/eslint-config-angular`: Extends `base` and adds Angular rules.
- `@pellegrims/eslint-config-unicorn`: Optional Unicorn rules on top of `base`.
- `@pellegrims/eslint-config-angular-rxjs`: Optional RxJS rules for Angular projects.
- `@pellegrims/eslint-config-angular-ngrx`: Optional NgRx rules for Angular projects.

## Usage

### TypeScript projects

1. Create an `eslint.config.js` file in your project root.
2. Install the base config and peer dependency:
   ```bash
   npm install --save-dev @pellegrims/eslint-config-base eslint@^9
   ```
3. Configure your `eslint.config.js`:

   ```javascript
   // eslint.config.js
   const baseConfig = require("@pellegrims/eslint-config-base");

   module.exports = [
     ...baseConfig,

     // Add project-specific overrides
     {
       files: ["src/**/*.ts"],
       rules: {
         "no-console": "warn",
       },
     },
   ];
   ```

### Angular projects

1. Create an `eslint.config.js` file in your project root.
2. Install the Angular config and peer dependency:
   ```bash
   npm install --save-dev @pellegrims/eslint-config-angular eslint@^9
   ```
3. Configure your `eslint.config.js`:

   ```javascript
   // eslint.config.js
   const angularConfig = require("@pellegrims/eslint-config-angular");

   module.exports = [
     ...angularConfig,

     // Add your project-specific overrides here
     {
       files: ["src/app/my-specific-file.ts"],
       rules: {
         "no-console": "off",
       },
     },
   ];
   ```

### Angular parity stack (optional addons)

If you want stricter rules similar to the older rule surface, layer optional addons:

```bash
npm install --save-dev \
  @pellegrims/eslint-config-angular \
  @pellegrims/eslint-config-angular-rxjs \
  @pellegrims/eslint-config-angular-ngrx \
  @pellegrims/eslint-config-unicorn \
  eslint@^9
```

```javascript
// eslint.config.js
const angularConfig = require("@pellegrims/eslint-config-angular");
const angularRxjsConfig = require("@pellegrims/eslint-config-angular-rxjs");
const angularNgrxConfig = require("@pellegrims/eslint-config-angular-ngrx");
const unicornConfig = require("@pellegrims/eslint-config-unicorn");

module.exports = [
  ...angularConfig,
  ...angularRxjsConfig,
  ...angularNgrxConfig,
  ...unicornConfig,
];
```
