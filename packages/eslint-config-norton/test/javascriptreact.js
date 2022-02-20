/** @type {import('ava').TestFn} */
const test = require('ava');	// eslint-disable-line import/no-unresolved
const path = require('path');
const { eslint, createChecker } = require('./helpers');

const FIXTURE = path.join(__dirname, 'fixtures/invalid-react.jsx');

test.before(async (t) => {
	// eslint-disable-next-line no-param-reassign
	t.context.checker = createChecker(await eslint.lintFiles(FIXTURE));
});

test('react/jsx-indent: using spaces instead of tabs in JSX triggers an error', (t) => {
	const { checker } = t.context;
	t.true(checker(FIXTURE, 'react/jsx-indent'));
});

test('react/jsx-indent-props: using spaces instead of tabs in an indented prop triggers an error', (t) => {
	const { checker } = t.context;
	t.true(checker(FIXTURE, 'react/jsx-indent-props'));
});
