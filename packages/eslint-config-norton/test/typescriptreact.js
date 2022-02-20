/** @type {import('ava').TestFn} */
const test = require('ava');	// eslint-disable-line import/no-unresolved
const path = require('path');
const { eslint, createChecker } = require('./helpers');

const FIXTURE = path.join(__dirname, 'fixtures/invalid-tsreact.tsx');

test.before(async (t) => {
	t.timeout(60000, 'lint invalid .tsx');
	// eslint-disable-next-line no-param-reassign
	t.context.checker = createChecker(await eslint.lintFiles(FIXTURE));
});

test('react/jsx-indent: using spaces instead of tabs in JSX triggers an error', (t) => {
	const { checker } = t.context;
	t.false(checker(FIXTURE, 'no-tabs'));
	t.false(checker(FIXTURE, 'indent'));
	t.true(checker(FIXTURE, '@typescript-eslint/indent'));
	t.true(checker(FIXTURE, 'react/jsx-indent'));
});

test('import/no-default-export: using default export triggers an error', (t) => {
	const { checker } = t.context;
	t.false(checker(FIXTURE, 'import/prefer-default-export'));
	t.true(checker(FIXTURE, 'import/no-default-export'));
});

test('lines-between-class-members: sequential class member blocks trigger an error', (t) => {
	const { checker } = t.context;
	t.true(checker(FIXTURE, 'lines-between-class-members'));
	t.false(checker(FIXTURE, '@typescript-eslint/lines-between-class-members'));
});

test('react/jsx-indent-props: using spaces instead of tabs in an indented prop triggers an error', (t) => {
	const { checker } = t.context;
	t.true(checker(FIXTURE, 'react/jsx-indent-props'));
});

test('react/static-property-placement: external static class properties triggers an error', (t) => {
	const { checker } = t.context;
	t.true(checker(FIXTURE, 'react/static-property-placement'));
});
