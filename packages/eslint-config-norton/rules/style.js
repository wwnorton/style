module.exports = {
	rules: {
		/**
		 * use tabs, not spaces
		 * @see https://gitlab.com/wwnorton/style/guide/issues/1
		 */
		indent: ['error', 'tab'],
		'no-tabs': 'off',

		/** Prettier overrides for semicolons. */
		'no-extra-semi': 'error',
		semi: ['error', 'always'],
		'semi-spacing': ['error', { before: false, after: true }],
		'semi-style': ['error', 'last'],
	},
};
