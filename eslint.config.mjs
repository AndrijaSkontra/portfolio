import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.{js,jsx}"], // Target both .js and .jsx files
    languageOptions: {
      globals: globals.browser, // Assuming this is for browser environment
    },
    rules: {
      // Best practices
      "no-var": "error", // Disallow var, encourage let/const
      "prefer-const": "error", // Suggest using const if a variable is never reassigned
      eqeqeq: "error", // Enforce strict equality (=== vs ==)
      "no-unused-vars": ["warn", { args: "none" }], // Warn for unused variables but ignore function arguments
      "no-console": "warn", // Warn if console.log is used (adjust based on your needs)
      "no-debugger": "warn", // Warn when debugger is left in code
      "no-implicit-globals": "error", // Avoid implicit global variable declarations

      // Code quality
      curly: "error", // Enforce consistent brace style for all control statements
      semi: ["error", "always"], // Enforce semicolons
      quotes: ["error", "single", { avoidEscape: true }], // Enforce single quotes
      "no-trailing-spaces": "error", // Disallow trailing spaces
      "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas in multiline objects/arrays

      // ES6+
      "arrow-spacing": ["error", { before: true, after: true }], // Ensure spacing around arrow functions
      "no-duplicate-imports": "error", // Disallow duplicate imports
      "prefer-arrow-callback": "error", // Encourage arrow functions for callbacks
      "object-shorthand": "error", // Require object shorthand for methods and properties
    },
  },
  pluginJs.configs.recommended, // Include ESLint's recommended rules
];
