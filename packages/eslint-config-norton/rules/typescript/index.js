const { rules: styleRules } = require('../style');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	rules: {
		// Use tabs for more accessible code.
		// https://alexandersandberg.com/tabs-for-accessibility/
		// https://typescript-eslint.io/rules/indent/
		'no-tabs': 'off',
		indent: 'off',
		'@typescript-eslint/indent': styleRules.indent,

		// Avoid export default.
		// https://basarat.gitbook.io/typescript/main-1/defaultisbad
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',

		// Allow sequential class field declarations since TypeScript supports them.
		// https://www.typescriptlang.org/docs/handbook/2/classes.html#fields
		// https://eslint.org/docs/rules/lines-between-class-members
		// https://typescript-eslint.io/rules/lines-between-class-members/
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'@typescript-eslint/lines-between-class-members': 'off',
	},
};
