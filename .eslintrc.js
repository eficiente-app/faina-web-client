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
    'vue/attribute-hyphenation': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-indent': 'error',
    'vue/html-quotes': 'error',
    'vue/attributes-order': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/eqeqeq': 'error',
    'vue/no-irregular-whitespace': 'error'
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
