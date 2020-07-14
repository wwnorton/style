import test from 'ava';
import path from 'path';
import eslint from 'eslint';

const files = [
	path.join(__dirname, 'fixtures/valid.js'),
];
const cli = new eslint.CLIEngine({ useEslintrc: true });
let report;

test.before(async () => {
	report = await cli.executeOnFiles(files);
});

test('did not error', async (t) => {
	t.is(report.errorCount, 0);
});

test('flags no warnings', async (t) => {
	t.is(report.warningCount, 0);
});
