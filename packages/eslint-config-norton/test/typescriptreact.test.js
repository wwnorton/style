import path from 'path';
import { beforeAll, expect, test } from 'vitest';
import { eslint, createChecker } from './helpers';

const FIXTURE = path.join(__dirname, 'fixtures/invalid-tsreact.tsx');

let checker;

beforeAll(async () => {
	checker = createChecker(await eslint.lintFiles(FIXTURE));
});

test('react/jsx-indent: using spaces instead of tabs in JSX triggers an error', () => {
	expect(checker(FIXTURE, 'no-tabs')).toBe(false);
	expect(checker(FIXTURE, 'indent')).toBe(false);
	expect(checker(FIXTURE, '@typescript-eslint/indent')).toBe(true);
	expect(checker(FIXTURE, 'react/jsx-indent')).toBe(true);
});

test('import/no-default-export: using default export triggers an error', () => {
	expect(checker(FIXTURE, 'import/prefer-default-export')).toBe(false);
	expect(checker(FIXTURE, 'import/no-default-export')).toBe(true);
});

test('lines-between-class-members: sequential class member blocks trigger an error', () => {
	expect(checker(FIXTURE, 'lines-between-class-members')).toBe(true);
	expect(checker(FIXTURE, '@typescript-eslint/lines-between-class-members')).toBe(false);
});

test('react/jsx-indent-props: using spaces instead of tabs in an indented prop triggers an error', () => {
	expect(checker(FIXTURE, 'react/jsx-indent-props')).toBe(true);
});

test('react/static-property-placement: external static class properties triggers an error', () => {
	expect(checker(FIXTURE, 'react/static-property-placement')).toBe(true);
});
