# @pellegrims/eslint-config-base

## 3.0.0

### Major Changes

- 5579645: Add ESLint 10 peer support to the base, Angular, NgRx, and Unicorn configurations. Update the functional plugin and typescript-eslint dependencies to releases that support ESLint 10. These packages now require Node.js 20.19 or later, matching ESLint 10's minimum supported Node.js version.

## 2.2.2

### Patch Changes

- 9f8eeba: Remove `import/exports-last`, `import/no-internal-modules`, and `import/no-default-export` from the base config.

## 2.2.1

### Patch Changes

- eef1c17: Prefer `T[]` over `Array<T>` and allow shorthand arrow `void` expressions by default.

## 2.2.0

### Minor Changes

- 010d9e6: Enhance the base config with stricter functional and import rules, plus stronger TypeScript lint defaults.

## 2.1.0

### Minor Changes

- Enhance the base config with stricter functional and import rules, plus stronger TypeScript lint defaults.

## 2.0.1

### Patch Changes

- ca8bb22: Align rules and plugin wiring with legacy configs, including Angular template processing, NgRx rule composition, and RxJS/TypeScript parity updates.

## 2.0.0

### Major Changes

- Drop legacy ESLint v8-style config surface and move to ESLint v9 flat-config packages.
