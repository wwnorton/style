import path from 'path';
import { expect, test } from 'vitest';
import { eslint } from './helpers';

const valid = {
	js: path.join(__dirname, 'fixtures/valid-js.js'),
	jsx: path.join(__dirname, 'fixtures/valid-react.jsx'),
	ts: path.join(__dirname, 'fixtures/valid-ts.ts'),
	tsx: path.join(__dirname, 'fixtures/valid-tsreact.tsx'),
};

// JavaScript

// eslint-disable-next-line no-script-url
test('javascript: no errors or warnings', async () => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.js);
	expect(errorCount).toBe(0);
	expect(warningCount).toBe(0);
});

// React

test('javascriptreact: no errors or warnings', async () => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.jsx);
	expect(errorCount).toBe(0);
	expect(warningCount).toBe(0);
});

// TypeScript

test('typescript: no errors or warnings', async () => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.ts);
	expect(errorCount).toBe(0);
	expect(warningCount).toBe(0);
});

// React + TypeScript

test('typescriptreact: no errors or warnings', async () => {
	const [{ errorCount, warningCount }] = await eslint.lintFiles(valid.tsx);
	expect(errorCount).toBe(0);
	expect(warningCount).toBe(0);
});
