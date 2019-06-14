const style = require('./rules/style');
const order = require('./rules/plugins/order');
const bestPractices = require('./rules/best-practices');

module.exports = {
	extends: [
		'stylelint-config-standard',
	],
	plugins: [
		'stylelint-order',
	],
	rules: {
		...bestPractices,
		...style,
		...order,
	},
};
