/**
 * ? This is the base configuration for projects without React.
 */
const typescriptBase = require('./overrides/typescript-base');

module.exports = {
	/**
	 * add eslint-config-prettier to handle formatting conflicts with prettier
	 * @see https://github.com/prettier/eslint-config-prettier
	 */
	extends: [
		'eslint-config-airbnb/base',
		'eslint-config-prettier',
		'./rules/style',
	].map(require.resolve),
	overrides: [
		typescriptBase,
	],
};
