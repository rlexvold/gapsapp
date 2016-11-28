module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended", "plugin:react/recommended"
    ],
    "plugins": [
        "react", "mocha", "chai-expect"
    ],
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
        "mocha/no-exclusive-tests": "error",
        "chai-expect/missing-assertion": 2,
        "chai-expect/terminating-properties": 1,
        "react/prop-types": 0,
        "no-unused-vars": 0,
        "semi": ["error", "never"]
    }
};
