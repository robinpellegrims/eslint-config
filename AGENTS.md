# AGENTS.md

Guidance for coding agents working in this repository.

## Scope and Goal

- Repository: `pellegrims-eslint-configs`
- Purpose: publish shareable ESLint flat configs under `@pellegrims/*`.
- Primary source files are TypeScript under `packages/*/src`.

## Repository Layout

- `packages/base`: base TypeScript + import rules.
- `packages/angular`: Angular rules on top of base.
- `packages/unicorn`: Unicorn rules on top of base.
- `packages/angular-rxjs`: Angular + RxJS rules.
- `packages/angular-ngrx`: Angular + NgRx rules.
- `scripts/build-all.mjs`: builds all workspace packages in sequence.
- `scripts/smoke-test.sh`: end-to-end smoke tests via temporary fixtures.
- `.changeset/`: versioning/release metadata.

## Environment

- Use Node + npm (workspaces). CI currently runs Node 18 for smoke/prettier and Node 24 for release.
- Install deps from repo root:

```bash
npm ci
```

## Core Commands

Run from repo root unless noted.

- Build all packages:

```bash
npm run build
```

- Run smoke tests:

```bash
npm run test:smoke
```

- Check formatting:

```bash
npx prettier . --check
```

- Format files:

```bash
npx prettier . --write
```

- Build a single package:

```bash
npm run build -w @pellegrims/eslint-config-base
```

## Editing Guidelines

- Prefer minimal, targeted changes.
- Edit source in `packages/*/src/*.ts`; do not hand-edit generated `dist` outputs.
- Preserve module style used by packages (`import ... = require(...)` and `export = config`).
- Keep rule changes explicit and deterministic; avoid behavior changes outside the requested scope.
- Keep package interdependencies coherent (for example, `angular-*` packages extend angular/base packages).

## Validation Checklist (Before Finishing)

1. `npm run build` succeeds.
2. `npm run test:smoke` succeeds.
3. `npx prettier . --check` passes (or format and re-check).
4. If package behavior changed, add a changeset.

## Changesets and Release

- This repo uses Changesets and publishes from `main` via GitHub Actions.
- For user-facing package changes, add a changeset:

```bash
npm run changeset
```

- Versioning is handled by:

```bash
npm run version:packages
```

- Publish flow command (normally CI-driven):

```bash
npm run publish:packages
```

## PR Expectations

- Include a concise summary of changed packages and rule-level impact.
- Call out any new peer dependency requirements.
- Mention command results for build, smoke tests, and formatting checks.
