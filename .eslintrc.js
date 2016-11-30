module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended", "plugin:react/recommended"
    ],
    "plugins": ["react"],
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    },
    "rules": {
        "quotes": [
            "error", "single"
        ],
        "react/prop-types": 0,
        "no-unused-vars": 0
    }
};
