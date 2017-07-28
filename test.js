/**
 * simple tests modified from eslint-config-google
 * @see https://github.com/google/eslint-config-google/blob/master/test/test.js
 */

const assert = require('assert');
const eslint = require('eslint');

/** Lint all the files in this repo. */
const repoFiles = [
	'index.js',
	'test.js',
];

/** Use the rules defined in this repo. */
const eslintOpts = {
	useEslintrc: true,
};

/** Runs the linter on the repo files and asserts no errors were found. */
const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(repoFiles);
assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);
repoFiles.forEach((file, index) => {
	assert(report.results[index].filePath.endsWith(file));
});
