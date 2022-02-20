/** @type {import('ava').TestFn} */
const test = require('ava');	// eslint-disable-line import/no-unresolved
const path = require('path');
const { eslint, createChecker } = require('./helpers');

const FIXTURE = path.join(__dirname, 'fixtures/invalid-js.js');

test.before(async (t) => {
	// eslint-disable-next-line no-param-reassign
	t.context.checker = createChecker(await eslint.lintFiles(FIXTURE));
});

test('indent: using spaces instead of tabs triggers an error', (t) => {
	const { checker } = t.context;
	t.true(checker(FIXTURE, 'indent'));
});
