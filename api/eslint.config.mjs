import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // "arrow-body-style": "off"
    }
  },
  {
    overrides: [
      {
        files: ["tests/**/*"],
        env: {
          jest: true
        }
      }
    ]
  }
];