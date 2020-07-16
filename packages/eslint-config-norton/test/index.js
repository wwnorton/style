import test from 'ava';
import path from 'path';
import { ESLint } from 'eslint';

const valid = path.join(__dirname, 'fixtures/valid.js');
const invalid = path.join(__dirname, 'fixtures/invalid.js');

const eslint = new ESLint({
	useEslintrc: true,
	ignore: false,
});

let result;

const getReport = (file) => result.find(({ filePath }) => filePath === file);

const flagged = (messages, rule, severity = 2) => messages.some(
	({ ruleId, severity: ruleSeverity }) => ruleId === rule && ruleSeverity === severity,
);

test.before(async () => {
	result = await eslint.lintFiles([valid, invalid]);
});

test('valid file did not error', async (t) => {
	const { errorCount } = getReport(valid);
	t.is(errorCount, 0);
});

test('valid file flags no warnings', async (t) => {
	const { warningCount } = getReport(valid);
	t.is(warningCount, 0);
});

test('using spaces instead of tabs triggers an error', (t) => {
	const { messages } = getReport(invalid);
	t.true(flagged(messages, 'indent'));
});
