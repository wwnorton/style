import test from 'ava';
import { invalid, lint, getWarnings } from './helpers';

const rule = 'function-parentheses-space-inside';
let result;

test.beforeEach(() => {
	result = lint(invalid);
});

test(`${rule}: rule flagged`, async (t) => {
	const warning = await getWarnings(result, rule);
	t.is(warning.rule, rule);
});

test(`${rule}: correct severity flagged`, async (t) => {
	const warning = await getWarnings(result, rule);
	t.is(warning.severity, 'error');
});

test(`${rule}: correct line number`, async (t) => {
	const warning = await getWarnings(result, rule);
	t.is(warning.line, 2);
});

test(`${rule}: correct column number`, async (t) => {
	const warning = await getWarnings(result, rule);
	t.is(warning.column, 15);
});
