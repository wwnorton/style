/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'airbnb-base',

		// norton-specific overrides
		'./rules/style',
	],
	overrides: [
		{
			files: ['*.ts'],
			extends: [
				'plugin:import/typescript',
				'plugin:@typescript-eslint/recommended',
				'airbnb-typescript/base',

				// norton-specific overrides
				'./rules/typescript',
			],
		},
	],
};
