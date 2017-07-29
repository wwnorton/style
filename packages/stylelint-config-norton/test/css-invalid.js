import fs from 'fs';
import test from 'ava';
import stylelint from 'stylelint';
import config from '../';

const invalidCss = fs.readFileSync('./test/css-invalid.css', 'utf-8');
let result;

test.beforeEach(() => {
	result = stylelint.lint({
		code: invalidCss,
		config,
	});
});

test('did error', async (t) => {
	const data = await Promise.resolve(result);
	t.truthy(await data.errored);
});

test('flags one warning', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings.length, 1);
});

test('correct warning text', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[0].text, 'Expected a leading zero (number-leading-zero)');
});

test('correct rule flagged', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[0].rule, 'number-leading-zero');
});

test('correct severity flagged', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[0].severity, 'error');
});

test('correct line number', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[0].line, 2);
});

test('correct column number', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[0].column, 7);
});
