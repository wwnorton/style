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
	//parser:"@typescript-eslint/parser",
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/typescript',
		'prettier/@typescript-eslint'
	],
	plugins: [
		"@typescript-eslint"
	],
	rules: {
		indent: 'off',
		'no-tabs': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/no-empty-interface': 'off',
		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': 'error',
	},
	parserOptions: {
		project: "./tsconfig.json"
	}
};
