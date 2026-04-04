import { spawnSync } from "node:child_process";

const packages = [
  "@pellegrims/eslint-config-base",
  "@pellegrims/eslint-config-angular",
  "@pellegrims/eslint-config-unicorn",
  "@pellegrims/eslint-config-angular-rxjs",
  "@pellegrims/eslint-config-angular-ngrx",
];

for (const pkg of packages) {
  const result = spawnSync("npm", ["run", "build", "-w", pkg], {
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
