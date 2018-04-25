const extend = require('lodash.merge');
const standard = require('stylelint-config-standard');
const idiomaticOrder = require('stylelint-config-idiomatic-order');

module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-sass-guidelines',
	],
	plugins: [
		'stylelint-scss',
	],
	rules: {
		/** stylelint rules */
		'at-rule-empty-line-before': extend(
			standard.rules['at-rule-empty-line-before'],
			[
				'always', {
					ignoreAtRules: ['else'],
				},
			]
		),
		'at-rule-no-unknown': null,
		'declaration-property-unit-blacklist': {
			'font-size': ['px'],
		},
		'function-parentheses-space-inside': 'never-single-line',
		indentation: 'tab',
		'max-empty-lines': 2,

		/** override alphabetical and use the order from stylelint-config-idiomatic-order */
		'order/properties-alphabetical-order': null,
		'order/properties-order': idiomaticOrder.rules['order/properties-order'],

		/** stylelint-scss rules */
		'scss/at-else-empty-line-before': 'never',
	},
};
