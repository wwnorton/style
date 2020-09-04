module.exports = {
	extends: ['./packages/eslint-config-norton', './packages/eslint-config-norton/typescript'],
	rules: {
		'import/no-extraneous-dependencies': ['error',
			{
				packageDir: [
					'.',
					'./packages/commitlint-config-norton',
					'./packages/eslint-config-norton',
					'./packages/stylelint-config-norton',
				],
			},
		],
	},
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./packages/eslint-config-norton/tsconfig.json'],
	},
};
