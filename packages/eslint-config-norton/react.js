/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'airbnb',
		'airbnb/hooks',

		// norton-specific overrides
		'./rules/style',
		'./rules/react',
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				'plugin:import/typescript',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'airbnb-typescript',

				// norton-specific overrides
				'./rules/typescript',
				'./rules/typescript/react',
			],
		},
	],
};
