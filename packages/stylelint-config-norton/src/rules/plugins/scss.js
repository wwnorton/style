const extend = require('lodash.merge');
const { rules: standard } = require('stylelint-config-standard');

/** stylelint-scss rules */
module.exports = {
	// allow @else to come immediately after @if block
	'at-rule-empty-line-before': extend(
		standard['at-rule-empty-line-before'],
		[
			'always', {
				ignoreAtRules: ['else'],
			},
		],
	),
	'at-rule-no-unknown': null,
	'scss/at-else-empty-line-before': 'never',
};
