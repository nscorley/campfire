module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'no-debugger': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    "react/destructuring-assignment": 0,
    "no-use-before-define": 0,
    "no-console": 0,
    },
  plugins: [
    "react",
    "react-native"
  ],
  globals: {
    window: true,
    document: true,
    Headers: true,
    },
};
