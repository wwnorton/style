const typescript = require('./overrides/typescript');

module.exports = {
	extends: [
		'eslint-config-airbnb-base',
		'./rules/style',
	].map(require.resolve),
	rules: {},
	/**
	 * Add overrides for React and TypesScript environments.
	 * Note that additional eslint tooling will be required for these to work.
	 */
	overrides: [
		typescript,
	],
};
