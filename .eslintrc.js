module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true,
        'jest/globals': true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier",
    ],
    "parser" : "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "root":true,
    "rules": {
        'react/react-in-jsx-scope': 'off'
    }
};
