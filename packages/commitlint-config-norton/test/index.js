const test = require('ava');
const { default: load } = require('@commitlint/load');
const { default: commitlint } = require('@commitlint/lint');
const config = require('..');

let lint;

/**
 * Load the config into our lint function
 * This is run once, before everything else
 */
test.before(async () => {
	const opts = await load(config);
	/**
	 * Commitlint function that uses our config
	 * @param  {String} commitMsg	The commit message
	 * @return {Object}				The report returned by @commitlint/lint
	 */
	lint = (commitMsg) => commitlint(
		commitMsg,
		opts.rules,
		opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {},
	);
});

/* eslint-disable no-param-reassign */
/**
 * Add the lint function to the test context before every test
 */
test.beforeEach((t) => {
	t.context.lint = lint;
});

/**
 * The primary testing interface
 * @param  {String}   desc      The Ava test description
 * @param  {String}   commitMsg The commit message to be tested
 * @param  {Function} fn        Ava's test function
 */
const commitTest = (desc, commitMsg, fn) => {
	const title = `${desc}: "${commitMsg}"`;
	test(title, async function setup(t, ...args) {
		t.context.report = await t.context.lint(commitMsg);
		fn.call(this, t, ...args);
	});
};
/* eslint-enable no-param-reassign */

// BEGIN TESTS

commitTest('invalid type', 'foo: bar', async (t) => {
	t.false(t.context.report.valid, 'test failure message');
});
