/**
 * Overrides for usage with TypeScript.
 */
module.exports = {
	files: ['*.ts', '*.tsx'],
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
		'@typescript-eslint/no-extra-semi': 'error'
	},
	parserOptions: {
		project: "./tsconfig.json"
	}
};

/*prettier/@typescript-eslint rules

"@typescript-eslint/quotes": 0,

"@typescript-eslint/brace-style": "off",
"@typescript-eslint/comma-spacing": "off",
"@typescript-eslint/func-call-spacing": "off",
"@typescript-eslint/indent": "off",
"@typescript-eslint/keyword-spacing": "off",
"@typescript-eslint/member-delimiter-style": "off",
"@typescript-eslint/no-extra-parens": "off",
"@typescript-eslint/no-extra-semi": "off",
"@typescript-eslint/semi": "off",
"@typescript-eslint/space-before-function-paren": "off",
"@typescript-eslint/type-annotation-spacing": "off",*/
