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
		'at-rule-no-unknown': null,
		'declaration-property-unit-blacklist': {
			'font-size': ['px'],
		},
		'function-parentheses-space-inside': 'never-single-line',
		indentation: 'tab',
		'max-empty-lines': 2,

		/** stylelint-scss rules */
		// 'at-else-empty-line-before': 'never',
	},
};
