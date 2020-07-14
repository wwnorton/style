module.exports = {
	rules: {
		/**
		 * Avoid export default to improve TypeScript experience. Applicable in
		 * JavaScript as well, though less impactful.
		 * For rationale, see https://basarat.gitbook.io/typescript/main-1/defaultisbad
		 */
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',
	},
};
