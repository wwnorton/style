const style = require('./rules/style');
const scss = require('./rules/plugins/scss');
const order = require('./rules/plugins/order');
const bestPractices = require('./rules/best-practices');

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
		...order,
		...scss,
	},
};
