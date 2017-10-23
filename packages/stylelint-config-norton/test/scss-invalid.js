import fs from 'fs';
import test from 'ava';
import stylelint from 'stylelint';
import config from '../';

const invalidCss = fs.readFileSync('./test/fixtures/scss-invalid.scss', 'utf-8');
let result;

test.beforeEach(() => {
	result = stylelint.lint({
		code: invalidCss,
		config,
	});
});

test('did error', async (t) => {
	const data = await Promise.resolve(result);
	t.truthy(data.errored);
});


/** no px on font-size */
test('no px: correct rule flagged', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[0].rule, 'declaration-property-unit-blacklist');
});

test('no px: correct severity flagged', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[0].severity, 'error');
});

test('no px: correct line number', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[0].line, 6);
});

test('no px: correct column number', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[0].column, 13);
});


/** function-parentheses-space-inside: never-single-line */
test('function-parentheses-space-inside rule flagged', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[1].rule, 'function-parentheses-space-inside');
});

test('function-parentheses-space-inside severity flagged', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[1].severity, 'error');
});

test('function-parentheses-space-inside line number', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[1].line, 2);
});

test('function-parentheses-space-inside column number', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[1].column, 15);
});


/** indentation: 'tab' */
test('indentation rule flagged', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[2].rule, 'indentation');
});

test('indentation severity flagged', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[2].severity, 'error');
});

test('indentation line number', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[2].line, 2);
});

test('indentation column number', async (t) => {
	const data = await Promise.resolve(result);
	t.is(data.results[0].warnings[2].column, 3);
});
