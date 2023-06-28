import fs from 'fs';
import path from 'path';
import { lint } from 'stylelint';
import { promisify } from 'util';
import { beforeAll, expect, test } from 'vitest';
import sassConfig from '../src/sass';
import cssConfig from '../src/css';

const readFile = promisify(fs.readFile);

const getWarnings = (res, rule) => Promise.resolve(res)
	.then((data) => data.results[0].warnings.filter((w) => w.rule === rule));

const rules = [
	'declaration-property-unit-disallowed-list',
	'function-parentheses-space-inside',
	'indentation',
	'max-empty-lines',
	'order/properties-order',
	'scss/at-else-empty-line-before',
	'max-nesting-depth',
];

const sass = { rules };
const css = {
	rules: [
		'declaration-property-unit-disallowed-list',
		'function-parentheses-space-inside',
		'indentation',
		'max-empty-lines',
		'order/properties-order',
	],
};

beforeAll(async () => {
	sass.invalid = await readFile(path.join(__dirname, 'fixtures/invalid.scss'), 'utf-8');
	css.invalid = await readFile(path.join(__dirname, 'fixtures/invalid.css'), 'utf-8');

	sass.valid = await readFile(path.join(__dirname, 'fixtures/valid.scss'), 'utf-8');
	css.valid = await readFile(path.join(__dirname, 'fixtures/valid.css'), 'utf-8');

	sass.invalidResult = await lint({ code: sass.invalid, config: sassConfig });
	css.invalidResult = await lint({ code: css.invalid, config: cssConfig });

	sass.validResult = await lint({ code: sass.valid, config: sassConfig });
	css.validResult = await lint({ code: css.valid, config: cssConfig });
});

rules.forEach((rule) => {
	if (sass.rules.includes(rule)) {
		test(`${rule}: flagged for invalid sass`, async () => {
			const [warning] = await getWarnings(sass.invalidResult, rule);
			expect(warning.rule).toBe(rule);
		});
	}

	if (css.rules.includes(rule)) {
		test(`${rule}: flagged for invalid css`, async () => {
			const [warning] = await getWarnings(css.invalidResult, rule);
			expect(warning.rule).toBe(rule);
		});
	}
});

test('valid sass did not error', () => {
	const { errored } = sass.validResult;
	expect(errored).toBeFalsy();
});

test('valid sass flags no warnings', () => {
	const { results } = sass.validResult;
	expect(results[0].warnings.length).toBe(0);
});

test('valid css did not error', () => {
	const { errored } = css.validResult;
	expect(errored).toBeFalsy();
});

test('valid css flags no warnings', () => {
	const { results } = css.validResult;
	expect(results[0].warnings.length).toBe(0);
});
