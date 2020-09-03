/**
 * Overrides for usage with TypeScript + React.
 */
module.exports = {
	overrides: [
		{
			files: ['*.ts?(x)'],
			extends: [
				'./typescript-base',
				'./rules/typescript-react',
			].map(require.resolve),
			settings: {
				'import/extensions': [
					'.js',
					'.jsx',
					'.mjs',
					'.ts',
					'.tsx',
				],
				'import/resolver': {
					node: {
						extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
					},
					webpack: {
						extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
					},
				},
			},
		},
	],
};
