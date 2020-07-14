import test from 'ava';
import path from 'path';
import eslint from 'eslint';

const files = [
	path.join(__dirname, 'fixtures/invalid.js'),
];
const cli = new eslint.CLIEngine({
	ignore: false,
	useEslintrc: true,
});
let messages;

const didError = (rule) => messages.some(
	({ ruleId, severity }) => ruleId === rule && severity === 2,
);

test.before(async () => {
	messages = (await cli.executeOnFiles(files)).results[0].messages;
});

test('using spaces instead of tabs triggers an error', (t) => {
	t.true(didError('indent'));
});

test('using a default export triggers an error', (t) => {
	t.true(didError('import/no-default-export'));
});
