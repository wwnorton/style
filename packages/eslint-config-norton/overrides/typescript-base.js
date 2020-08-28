/**
 * Overrides for usage with TypeScript.
 */
module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/typescript',
		'prettier/@typescript-eslint'
	],
	rules: {
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
	settings: {
		'import/extensions': [
			'.js',
			'.jsx',
			'.mjs',
			'.ts',
		],
		'import/resolver': {
			node: {
				extensions: ['.js', '.json', '.ts'],
			},
			webpack: {
				extensions: ['.js', '.json', '.ts'],
			},
		},
	},
};
