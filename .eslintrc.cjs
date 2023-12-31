module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    'no-unused-vars': 'error',
    quotes: ['error', 'single'],
    'no-undef': 'error',
    camelcase: 'error',
    'no-const-assign': 'error',
  },
};
