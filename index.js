const react = require('./overrides/react');
const typescript = require('./overrides/typescript');

module.exports = {
	/**
	 * use airbnb's well-reasoned style guide as base
	 * @see https://github.com/airbnb/javascript/
	 */
	extends: [
		'eslint-config-airbnb-base',
		'./rules/style',
		'./rules/bestPractices',
	].map(require.resolve),
	/**
	 * Add overrides for React and TypesScript environments.
	 * Note that additional eslint tooling will be required for these to work.
	 */
	overrides: [
		react,
		typescript,
	],
};
