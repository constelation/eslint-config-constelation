module.exports = {

  "parser": "babel-eslint",
  "ecmaFeatures": {
    "classes": true,
    "jsx": true
  },
  "env": {
    "es6": true,
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "globals": {
    "__DEV__"      : false,
    "__PROD__"     : false,
    "__DEBUG__"    : false,
  },
  "rules": {
    "no-unexpected-multiline": 1,
    "semi": [1, "never"],
    "comma-dangle": [ 1, "always-multiline" ],
    "no-case-declarations": 1,
    "no-cond-assign": 1,
    "no-console": 0,
    "no-debugger": 1,
    "no-dupe-keys": 1,
    "no-duplicate-case": 1,
    "no-empty": 1,
    "no-extra-boolean-cast": 1,
    "no-func-assign": 1,
    "no-inner-declarations": 1,
    "no-invalid-regexp": 1,
    "no-obj-calls": 1,
    "no-sparse-arrays": 1,
    "no-unreachable": 2,
    "use-isnan": 1,
    "valid-typeof": 1,
    "no-shadow": 1,
    "no-unused-vars": 1,
    "no-use-before-define": 0,  // disabled for styles object after react component
    "default-case": 1,
    "dot-notation": 1,
    "dot-location": [ 1, "property" ],
    "eqeqeq": [ 1, "smart" ],
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-implicit-coercion": 2,
    "no-multi-spaces": 0,
    "no-new-wrappers": 2,
    "no-param-reassign": 2,
    "no-redeclare": 0, // disabled because of use in redux's switch statements
    "no-return-assign": [ 2, "always" ],
    "array-bracket-spacing": [ 1, "never" ],
    "brace-style": [ 1, "stroustrup", { "allowSingleLine": true } ],
    "comma-spacing": 0,
    "comma-style": 2,

    /* Keep these up to the dev's preference for now */
    // "computed-property-spacing": [ 1, "always" ],
    /*
      "lines-around-comment": [ 1, {
          "beforeBlockComment": false,
          "beforeLineComment": true,
          "allowBlockStart": true,
          "allowObjectStart": true,
          "allowArrayStart": true
        } ],
        */

    "indent": [1, 2, {"SwitchCase": 1}],
    "key-spacing": 1,
    "new-cap": 2,
    "new-parens": 2,
    "no-array-constructor": 2,
    "no-lonely-if": 1,
    "no-spaced-func": 2,
    "no-trailing-spaces": 1,
    "no-useless-constructor": 1,
    "one-var": [ 1, { "uninitialized": "always", "initialized": "never" } ],
    "object-curly-spacing": [ 1, "never" ],
    "quotes": [ 1, "single", {"avoidEscape": true, "allowTemplateLiterals": true} ],
    "semi-spacing": [ 2, { "before": false, "after": true } ],
    "no-multiple-empty-lines": [ 1, { "max": 2 } ],
    "no-extra-semi": 1,
    "space-before-blocks": [ 1, "always" ],
    "space-before-function-paren": [ 1, { "anonymous": "always", "named": "never" } ],
    "space-in-parens": [ 1, "never" ],
    "space-infix-ops": 0,
    "space-unary-ops": [ 1, { "words": true, "nonwords": false } ],
    "arrow-spacing": [ 1, { "before": true, "after": true } ],
    "constructor-super": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-this-before-super": 2,
    "prefer-const": 1,
    "prefer-spread": 1,
    "strict": [ 1, "never" ],
    "yoda": 0,
    "eol-last": 0,
    "camelcase": 0,
    "jsx-quotes": [1, "prefer-single"],
    "react/display-name": 0,
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": [1, "never"],
    "react/jsx-equals-spacing": [1, "never"],
    "react/jsx-handler-names": 1,
    "react/jsx-indent": [1, 2],
    "react/jsx-indent-props": [1, 2],
    "react/jsx-key": 2,
    "react/jsx-no-bind": [1, {"ignoreRefs": true}],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/react-in-jsx-scope": 2,
    "react/jsx-pascal-case": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-space-before-closing": [1, "always"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": 1,
    "react/no-did-mount-set-state": 0, // setTimeout with setState is a valid use case
    "react/no-did-update-set-state": 2,
    "react/no-find-dom-node": 1,
    "react/no-multi-comp": 0,
    "react/no-string-refs": 1,
    "react/no-unknown-property": 2,
    "react/prop-types": 0,
    "react/self-closing-comp": 2,
    "react/sort-comp": [1, {
      order: [
        'type-annotations',
        'static-methods',
        //'everything-else',        // someday I hope to have instance properties before lifecycle
        //'lifecycle',              // until that time, don't check lifecycle
        'everything-else',
        'render'
      ],
    }],
    "react/sort-prop-types": [1, {"requiredFirst": true, "ignoreCase": true}],
  }

};
