import test from 'ava';
import eslint from 'eslint';

const files = [
	'./index.js',
	'./test/valid.js',
];
const cli = new eslint.CLIEngine({ useEslintrc: true });
let result;

test.beforeEach(() => {
	result = cli.executeOnFiles(files);
});

test('did not error', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.errorCount, 0);
});

test('flags no warnings', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.warningCount, 0);
});
