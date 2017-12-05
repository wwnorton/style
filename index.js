module.exports = {
	/**
	 * use airbnb's well-reasoned style guide as base
	 * @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
	 */
	extends: [
		'eslint-config-airbnb-base',
		'eslint-config-airbnb-base/rules/strict',
	],
	rules: {
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			/**
			 * trailing function commas are only supported in ES2017 (& Node 8+)
			 * @see https://github.com/tc39/proposal-trailing-function-commas
			 */
			functions: 'never',
		}],
		/**
		 * use tabs, not spaces
		 * @see https://gitlab.com/wwnorton/style/guide/issues/1
		 */
		indent: ['error', 'tab'],
		'no-tabs': 0,
	},
};
