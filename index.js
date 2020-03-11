module.exports = {
	/**
	 * use airbnb's well-reasoned style guide as base
	 * @see https://github.com/airbnb/javascript/
	 */
	extends: [
		'eslint-config-airbnb-base',
		'./rules/style',
	].map(require.resolve),
};
