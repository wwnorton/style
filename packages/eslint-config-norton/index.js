const typescript = require('./overrides/typescript');

module.exports = {
	/**
	 * use airbnb's well-reasoned style guide as base
	 * @see https://github.com/airbnb/javascript/
	 */
	/**
	 * add eslint-config-prettier to handle formatting conflicts with prettier
	 * @see https://github.com/prettier/eslint-config-prettier
	 */
	extends: [
		'eslint-config-airbnb',
		'./rules/style',
		'./rules/react',
		'eslint-config-prettier',
		'eslint-config-prettier/react',
	].map(require.resolve),
	/**
	 * Add overrides for React and TypesScript environments.
	 * Note that additional eslint tooling will be required for these to work.
	 */
	overrides: [
		typescript,
	],
};
