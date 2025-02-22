import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticJs from "@stylistic/eslint-plugin"

/** @type {import('eslint').Linter.Config[]} */
export default [
    pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts", "test/**/*.ts"],
    ignores: ["node_modules", "dist", "coverage"],
    plugins: {
      "@stylistic/js": stylisticJs
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
      "arrow-spacing": ["error", { before: true, after: true }],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@stylistic/js/function-call-spacing": ["error", "never"],
      "@stylistic/js/array-bracket-spacing": ["error", "always"],
      "@stylistic/js/eol-last": ["error", "always"],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off"
    },
  },
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
];