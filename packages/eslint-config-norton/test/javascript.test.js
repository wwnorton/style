import { beforeAll, expect, test } from 'vitest';
import path from 'path';
import { eslint, createChecker } from './helpers';

const FIXTURE = path.join(__dirname, 'fixtures/invalid-js.js');

let checker;

beforeAll(async () => {
	checker = createChecker(await eslint.lintFiles(FIXTURE));
});

test('indent: using spaces instead of tabs triggers an error', () => {
	expect(checker(FIXTURE, 'indent')).toBe(true);
});
