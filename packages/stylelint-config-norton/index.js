module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-sass-guidelines',
	],
	rules: {
		'at-rule-no-unknown': null,
		'declaration-property-unit-blacklist': {
			'font-size': ['px'],
		},
		'function-parentheses-space-inside': 'never-single-line',
		indentation: 'tab',
		'max-empty-lines': 2,
	},
};
