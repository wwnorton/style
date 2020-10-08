const test = require('ava');
const path = require('path');
const prettier = require('prettier');
const { ESLint } = require('eslint');
const fs = require('fs');

const prettierOptions = {
	arrowParens: "always",   // match AirBnb 8.4
	singleQuote: true,
	useTabs: true,
};

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

const validText = {
	js: prettier.format(fs.readFileSync(valid.js,'utf8'), prettierOptions),
	ts: prettier.format(fs.readFileSync(valid.ts,'utf8'), prettierOptions),
	jsx: prettier.format(fs.readFileSync(valid.jsx,'utf8'), prettierOptions),
	tsx: prettier.format(fs.readFileSync(valid.tsx,'utf8'), prettierOptions),
};

const invalidText = {
	js: prettier.format(fs.readFileSync(invalid.js,'utf8'), prettierOptions),
	ts: prettier.format(fs.readFileSync(invalid.ts,'utf8'), prettierOptions),
	jsx: prettier.format(fs.readFileSync(invalid.jsx,'utf8'), prettierOptions),
	tsx: prettier.format(fs.readFileSync(invalid.tsx,'utf8'), prettierOptions),
};

const eslint = new ESLint({
	useEslintrc: true,
	ignore: false,
});

let postPrettierResult = [];

let result;

const getPrettierReport = (file) => postPrettierResult.find(({ filePath }) => filePath === file);

const getReport = (file) => result.find(({ filePath }) => filePath === file);

const flagged = (messages, rule, severity = 2) => messages.some(
	({ ruleId, severity: ruleSeverity }) => ruleId === rule && ruleSeverity === severity,
);

test.before(async () => {
	const validTextKeys = [...Object.keys(validText)];
	const invalidTextKeys = [...Object.keys(invalidText)];

	await Promise.all(validTextKeys.map(async (key) => {
		const lintedCode = await eslint.lintText(validText[key], {filePath: `packages/eslint-config-norton/test/fixtures/valid.${key}`});
		postPrettierResult = postPrettierResult.concat(lintedCode);
	}));

	await Promise.all(invalidTextKeys.map(async (key) => {
		const lintedCode = await eslint.lintText(invalidText[key], {filePath: `packages/eslint-config-norton/test/fixtures/invalid.${key}`});
		postPrettierResult = postPrettierResult.concat(lintedCode);
	}));

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

test('js: valid file did not error or warn postPrettier', (t) => {
	const { errorCount, warningCount } = getPrettierReport(valid.js);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('js: using spaces instead of tabs triggers an error', (t) => {
	const { messages } = getReport(invalid.js);
	t.true(flagged(messages, 'indent'));
});

test('js: using spaces instead of tabs does not trigger an error post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.js);
	t.false(flagged(messages, 'indent'));
});

test('js: using unnecessary semicolons triggers an error', (t) => {
	const { messages } = getReport(invalid.js);
	t.true(flagged(messages, 'no-extra-semi'));
});

test('js: using unnecessary semicolons does not trigger an error post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.js);
	t.false(flagged(messages, 'no-extra-semi'));
});

test('js: missing whitespace after semicolon triggers an error', (t) => {
	const { messages } = getReport(invalid.js);
	t.true(flagged(messages, 'semi-spacing'));
});

test('js: missing whitespace after semicolon does not trigger an error post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.js);
	t.false(flagged(messages, 'semi-spacing'));
});

test('js: setting a semicolon at the beginning of the line triggers an error', (t) => {
	const { messages } = getReport(invalid.js);
	t.true(flagged(messages, 'semi-style'));
});

test('js: setting a semicolon at the beginning of the line does not trigger an error post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.js);
	t.false(flagged(messages, 'semi-style'));
});

test('js: omitting a semicolon triggers an error', (t) => {
	const { messages } = getReport(invalid.js);
	t.true(flagged(messages, 'semi'));
});

test('js: omitting a semicolon does not trigger an error post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.js);
	t.false(flagged(messages, 'semi'));
});


// TypeScript

test('ts: valid file did not error or warn', (t) => {
	const { errorCount, warningCount } = getReport(valid.ts);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('ts: valid file did not error or warn post Prettier', (t) => {
	const { errorCount, warningCount } = getPrettierReport(valid.ts);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('ts: expected JavaScript rules are triggered', (t) => {
	const { messages } = getReport(invalid.ts);
	t.true(flagged(messages, 'semi-spacing'));
	t.true(flagged(messages, 'semi-style'));
});

test('ts: expected no Javascript semi errors post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.ts);
	t.false(flagged(messages, 'semi-spacing'));
	t.false(flagged(messages, 'semi-style'));
});

test('ts: using spaces instead of tabs triggers an error', (t) => {
	const { messages } = getReport(invalid.ts);
	t.false(flagged(messages, 'indent'));
	t.true(flagged(messages, '@typescript-eslint/indent'));
});

test('ts: using spaces instead of tabs does not trigger an error post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.ts);
	t.false(flagged(messages, 'indent'));
	t.false(flagged(messages, '@typescript-eslint/indent'));
});

test('ts: omitting a semicolon triggers an error', (t) => {
	const { messages } = getReport(invalid.ts);
	t.false(flagged(messages, 'semi'));
	t.true(flagged(messages, '@typescript-eslint/semi'));
});

test('ts: omitting a semicolon triggers an error does not trigger an error post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.ts);
	t.false(flagged(messages, 'semi'));
	t.false(flagged(messages, '@typescript-eslint/semi'));
});

test('ts: using unnecessary semicolons triggers an error', (t) => {
	const { messages } = getReport(invalid.ts);
	t.false(flagged(messages, 'no-extra-semi'));
	t.true(flagged(messages, '@typescript-eslint/no-extra-semi'));
});

test('ts: using unnecessary semicolons does not trigger an error post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.ts);
	t.false(flagged(messages, 'no-extra-semi'));
	t.false(flagged(messages, '@typescript-eslint/no-extra-semi'));
});

test('ts: using default export triggers an error', (t) => {
	const { messages } = getReport(invalid.ts);
	t.false(flagged(messages, 'import/prefer-default-export'));
	t.true(flagged(messages, 'import/no-default-export'));
});


// React

test('jsx: valid file did not error or warn', (t) => {
	const { errorCount, warningCount } = getReport(valid.jsx);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('jsx: valid file did not error or warn post Prettier', (t) => {
	const { errorCount, warningCount } = getPrettierReport(valid.jsx);
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

test('jsx: expected JavaScript rules are not triggered post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.jsx);
	t.false(flagged(messages, 'indent'));
	t.false(flagged(messages, 'no-extra-semi'));
	t.false(flagged(messages, 'semi-spacing'));
	t.false(flagged(messages, 'semi-style'));
	t.false(flagged(messages, 'semi'));
});

test('jsx: using spaces instead of tabs for JSX triggers an error', (t) => {
	const { messages } = getReport(invalid.jsx);
	t.true(flagged(messages, 'react/jsx-indent'));
});

test('jsx: using spaces instead of tabs for JSX does not trigger an error post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.jsx);
	t.false(flagged(messages, 'react/jsx-indent'));
});

test('jsx: using spaces instead of tabs for JSX props triggers an error', (t) => {
	const { messages } = getReport(invalid.jsx);
	t.true(flagged(messages, 'react/jsx-indent-props'));
});

test('jsx: using spaces instead of tabs for JSX props does not trigger an error post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.jsx);
	t.false(flagged(messages, 'react/jsx-indent-props'));
});


// React + TypeScript

test('tsx: valid file did not error or warn', (t) => {
	const { errorCount, warningCount } = getReport(valid.tsx);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('tsx: valid file did not error or warn post Prettier', (t) => {
	const { errorCount, warningCount } = getPrettierReport(valid.tsx);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

test('tsx: expected JavaScript rules are triggered', (t) => {
	const { messages } = getReport(invalid.tsx);
	t.true(flagged(messages, 'semi-spacing'));
	t.true(flagged(messages, 'semi-style'));
});

test('tsx: expected JavaScript rules are not triggered post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.tsx);
	t.false(flagged(messages, 'semi-spacing'));
	t.false(flagged(messages, 'semi-style'));
});

test('tsx: expected TypeScript rules are triggered', (t) => {
	const { messages } = getReport(invalid.tsx);
	t.true(flagged(messages, '@typescript-eslint/semi'));
	t.true(flagged(messages, '@typescript-eslint/no-extra-semi'));
	t.true(flagged(messages, '@typescript-eslint/indent'));
});

test('tsx: expected TypeScript rules are not triggered post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.tsx);
	t.false(flagged(messages, '@typescript-eslint/semi'));
	t.false(flagged(messages, '@typescript-eslint/no-extra-semi'));
	t.false(flagged(messages, '@typescript-eslint/indent'));
});

test('tsx: expected React rules are triggered', (t) => {
	const { messages } = getReport(invalid.tsx);
	t.true(flagged(messages, 'react/jsx-indent-props'));
	t.true(flagged(messages, 'react/jsx-indent'));
});

test('tsx: expected React rules are not triggered post Prettier', (t) => {
	const { messages } = getPrettierReport(invalid.tsx);
	t.false(flagged(messages, 'react/jsx-indent-props'));
	t.false(flagged(messages, 'react/jsx-indent'));
});

test('tsx: using property assignment for React static properties triggers an error', (t) => {
	const { messages } = getReport(invalid.tsx);
	t.true(flagged(messages, 'react/static-property-placement'));
});

test('tsx: using default export triggers an error', (t) => {
	const { messages } = getReport(invalid.tsx);
	t.false(flagged(messages, 'import/prefer-default-export'));
	t.true(flagged(messages, 'import/no-default-export'));
});
