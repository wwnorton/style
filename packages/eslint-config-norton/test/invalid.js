import test from 'ava';
import eslint from 'eslint';

const files = [
	'./test/fixtures/invalid.js',
];
const cli = new eslint.CLIEngine({
	ignore: false,
	useEslintrc: true,
});
let result;

test.beforeEach(() => {
	result = cli.executeOnFiles(files);
});

test('errored', async (t) => {
	const data = await Promise.resolve(result);
	t.truthy(data.errorCount);
});

test('correct tab error message', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].messages[0].message, 'Expected indentation of 1 tab but found 2 spaces.');
});

test('correct tab error rule', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].messages[0].ruleId, 'indent');
});

test('correct trailing-comma error message', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].messages[1].message, 'Unexpected trailing comma.');
});

test('correct trailing-comma error rule', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].messages[1].ruleId, 'comma-dangle');
});

test('flags warnings', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.warningCount, 1);
});
