module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    'browser': true
  },
  rules: {
    'array-callback-return': 2,
    'curly': [2, 'all'],
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': 2,
    'no-implicit-coercion': 2,
    'no-multi-spaces': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-return-assign': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-useless-concat': 2,
    'no-warning-comments': 2,
    'no-shadow': 2,
    'no-undef-init': 2,

    // Stylistic
    'array-bracket-spacing': 2,
    'block-spacing': 2,
    'brace-style': 2,
    'camelcase': 2,
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'indent': [2, 2],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'lines-around-comment': 2,
    'max-statements-per-line': 2,
    'new-cap': 2,
    'new-parens': 2,
    'newline-before-return': 2,
    'no-negated-condition': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'never'],
    'operator-linebreak': 2,
    'padded-blocks': [2, 'never'],
    'semi': 2,
    'semi-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'template-curly-spacing': 2
  }
};