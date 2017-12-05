module.exports = {
	/**
	 * use airbnb's well-reasoned style guide as base
	 * @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
	 */
	extends: [
		'eslint-config-airbnb-base',
		'eslint-config-airbnb-base/rules/strict',
		'./rules/style',
	].map(require.resolve),
};
