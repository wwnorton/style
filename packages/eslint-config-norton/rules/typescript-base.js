module.exports = {
	rules: {
		/**
		 * Avoid export default.
		 * @see https://github.com/wwnorton/style/pull/71
		 */
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',

		/** Enable tabs with @typescript-eslint/indent instead of eslint/indent. */
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],

		/** Prettier overrides for semicolons using the @typescript-eslint version of the rules. */
		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': 'error',
		semi: 'off',
		'@typescript-eslint/semi': 'error',

		/** Add ts to airbnb's list. */
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
			},
		],
	},
};
