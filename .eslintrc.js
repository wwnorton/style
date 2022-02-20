/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: [
		'norton/react',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{
				packageDir: [
					'.',
					'./packages/commitlint-config-norton',
					'./packages/eslint-config-norton',
					'./packages/stylelint-config-norton',
					'./guides-website',
				],
			},
		],
	},
};
