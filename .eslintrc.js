module.exports = {
	extends: ['./packages/eslint-config-norton'].map(require.resolve),
	rules: {
		'import/no-extraneous-dependencies': ['error',
			{
				packageDir: [
					'.',
					'./packages/commitlint-config-ebook',
					'./packages/eslint-config-norton',
					'./packages/stylelint-config-norton',
				],
			},
		],
	},
};
