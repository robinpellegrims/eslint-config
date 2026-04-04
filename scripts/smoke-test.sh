#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

run_base_smoke() {
  local fixture="$TMP_DIR/base-fixture"
  mkdir -p "$fixture/src"

  cat > "$fixture/package.json" <<EOF
{
  "name": "base-smoke-fixture",
  "private": true
}
EOF

  cat > "$fixture/tsconfig.json" <<EOF
{
  "compilerOptions": {
    "target": "ES2021",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true
  },
  "include": ["src/**/*.ts"]
}
EOF

  cat > "$fixture/eslint.config.js" <<EOF
const baseConfig = require("@pellegrims/eslint-config-base");

module.exports = [...baseConfig];
EOF

  cat > "$fixture/src/example.ts" <<EOF
const greeting = "hello";
console.warn(greeting);
EOF

  (
    cd "$fixture"
    npm install --no-package-lock --save-dev \
      "$ROOT_DIR/packages/base" \
      "eslint@^9" \
      "typescript@^5"
    npx eslint src/example.ts
  )
}

run_angular_smoke() {
  local fixture="$TMP_DIR/angular-fixture"
  mkdir -p "$fixture/src"

  cat > "$fixture/package.json" <<EOF
{
  "name": "angular-smoke-fixture",
  "private": true
}
EOF

  cat > "$fixture/tsconfig.json" <<EOF
{
  "compilerOptions": {
    "target": "ES2021",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true
  },
  "include": ["src/**/*.ts"]
}
EOF

  cat > "$fixture/eslint.config.js" <<EOF
const angularConfig = require("@pellegrims/eslint-config-angular");

module.exports = [...angularConfig];
EOF

  cat > "$fixture/src/app.component.ts" <<EOF
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: "<div>Hello</div>"
})
export class AppComponent {}
EOF

  (
    cd "$fixture"
    npm install --no-package-lock --save-dev \
      "$ROOT_DIR/packages/base" \
      "$ROOT_DIR/packages/angular" \
      "@angular/core@^17" \
      "eslint@^9" \
      "typescript@^5"
    npx eslint src/app.component.ts
  )
}

echo "Running base package smoke test..."
run_base_smoke

echo "Running angular package smoke test..."
run_angular_smoke

echo "Smoke tests passed."
