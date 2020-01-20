
module.exports = {
    parser: 'vue-eslint-parser',
    plugins: ['@typescript-eslint'],
    extends:  [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        'eslint-config-alloy',
    ],
    parserOptions:  {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'indent': [2, 2, {'SwitchCase': 1}],
        '@typescript-eslint/indent': ['error', 2],
        'eol-last': ['error', 'always'],
        '@typescript-eslint/explicit-member-accessibility': ['off'],
        '@typescript-eslint/camelcase': ['off'],
        'no-case-declarations': ['off'],
        'function-call-argument-newline': ['off'],
        'no-param-reassign': ['off'],
        'max-params': ['off'],
        'comma-spacing': 2,
    },
    overrides: [
        {
          files: ['*.js'],
          rules: {
            '@typescript-eslint/no-var-requires': 'off'
          }
        }
    ],
    globals: {
      "EASY_ENV_IS_NODE": true
    }
};
