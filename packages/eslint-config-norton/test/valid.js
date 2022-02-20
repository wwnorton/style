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

test('js(valid file): no errors or warnings', async (t) => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.js);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

// React

test('jsx(valid file): no errors or warnings', async (t) => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.jsx);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

// TypeScript

test('ts(valid file): no errors or warnings', async (t) => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.ts);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});

// React + TypeScript

test('tsx(valid file): no errors or warnings', async (t) => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.tsx);
	t.is(errorCount, 0);
	t.is(warningCount, 0);
});
