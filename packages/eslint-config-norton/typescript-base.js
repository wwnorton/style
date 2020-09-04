/**
 * Overrides for usage with TypeScript.
 */
module.exports = {
	overrides: [
		{
			files: ['*.ts?(x)'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:import/typescript',
				'prettier/@typescript-eslint',
				'./rules/typescript-base'
			],
			parserOptions: {
				project: './tsconfig.json',
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
		}
	]
};
