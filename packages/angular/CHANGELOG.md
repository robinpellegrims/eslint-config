# @pellegrims/eslint-config-angular

## 3.0.0

### Major Changes

- 5579645: Add ESLint 10 peer support to the base, Angular, NgRx, and Unicorn configurations. Update the functional plugin and typescript-eslint dependencies to releases that support ESLint 10. These packages now require Node.js 20.19 or later, matching ESLint 10's minimum supported Node.js version.

### Patch Changes

- Updated dependencies [5579645]
  - @pellegrims/eslint-config-base@3.0.0

## 2.0.1

### Patch Changes

- ca8bb22: Align rules and plugin wiring with legacy configs, including Angular template processing, NgRx rule composition, and RxJS/TypeScript parity updates.
- Updated dependencies [ca8bb22]
  - @pellegrims/eslint-config-base@2.0.1

## 2.0.0

### Major Changes

- Drop legacy ESLint v8-style config surface and move to ESLint v9 flat-config packages.

### Patch Changes

- Updated dependencies
  - @pellegrims/eslint-config-base@2.0.0
