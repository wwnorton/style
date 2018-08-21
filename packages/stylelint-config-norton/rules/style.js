const extend = require('lodash.merge');
const standard = require('stylelint-config-standard');
const { primer } = require('./order');

module.exports = {
	/** stylelint rules */
	'at-rule-empty-line-before': extend(
		standard.rules['at-rule-empty-line-before'],
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
	'order/properties-order': primer,

	/** stylelint-scss rules */
	'scss/at-else-empty-line-before': 'never',
};
