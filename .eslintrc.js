module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
  globals: {
    React: 'readonly',
  },
  rules: {
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
  },
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/ui/'],
    },
  },
};
