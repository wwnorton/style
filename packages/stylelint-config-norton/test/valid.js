import fs from 'fs';
import test from 'ava';
import stylelint from 'stylelint';
import config from '../';

const valid = fs.readFileSync('./test/fixtures/valid.scss', 'utf-8');
let result;

test.beforeEach(() => {
	result = stylelint.lint({
		code: valid,
		config,
	});
});

test('did not error', async (t) => {
	const data = await Promise.resolve(result);
	t.falsy(data.errored);
});

test('flags no warnings', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings.length, 0);
});
