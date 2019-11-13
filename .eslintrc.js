module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es6: true
  },
  extends: ["standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "max-len": [
      2,
      120,
      2,
      { ignoreStrings: true, ignoreTemplateLiterals: true }
    ],
    "space-before-function-paren": 0
  }
};
