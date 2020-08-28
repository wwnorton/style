/**
 * ? This is the base configuration for projects without React.
 */
const typescript = require('./overrides/typescript');

module.exports = {
	/**
	 * add eslint-config-prettier to handle formatting conflicts with prettier
	 * @see https://github.com/prettier/eslint-config-prettier
	 */
	extends: [
		'eslint-config-airbnb/base',
		'./rules/style',
		'eslint-config-prettier'
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
