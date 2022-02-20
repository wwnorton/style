const { ESLint } = require('eslint');

const eslint = new ESLint({
	useEslintrc: true,
	ignore: false,
});

/**
 * Create a checker function that will check if a rule was flagged on a specified file.
 * @param {ESLint.LintResult[]} lintResult
 */
const createChecker = (lintResult) => (
	/** @type {string} */
	file,
	/** @type {string} */
	rule,
	/** @type {import('eslint').Linter.Severity} */
	severity = 2,
) => lintResult
	.find(({ filePath }) => filePath === file)
	.messages.some(
		({ ruleId, severity: ruleSeverity }) => ruleId === rule && ruleSeverity === severity,
	);

module.exports = {
	eslint,
	createChecker,
};
