import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "eslint.config.mjs",
  ]),
  {
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          "selector": "Literal[value=/text-sage/]",
          "message": "CRITICAL DESIGN BUG: `text-sage` fails WCAG 2.1 AA contrast requirements (2.99:1). Use `text-primary` for text instead. `sage` is a fill-only token."
        },
        {
          "selector": "Literal[value=/text-warning(?!-text)/]",
          "message": "CRITICAL DESIGN BUG: `text-warning` fails WCAG 2.1 AA contrast requirements (1.77:1) in light mode. Use `text-warning-text` for text instead. `warning` is a fill-only token."
        }
      ]
    }
  }
]);

export default eslintConfig;
