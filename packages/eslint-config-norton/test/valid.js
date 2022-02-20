/** @type {import('ava').TestFn} */
const test = require('ava');	// eslint-disable-line import/no-unresolved
const path = require('path');
const { eslint } = require('./helpers');

const valid = {
	js: path.join(__dirname, 'fixtures/valid-js.js'),
	jsx: path.join(__dirname, 'fixtures/valid-react.jsx'),
	ts: path.join(__dirname, 'fixtures/valid-ts.ts'),
	tsx: path.join(__dirname, 'fixtures/valid-tsreact.tsx'),
};

// JavaScript

// eslint-disable-next-line no-script-url
test('javascript: no errors or warnings', async (t) => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.js);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

// React

test('javascriptreact: no errors or warnings', async (t) => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.jsx);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

// TypeScript

test('typescript: no errors or warnings', async (t) => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.ts);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

// React + TypeScript

test('typescriptreact: no errors or warnings', async (t) => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.tsx);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});
