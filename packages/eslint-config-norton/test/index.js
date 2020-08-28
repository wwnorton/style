const test = require('ava');
const path = require('path');
const { ESLint } = require('eslint');

const valid = {
	js: path.join(__dirname, 'fixtures/valid.js'),
	ts: path.join(__dirname, 'fixtures/valid.ts'),
	jsx: path.join(__dirname, 'fixtures/valid.jsx'),
	tsx: path.join(__dirname, 'fixtures/valid.tsx'),
};
const invalid = {
	js: path.join(__dirname, 'fixtures/invalid.js'),
	ts: path.join(__dirname, 'fixtures/invalid.ts'),
	jsx: path.join(__dirname, 'fixtures/invalid.jsx'),
	tsx: path.join(__dirname, 'fixtures/invalid.tsx'),
};

const eslint = new ESLint({
	useEslintrc: true,
	ignore: false,
});

let result;

const getReport = (file) => result.find(({ filePath }) => filePath === file);

const flagged = (messages, rule, severity = 2) => messages.some(
	({ ruleId, severity: ruleSeverity }) => ruleId === rule && ruleSeverity === severity,
);

test.before(async () => {
	result = await eslint.lintFiles([
		...Object.values(valid),
		...Object.values(invalid),
	]);
});


// JavaScript

test('js: valid file did not error or warn', (t) => {
	const { errorCount, warningCount } = getReport(valid.js);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('js: using spaces instead of tabs triggers an error', (t) => {
	const { messages } = getReport(invalid.js);
	t.true(flagged(messages, 'indent'));
});

test('js: using unnecessary semicolons triggers an error', (t) => {
	const { messages } = getReport(invalid.js);
	t.true(flagged(messages, 'no-extra-semi'));
});

test('js: missing whitespace after semicolon triggers an error', (t) => {
	const { messages } = getReport(invalid.js);
	t.true(flagged(messages, 'semi-spacing'));
});

test('js: setting a semicolon at the beginning of the line triggers an error', (t) => {
	const { messages } = getReport(invalid.js);
	t.true(flagged(messages, 'semi-style'));
});

test('js: omitting a semicolon triggers an error', (t) => {
	const { messages } = getReport(invalid.js);
	t.true(flagged(messages, 'semi'));
});


// TypeScript

test('ts: valid file did not error or warn', (t) => {
	const { errorCount, warningCount } = getReport(valid.ts);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('ts: expected JavaScript rules are triggered', (t) => {
	const { messages } = getReport(invalid.ts);
	t.true(flagged(messages, 'semi-spacing'));
	t.true(flagged(messages, 'semi-style'));
});

test('ts: using spaces instead of tabs triggers an error', (t) => {
	const { messages } = getReport(invalid.ts);
	t.false(flagged(messages, 'indent'));
	t.true(flagged(messages, '@typescript-eslint/indent'));
});

test('ts: omitting a semicolon triggers an error', (t) => {
	const { messages } = getReport(invalid.ts);
	t.false(flagged(messages, 'semi'));
	t.true(flagged(messages, '@typescript-eslint/semi'));
});

test('ts: using unnecessary semicolons triggers an error', (t) => {
	const { messages } = getReport(invalid.ts);
	t.false(flagged(messages, 'no-extra-semi'));
	t.true(flagged(messages, '@typescript-eslint/no-extra-semi'));
});


// React

test('jsx: valid file did not error or warn', (t) => {
	const { errorCount, warningCount } = getReport(valid.jsx);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('jsx: expected JavaScript rules are triggered', (t) => {
	const { messages } = getReport(invalid.jsx);
	t.true(flagged(messages, 'indent'));
	t.true(flagged(messages, 'no-extra-semi'));
	t.true(flagged(messages, 'semi-spacing'));
	t.true(flagged(messages, 'semi-style'));
	t.true(flagged(messages, 'semi'));
});

test('jsx: using spaces instead of tabs for JSX triggers an error', (t) => {
	const { messages } = getReport(invalid.jsx);
	t.true(flagged(messages, 'react/jsx-indent'));
});

test('jsx: using spaces instead of tabs for JSX props triggers an error', (t) => {
	const { messages } = getReport(invalid.jsx);
	t.true(flagged(messages, 'react/jsx-indent-props'));
});


// React + TypeScript

test('tsx: valid file did not error or warn', (t) => {
	const { errorCount, warningCount } = getReport(valid.tsx);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('tsx: expected JavaScript rules are triggered', (t) => {
	const { messages } = getReport(invalid.tsx);
	t.true(flagged(messages, 'semi-spacing'));
	t.true(flagged(messages, 'semi-style'));
});

test('tsx: expected TypeScript rules are triggered', (t) => {
	const { messages } = getReport(invalid.tsx);
	t.true(flagged(messages, '@typescript-eslint/semi'));
	t.true(flagged(messages, '@typescript-eslint/no-extra-semi'));
	t.true(flagged(messages, '@typescript-eslint/indent'));
});

test('tsx: expected React rules are triggered', (t) => {
	const { messages } = getReport(invalid.tsx);
	t.true(flagged(messages, 'react/jsx-indent-props'));
	t.true(flagged(messages, 'react/jsx-indent'));
});

test('tsx: using property assignment for React static properties triggers an error', (t) => {
	const { messages } = getReport(invalid.tsx);
	t.true(flagged(messages, 'react/static-property-placement'));
});
