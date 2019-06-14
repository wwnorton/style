const bestPractices = require('./rules/best-practices');
const style = require('./rules/style');

module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-sass-guidelines',
	],
	plugins: [
		'stylelint-scss',
	],
	rules: {
		...bestPractices,
		...style,
	},
};
