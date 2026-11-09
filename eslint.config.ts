import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  globalIgnores(["dist/", ".astro/", "node_modules/", ".vscode/", "pnpm-lock.yaml"]),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  // Prettier owns formatting (run via `pnpm run format:check`); disable conflicting style rules
  prettier
]);
