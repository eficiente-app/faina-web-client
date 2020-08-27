module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/eqeqeq': 'error',
    'vue/component-tags-order': 'warn',
    'vue/script-indent': 'error'
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],

  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ]
}
