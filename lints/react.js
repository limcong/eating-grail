module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['alloy/react'],
  plugins: ['react-hooks'],
  rules: {
    'react/button-has-type': 'error',
    'react/destructuring-assignment': 'error',
    'react/forbid-component-props': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-handler-names': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: true,
      },
    ],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-props-no-spreading': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true,
      },
    ],
    'react/prefer-stateless-function': 'error',
    'react/sort-comp': 'off',
    'react/static-property-placement': 'off',
    // react hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
