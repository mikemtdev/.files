module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-empty': 'error',
    'no-empty-function': 'error',
    'default-case': 'error',
    'no-empty-pattern': 'error',
    'no-implicit-coercion': 'warn',
    'no-magic-numbers': 'error',
    'require-await': 'error',
  },
};
