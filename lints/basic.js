module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
    requireConfigFile: false,
    allowImportExportEverywhere: false,
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  root: true,
  globals: {
    __RUNTIME_ENV__: 'readonly',
    ENV: 'readonly',
    __DEV__: 'readonly',
    __NODE__: 'readonly',
  },
  extends: ['alloy'],
  rules: {
    curly: 'error',
    'default-case': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'error',
    'no-else-return': 'error',
    'no-script-url': 'warn',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'warn',
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'func-names': 'error',
    'max-lines': ['warn', 300],
    'max-lines-per-function': [
      'warn',
      {
        max: 50,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-plusplus': 'error',
    'no-unneeded-ternary': 'error',
    'prefer-exponentiation-operator': 'warn',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'sort-imports': 'warn',
    'object-shorthand': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
      },
    ],
  },
};
