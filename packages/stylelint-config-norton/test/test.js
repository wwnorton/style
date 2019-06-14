import fs from 'fs';
import test from 'ava';
import path from 'path';
import { promisify } from 'util';
import { lint, getWarnings } from './helpers';

const readFile = promisify(fs.readFile);

const rules = [
	'declaration-property-unit-blacklist',
	'function-parentheses-space-inside',
	'indentation',
	'max-empty-lines',
	'order/properties-order',
	'scss/at-else-empty-line-before',
];

const css = {
	rules: [
		'declaration-property-unit-blacklist',
		'function-parentheses-space-inside',
		'indentation',
		'max-empty-lines',
		'order/properties-order',
	],
};

const sass = { rules };

test.before(async () => {
	sass.invalid = await readFile(path.resolve('./test/fixtures/invalid.scss'), 'utf-8');
	css.invalid = await readFile(path.resolve('./test/fixtures/invalid.css'), 'utf-8');

	sass.valid = await readFile(path.resolve('./test/fixtures/valid.scss'), 'utf-8');
	css.valid = await readFile(path.resolve('./test/fixtures/valid.css'), 'utf-8');

	sass.invalidResult = await lint(sass.invalid);
	css.invalidResult = await lint(css.invalid, true);

	sass.validResult = await lint(sass.valid);
	css.validResult = await lint(css.valid, true);
});

rules.forEach((rule) => {
	if (sass.rules.includes(rule)) {
		test(`${rule}: flagged for invalid sass`, async (t) => {
			const [warning] = await getWarnings(sass.invalidResult, rule);
			t.snapshot(warning);
			t.is(warning.rule, rule);
		});
	}

	if (css.rules.includes(rule)) {
		test(`${rule}: flagged for invalid css`, async (t) => {
			const [warning] = await getWarnings(css.invalidResult, rule);
			t.snapshot(warning);
			t.is(warning.rule, rule);
		});
	}
});

test('valid sass did not error', (t) => {
	const { errored } = sass.validResult;
	t.falsy(errored);
});

test('valid sass flags no warnings', (t) => {
	const { results } = sass.validResult;
	t.is(results[0].warnings.length, 0);
});

test('valid css did not error', (t) => {
	const { errored } = css.validResult;
	t.falsy(errored);
});

test('valid css flags no warnings', (t) => {
	const { results } = css.validResult;
	t.is(results[0].warnings.length, 0);
});
