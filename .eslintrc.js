module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es2020": true
  },
  "extends": [
    "next",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "ecmaFeatures": {
      "jsx": true,
      "arrowFunctions": true
    },
    "sourceType": "module"
  },
  "ecmaFeatures": {
    "jsx": true,
    "arrowFunctions": true 
  },
  "rules": {
    "comma-style": "error",
    "capitalized-comments": "warn",
    "strict": "error",
    "no-await-in-loop": "warn",
    "no-undef": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
}