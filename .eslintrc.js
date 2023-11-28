
module.exports = {

  module: {
    rules: [{
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      exclude: path.resolve(__dirname, "node_modules"),
      use: 'file?name=fonts/[name].[ext]!static'
    }],
  },
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parser: 'babel-eslint',
  extends: ['next/core-web-vitals', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: './jsconfig.json',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  "settings": {
    "react": {
      "version": "16"
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/display-name': 'on',
    '@next/next/no-img-element': 'on',
    'react/no-unescaped-entities': 'on',
    'import/no-anonymous-default-export': 'on',
    "space-before-function-paren": 0,
    "react/prop-types": 0,
    "react/jsx-handler-names": 0,
    "react/jsx-fragments": 0,
    "react/no-unused-prop-types": 0,
    "import/export": 0,

    // add new line above comment
    'lines-around-comment': [
      'warn',
      {
        beforeLineComment: false,
        beforeBlockComment: false,
        allowBlockStart: false,
        allowClassStart: false,
        allowObjectStart: false,
        allowArrayStart: false
      }
    ],

    // add new line above return
    'newline-before-return': 'warn',

    // add new line below import
    'import/newline-after-import': [
      'warn',
      {
        count: 1
      }
    ],

    // add new line after each var, const, let declaration
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['export'], next: ['*'] },
      { blankLine: 'always', prev: ['*'], next: ['multiline-const', 'multiline-let', 'multiline-var', 'export'] }
    ],
  },


}
