/** @type {import('stylelint').Config} */
module.exports = {
	extends: [
		// https://github.com/stylelint-scss/stylelint-config-standard-scss
		'stylelint-config-standard-scss',

		// Norton-specific overrides
		require.resolve('./rules/accessibility'),
		require.resolve('./rules/plugins/order'),
		require.resolve('./rules/style'),
		require.resolve('./rules/plugins/scss'),
	],
	plugins: [
		'stylelint-order',
	],
};
