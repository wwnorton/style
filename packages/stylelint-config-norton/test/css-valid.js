import fs from 'fs';
import test from 'ava';
import stylelint from 'stylelint';
import config from '../';

const validCss = fs.readFileSync('./test/fixtures/css-valid.css', 'utf-8');
let result;

test.beforeEach(() => {
	result = stylelint.lint({
		code: validCss,
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
