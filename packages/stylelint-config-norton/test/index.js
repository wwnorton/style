const fs = require('fs');
/* eslint-disable-next-line import/no-unresolved */
const test = require('ava');
const path = require('path');
const { lint } = require('stylelint');
const { promisify } = require('util');
const sassConfig = require('../src/sass');
const cssConfig = require('../src/css');

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

test.before(async () => {
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
		test(`${rule}: flagged for invalid sass`, async (t) => {
			const [warning] = await getWarnings(sass.invalidResult, rule);
			t.is(warning.rule, rule);
		});
	}

	if (css.rules.includes(rule)) {
		test(`${rule}: flagged for invalid css`, async (t) => {
			const [warning] = await getWarnings(css.invalidResult, rule);
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
