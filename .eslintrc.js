module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
    expect: true
  },
  overrides: [
    {
      files: ['*.vue','*.js'],
      rules: {
        'no-tabs': 0,
        'vue/require-default-prop': [0],
        'vue/no-unused-vars': 'off',
        'vue/no-v-html': 'off',
        'vue/order-in-components': ['error', {
          'order': [
            'el',
            'name',
            'parent',
            'functional',
            ['delimiters', 'comments'],
            ['components', 'directives', 'filters'],
            'extends',
            'mixins',
            'inheritAttrs',
            'model',
            ['props', 'propsData'],
            'fetch',
            'asyncData',
            'data',
            'computed',
            'watch',
            'LIFECYCLE_HOOKS',
            'methods',
            'head',
            ['template', 'render'],
            'renderError'
          ]
        }]
      }
    }
  ]
};
