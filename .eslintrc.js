module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'indent': ['error', 4],
    'comma-dangle': ['error', 'always-multiline'],
    'multiline-ternary': ['error', 'always-multiline']
    // 'react/prop-types': ['off'],
  }
}
