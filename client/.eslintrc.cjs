module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '17.0.2'
    }
  },
  plugins: ['testing-library'],
  rules: {
    'testing-library/no-node-access': 'warn',
    'testing-library/no-container': 'warn',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off'
  },
  overrides: [
    {
      files: ['src/components/pages/**/*.test.js'],
      rules: {
        'testing-library/no-dom-import': 'off'
      }
    },
    {
      files: ['src/components/NavigationBar/Users.test.jsx'],
      rules: {
        'no-unused-vars': 'off'
      }
    }
  ]
};