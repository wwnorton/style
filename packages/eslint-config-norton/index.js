const typescript = require('./overrides/typescript');
const typescriptReact = require('./overrides/typescript-react');

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
		'eslint-config-airbnb/hooks',
		'eslint-config-prettier',
		'eslint-config-prettier/react',
		'./rules/style',
		'./rules/react',
	].map(require.resolve),
	/**
	 * Use overrides for TypeScript to ensure that .js files aren't linted with the
	 * TypeScript rules.
	 */
	overrides: [
		typescript,
		typescriptReact,
	],
};
