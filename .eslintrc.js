module.exports = {
  plugins: [
    "@typescript-eslint",
    "jest",
    "promise",
    "unicorn",
  ],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  parserOptions: {
    project: "tsconfig.eslint.json"
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "no-prototype-builtins": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": "off",
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-node-protocol": "off",
    'lines-between-class-members': [
      'error',
      'always',
      { 'exceptAfterSingleLine': true },
    ]
  },
}
