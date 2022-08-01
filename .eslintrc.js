module.exports = {
    "extends": [
        "plugin:vue/vue3-essential",
        "prettier"
    ],
    rules: {
        // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": "off",
        "no-trailing-spaces": 2,
        "indent": [
            "error",
            4
        ],
        "semi": [
            "error",
            "always"
        ],
        "prefer-const": 2,
        "camelcase": 2,
        "no-tabs": 0,
        "import/first": 0,
        "global-require": 0,
        "template-curly-spacing": 2,
        "block-spacing": [
            "error",
            "never"
        ],
        "brace-style": 2,
        "eqeqeq": 2,
        "key-spacing": 0,
        "object-curly-spacing": 0,
        "comma-dangle": 2,
        "prefer-promise-reject-errors": 0,
        "quote-props": 0,
        "no-unused-vars": 2,
        "space-before-function-paren": 2,
        "spaced-comment": 2,
        "quotes": 2,
        "vue/no-use-v-if-with-v-for": 2,
        "space-before-blocks": 2,
        "keyword-spacing": 0,
        "space-infix-ops": 0,
        "no-mixed-spaces-and-tabs": 2,
        "no-prototype-builtins": 0,
        "no-use-before-define": 2,
        "no-eval": 0
    }
};