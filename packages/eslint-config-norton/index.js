/**
 * Use Airbnb as base and add Prettier to handle formatting conflicts.
 * @see https://github.com/airbnb/javascript/
 * @see https://github.com/prettier/eslint-config-prettier
 */
module.exports = {
	extends: [
		'eslint-config-airbnb',
		'eslint-config-airbnb/hooks',
		'eslint-config-prettier',
		'eslint-config-prettier/react',
		'./rules/style',
		'./rules/react',
	].map(require.resolve),
};
