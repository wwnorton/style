import path from 'path';
import { beforeAll, expect, test } from 'vitest';
import { eslint, createChecker } from './helpers';

const FIXTURE = path.join(__dirname, 'fixtures/invalid-react.jsx');

let checker;

beforeAll(async () => {
	checker = createChecker(await eslint.lintFiles(FIXTURE));
});

test('react/jsx-indent: using spaces instead of tabs in JSX triggers an error', () => {
	expect(checker(FIXTURE, 'react/jsx-indent')).toBe(true);
});

test('react/jsx-indent-props: using spaces instead of tabs in an indented prop triggers an error', () => {
	expect(checker(FIXTURE, 'react/jsx-indent-props')).toBe(true);
});
