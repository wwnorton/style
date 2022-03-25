const test = require('ava');
const path = require('path');
const { eslint, createChecker } = require('./helpers');

const FIXTURE = path.join(__dirname, 'fixtures/invalid-ts.ts');

test.before(async (t) => {
	t.timeout(60000, 'lint invalid .ts');
	// eslint-disable-next-line no-param-reassign
	t.context.checker = createChecker(await eslint.lintFiles(FIXTURE));
});

test('@typescript-eslint/indent: using spaces instead of tabs triggers an error', (t) => {
	const { checker } = t.context;
	t.false(checker(FIXTURE, 'no-tabs'));
	t.false(checker(FIXTURE, 'indent'));
	t.true(checker(FIXTURE, '@typescript-eslint/indent'));
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
