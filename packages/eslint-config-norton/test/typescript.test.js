import path from 'path';
import { beforeAll, expect, test } from 'vitest';
import { eslint, createChecker } from './helpers';

const FIXTURE = path.join(__dirname, 'fixtures/invalid-ts.ts');

let checker;

beforeAll(async () => {
	checker = createChecker(await eslint.lintFiles(FIXTURE));
});

test('@typescript-eslint/indent: using spaces instead of tabs triggers an error', () => {
	expect(checker(FIXTURE, 'no-tabs')).toBe(false);
	expect(checker(FIXTURE, 'indent')).toBe(false);
	expect(checker(FIXTURE, '@typescript-eslint/indent')).toBe(true);
});

test('import/no-default-export: using default export triggers an error', () => {
	expect(checker(FIXTURE, 'import/prefer-default-export')).toBe(false);
	expect(checker(FIXTURE, 'import/no-default-export')).toBe(true);
});

test('lines-between-class-members: sequential class member blocks trigger an error', () => {
	expect(checker(FIXTURE, 'lines-between-class-members')).toBe(true);
	expect(checker(FIXTURE, '@typescript-eslint/lines-between-class-members')).toBe(false);
});
