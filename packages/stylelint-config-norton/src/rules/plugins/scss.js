const extend = require('lodash.merge');
const { rules: standard } = require('stylelint-config-standard');

/** stylelint-scss rules */
module.exports = {
	'at-rule-empty-line-before': extend(
		standard['at-rule-empty-line-before'],
		[
			'always', {
				ignoreAtRules: [
					// allow @else to come immediately after @if block
					'else',
					// allow the various module/imports to come after one another
					'forward',
					'import',
					'use',
				],
			},
		],
	),
	'scss/at-else-empty-line-before': 'never',
	// add deeper nesting to align with Airbnb css/scss style guide
	"max-nesting-depth": [
		2,
		{
		  "ignoreAtRules": [
			"each",
			"media",
			"supports",
			"include"
		  ]
		}
	  ]
};
