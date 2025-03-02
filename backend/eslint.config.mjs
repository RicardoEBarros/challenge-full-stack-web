import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticTs from '@stylistic/eslint-plugin-ts'

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{js,mjs,cjs,ts}", "tests/**/*.ts"],
    ignores: ["node_modules", "dist", "coverage"],
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    rules: {
      "semi": ["error", "never"],
      "eqeqeq": "error",
      "no-eval": "error",
      "curly": ["warn", "all"],
      "no-var": "warn",
      "indent": ["error", 2],
      "prefer-const": "warn",
      "quotes": ["error", "double"],
      "eol-last": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@stylistic/ts/function-call-spacing": ["error", "never"],
      "@stylistic/ts/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off"
    },
  },
  {
    languageOptions: { 
      globals: globals.browser,
      parserOptions: {
        project: "tsconfig-eslint.json",
        tsconfigRootDir: ".",
      }
    }
  },
];