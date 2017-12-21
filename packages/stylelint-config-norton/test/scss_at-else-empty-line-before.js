import test from 'ava';
import { invalid, lint, getWarnings } from './helpers';

const rule = 'scss/at-else-empty-line-before';
let result;

test.beforeEach(() => {
	result = lint(invalid);
});

test(`${rule}: rule flagged`, async (t) => {
	const warnings = await getWarnings(result, rule);
	t.is(warnings[0].rule, rule);
});

test(`${rule}: correct severity flagged`, async (t) => {
	const warnings = await getWarnings(result, rule);
	t.is(warnings[0].severity, 'error');
});

test(`${rule}: correct line number`, async (t) => {
	const warnings = await getWarnings(result, rule);
	t.is(warnings[0].line, 16);
});

test(`${rule}: correct column number`, async (t) => {
	const warnings = await getWarnings(result, rule);
	t.is(warnings[0].column, 2);
});
