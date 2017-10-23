module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-sass-guidelines',
	],
	rules: {
		'declaration-property-unit-blacklist': {
			'font-size': ['px'],
		},
		'function-parentheses-space-inside': 'never-single-line',
		indentation: 'tab',
	},
};
