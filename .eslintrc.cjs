module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3
      },
      "multiline": {
        "max": 1
      }
    }],
    "semi": ["error", "never"],
    "vue/multi-word-component-names": ["off"]
  },
};
