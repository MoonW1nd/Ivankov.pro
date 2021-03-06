const orderedPropertyHash = require('css-property-sort-order-smacss');

/** @type {string[]} List of CSS properties */
const orderedPropertyList = [];

Object.values(orderedPropertyHash).forEach(listOrListOfLists => {
    listOrListOfLists.forEach(propertyOrList => {
        if (Array.isArray(propertyOrList)) {
            orderedPropertyList.push(...propertyOrList);
        } else {
            orderedPropertyList.push(propertyOrList)
        }
    });
});

/** @type {Object} Stylelint config object */
const config = {
    extends: ['stylelint-config-recommended', "stylelint-config-prettier"],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
        "stylelint-prettier",
    ],
    rules: {
        'prettier/prettier': true,
        'declaration-no-important': true,
        'at-rule-no-unknown': null,
        'at-rule-empty-line-before': [
            'always', {
                except: ['first-nested'],
                ignore: ['after-comment', 'blockless-after-blockless'],
                ignoreAtRules: ['if', 'else']
            }
        ],
        'scss/at-rule-no-unknown': true,
        'scss/at-else-empty-line-before': 'never',
        indentation: [4, {ignore: ['inside-parens']}],
        'order/order': [
            [
                'custom-properties',
                'dollar-variables',
                'declarations',
                'rules'
            ]],
        'order/properties-order': orderedPropertyList,
        'string-quotes': 'single',
        'length-zero-no-unit': true,
        'max-empty-lines': 2,
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,
        'unit-case': 'lower',
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'linebreaks': 'unix'
        },
    ignoreFiles: [
      'src/tracker-icons.scss'
    ]
};

module.exports = config;
