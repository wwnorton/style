module.exports = {
	rules: {
		/**
		 * use tabs, not spaces
		 * @see https://gitlab.com/wwnorton/style/guide/issues/1
		 */
		indent: ['error', 'tab'],
		'no-tabs': 0,
		/**
		 * Allow consecutive single-line class fields to encourage field
		 * declaration blocks where supported.
		 */
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],
	},
};
