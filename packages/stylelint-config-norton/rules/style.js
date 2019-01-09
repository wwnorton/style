const extend = require('lodash.merge');
const { rules: standard } = require('stylelint-config-standard');
const { rules: primer } = require('stylelint-config-primer');

module.exports = {
	/** stylelint rules */
	'at-rule-empty-line-before': extend(
		standard['at-rule-empty-line-before'],
		[
			'always', {
				ignoreAtRules: ['else'],
			},
		],
	),
	'at-rule-no-unknown': null,
	'function-parentheses-space-inside': 'never-single-line',
	indentation: 'tab',
	'max-empty-lines': 2,

	/** order rules */
	'order/properties-alphabetical-order': null,
	'order/properties-order': primer['order/properties-order'],

	/** stylelint-scss rules */
	'scss/at-else-empty-line-before': 'never',
};
