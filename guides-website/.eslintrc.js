module.exports = {
	env: {
		browser: true,
	},
	rules: {
		'react/require-default-props': 'off',
		'import/no-unresolved': ['error', { ignore: ['^@docusaurus', '^@theme', '^@wwnds'] }],
	},
	ignorePatterns: [
		'src/**',
	],
};
