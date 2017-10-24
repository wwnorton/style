import test from 'ava';
import { invalid, lint, getWarnings } from './helpers';

const rule = 'indentation';
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
	t.is(warnings[0].line, 2);
});

test(`${rule}: correct column number`, async (t) => {
	const warnings = await getWarnings(result, rule);
	t.is(warnings[0].column, 3);
});
