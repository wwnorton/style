const test = require('ava');
const path = require('path');
const { ESLint } = require('eslint');

const eslint = new ESLint({
	useEslintrc: true,
	ignore: false,
});

const valid = {
	js: path.join(__dirname, 'fixtures/valid-js.js'),
	jsx: path.join(__dirname, 'fixtures/valid-react.jsx'),
	ts: path.join(__dirname, 'fixtures/valid-ts.ts'),
	tsx: path.join(__dirname, 'fixtures/valid-tsreact.tsx'),
};

const invalid = {
	js: path.join(__dirname, 'fixtures/invalid-js.js'),
	jsx: path.join(__dirname, 'fixtures/invalid-react.jsx'),
	ts: path.join(__dirname, 'fixtures/invalid-ts.ts'),
	tsx: path.join(__dirname, 'fixtures/invalid-tsreact.tsx'),
};

/** @type {ESLint.LintResult[]} */
let result = [];

/**
 * @param {string} file
 * @returns {ESLint.LintResult}
 */
const getReport = (file) => result.find(({ filePath }) => filePath === file);

/**
 * Check if a rule was flagged on a specified file.
 * @param {string} file
 * @param {string} rule
 * @param {import('eslint').Linter.Severity} severity
 * @returns {boolean}
 */
const flagged = (file, rule, severity = 2) => getReport(file).messages.some(
	({ ruleId, severity: ruleSeverity }) => ruleId === rule && ruleSeverity === severity,
);

test.before(async () => {
	result = await eslint.lintFiles([
		...Object.values(valid),
		...Object.values(invalid),
	]);
});

// JavaScript

test('js(valid file): no errors or warnings', (t) => {
	const { errorCount, warningCount } = getReport(valid.js);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('js(indent): using spaces instead of tabs triggers an error', (t) => {
	t.true(flagged(invalid.js, 'indent'));
});

// React

test('jsx(valid file): no errors or warnings', (t) => {
	const { errorCount, warningCount } = getReport(valid.jsx);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('jsx(react/jsx-indent): using spaces instead of tabs in JSX triggers an error', (t) => {
	t.true(flagged(invalid.jsx, 'react/jsx-indent'));
});

test('jsx(react/jsx-indent-props): using spaces instead of tabs in an indented prop triggers an error', (t) => {
	t.true(flagged(invalid.jsx, 'react/jsx-indent-props'));
});

// TypeScript

test('ts(valid file): no errors or warnings', (t) => {
	const { errorCount, warningCount } = getReport(valid.ts);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('ts(@typescript-eslint/indent): using spaces instead of tabs triggers an error', (t) => {
	t.false(flagged(invalid.ts, 'no-tabs'));
	t.false(flagged(invalid.ts, 'indent'));
	t.true(flagged(invalid.ts, '@typescript-eslint/indent'));
});

test('ts(import/no-default-export): using default export triggers an error', (t) => {
	t.false(flagged(invalid.ts, 'import/prefer-default-export'));
	t.true(flagged(invalid.ts, 'import/no-default-export'));
});

test('ts(lines-between-class-members): sequential class member blocks trigger an error', (t) => {
	t.true(flagged(invalid.ts, 'lines-between-class-members'));
	t.false(flagged(invalid.ts, '@typescript-eslint/lines-between-class-members'));
});

// React + TypeScript

test('tsx(valid file): no errors or warnings', (t) => {
	const { errorCount, warningCount } = getReport(valid.tsx);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('tsx(react/jsx-indent): using spaces instead of tabs in JSX triggers an error', (t) => {
	t.false(flagged(invalid.tsx, 'no-tabs'));
	t.false(flagged(invalid.tsx, 'indent'));
	t.true(flagged(invalid.tsx, '@typescript-eslint/indent'));
	t.true(flagged(invalid.tsx, 'react/jsx-indent'));
});

test('tsx(import/no-default-export): using default export triggers an error', (t) => {
	t.false(flagged(invalid.tsx, 'import/prefer-default-export'));
	t.true(flagged(invalid.tsx, 'import/no-default-export'));
});

test('tsx(lines-between-class-members): sequential class member blocks trigger an error', (t) => {
	t.true(flagged(invalid.tsx, 'lines-between-class-members'));
	t.false(flagged(invalid.ts, '@typescript-eslint/lines-between-class-members'));
});

test('tsx(react/jsx-indent-props): using spaces instead of tabs in an indented prop triggers an error', (t) => {
	t.true(flagged(invalid.tsx, 'react/jsx-indent-props'));
});

test('tsx(react/static-property-placement): external static class properties triggers an error', (t) => {
	t.true(flagged(invalid.tsx, 'react/static-property-placement'));
});
