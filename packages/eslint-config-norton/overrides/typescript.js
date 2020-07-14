/**
 * Overrides for usage with TypeScript.
 *
 * Additional dependencies expected:
 * - @typescript-eslint/eslint-plugin
 * - @typescript-eslint/parser
 *
 * Recommended config:
 *   {
 *     extends: [
 *       'norton',
 *       'plugin:import/typescript',
 *       'plugin:@typescript-eslint/recommended',
 *     ],
 *   }
 */
module.exports = {
	files: ['*.ts', '*.tsx'],
	rules: {
		indent: 'off',
		'no-tabs': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/no-empty-interface': 'off',
	},
};
