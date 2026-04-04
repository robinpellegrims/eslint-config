# @pellegrims ESLint Configs

[![npm: base](https://img.shields.io/npm/v/@pellegrims/eslint-config-base?label=base)](https://www.npmjs.com/package/@pellegrims/eslint-config-base)
[![npm: angular](https://img.shields.io/npm/v/@pellegrims/eslint-config-angular?label=angular)](https://www.npmjs.com/package/@pellegrims/eslint-config-angular)
[![npm: unicorn](https://img.shields.io/npm/v/@pellegrims/eslint-config-unicorn?label=unicorn)](https://www.npmjs.com/package/@pellegrims/eslint-config-unicorn)
[![npm: angular-rxjs](https://img.shields.io/npm/v/@pellegrims/eslint-config-angular-rxjs?label=angular-rxjs)](https://www.npmjs.com/package/@pellegrims/eslint-config-angular-rxjs)
[![npm: angular-ngrx](https://img.shields.io/npm/v/@pellegrims/eslint-config-angular-ngrx?label=angular-ngrx)](https://www.npmjs.com/package/@pellegrims/eslint-config-angular-ngrx)

Shareable ESLint flat configs (`eslint.config.js`) for TypeScript and Angular projects.

## Available Packages

- `@pellegrims/eslint-config-base`
  TypeScript + ESLint recommended + import rules.
- `@pellegrims/eslint-config-angular`
  Extends `base` and adds Angular rules.
- `@pellegrims/eslint-config-unicorn`
  Extends `base` and adds Unicorn rules.
- `@pellegrims/eslint-config-angular-rxjs`
  Extends `angular` and adds RxJS rules.
- `@pellegrims/eslint-config-angular-ngrx`
  Extends `angular` and adds NgRx rules.

All packages target `eslint@^9` and use flat config.

## Quick Start

1. Install ESLint and one or more config packages.
2. Create `eslint.config.js` in your project root.
3. Export the config array.

## Usage Examples

### TypeScript project

```bash
npm install --save-dev eslint@^9 @pellegrims/eslint-config-base
```

```js
// eslint.config.js
const baseConfig = require("@pellegrims/eslint-config-base");

module.exports = [...baseConfig];
```

### Angular project

```bash
npm install --save-dev eslint@^9 @pellegrims/eslint-config-angular
```

```js
// eslint.config.js
const angularConfig = require("@pellegrims/eslint-config-angular");

module.exports = [...angularConfig];
```

### Angular + RxJS

```bash
npm install --save-dev eslint@^9 @pellegrims/eslint-config-angular-rxjs
```

```js
// eslint.config.js
const angularRxjsConfig = require("@pellegrims/eslint-config-angular-rxjs");

module.exports = [...angularRxjsConfig];
```

### Angular + NgRx

```bash
npm install --save-dev eslint@^9 @pellegrims/eslint-config-angular-ngrx
```

```js
// eslint.config.js
const angularNgrxConfig = require("@pellegrims/eslint-config-angular-ngrx");

module.exports = [...angularNgrxConfig];
```

### Add Unicorn rules

Use Unicorn on top of base or Angular stacks:

```bash
npm install --save-dev eslint@^9 @pellegrims/eslint-config-unicorn
```

```js
// eslint.config.js
const angularConfig = require("@pellegrims/eslint-config-angular");
const unicornConfig = require("@pellegrims/eslint-config-unicorn");

module.exports = [...angularConfig, ...unicornConfig];
```

### Full Angular stack (Angular + RxJS + NgRx + Unicorn)

```bash
npm install --save-dev \
  eslint@^9 \
  @pellegrims/eslint-config-angular-rxjs \
  @pellegrims/eslint-config-angular-ngrx \
  @pellegrims/eslint-config-unicorn
```

```js
// eslint.config.js
const angularRxjsConfig = require("@pellegrims/eslint-config-angular-rxjs");
const angularNgrxConfig = require("@pellegrims/eslint-config-angular-ngrx");
const unicornConfig = require("@pellegrims/eslint-config-unicorn");

module.exports = [...angularRxjsConfig, ...angularNgrxConfig, ...unicornConfig];
```

## Custom Project Rules

Append your own config objects after the imported packages:

```js
// eslint.config.js
const baseConfig = require("@pellegrims/eslint-config-base");

module.exports = [
  ...baseConfig,
  {
    files: ["src/**/*.ts"],
    rules: {
      "no-console": "warn",
    },
  },
];
```
