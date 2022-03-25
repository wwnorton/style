/** @type {import('stylelint').Config} */
module.exports = {
	extends: [
		// https://github.com/stylelint/stylelint-config-standard
		'stylelint-config-standard',

		// Norton-specific overrides
		require.resolve('./rules/accessibility'),
		require.resolve('./rules/plugins/order'),
		require.resolve('./rules/style'),
	],
	plugins: [
		'stylelint-order',
	],
};
