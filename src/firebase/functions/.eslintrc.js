module.exports = {
  root: true,
  env: {
    es2017: true,
    node: true,
    ["jest/globals"]: true,
  },
  extends: ["eslint:recommended", "google", "prettier"],
  rules: {
    quotes: ["error", "double"],
    ["require-jsdoc"]: 0,
  },
  plugins: ["jest"],
};
