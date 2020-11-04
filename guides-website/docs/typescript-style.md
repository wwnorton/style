---
slug: typescript
title: Typescript Style Guide
sidebar_label: TypeScript
---

**WWNorton TypeScript Style Guide**

[Typescript Lint Setup](https://www.notion.so/Typescript-Lint-Setup-06cef0036d0b4887b4e07b57def202e4)

## Official Typescript Documentation

[Familiar With TypeScript already?](https://www.typescriptlang.org/docs/home.html)

[The starting point for learning TypeScript](https://www.staging-typescript.org/docs/home)

[TypeScript Best Practices - Semicolons and Spacing](https://levelup.gitconnected.com/typescript-best-practices-semicolons-and-spacing-5be9c5963604)

## General

- **No Unused Expressions**

> We shouldn't have unused expressions in our code. If we have them, we should remove them.

```tsx
// Bad 👎
a + b;

// Good 👍
let add = a + b;
```

- **Filename**

Name files with `camelCase`.

> Reason: Conventional across many JS teams.

```
accordion.tsx
myControl.tsx
stringUtils.ts
map.ts 
```

## Variables and Function

- **Use `camelCase` for variable and function names**

> Reason: Conventional JavaScript

```tsx
// Bad 👎
var FooVar;
function BarFunc() { }

// Good 👍
var fooVar;
function barFunc() { }
```

- **No Unused Variables**

@typescript-eslint/no-unused-vars

> Likewise, if we have unused variables, then we should remove them.

```tsx
// Bad 👎
var num1 = 10;
var num2 = 7;

var result = num1 + 7;

// Good 👍
var num1 = 10;

var result = num1 + 7;

// Good 👍
var num1 = 10;
var num2 = 7;

var result = num1 + num2;
```

- **Don’t Use Variables Before they’re Defined**

> With variables that are declared with var we can reference the variable before they’re defined, but the value will be undefined. This is because the variable is hoisted. let and const solve this problem since they aren’t hoisted. Therefore, we should use let or const variables. This way, if we reference those variables, we’ll get an error.

```tsx
// Bad 👎
var hoisted;
console.log(hoisted); // will be undefined;

// Good 👍
let notHoisted;
const alsoNotHoisted;

console.log(notHoisted); // Will throw an error (which is what we want in this case);
console.log(alsoNotHoisted); // Will also throw an error (which is what we want in this case);
```

- **Replace Magic Numbers with Named Constants**

@typescript-eslint/prefer-as-const

> If we have numbers that are used as constants repeatedly but aren’t assigned to a constant, then we should assign it to one. This way, we can change it once and the value will be reflected everywhere. Also, named constants tell us the meaning of the number. Therefore, instead of writing:

```tsx
// Bad 👎
enum Foo { bar = 1 }

// Good 👍
const NUMBER_OF_BARS = 1;
enum Foo { bar = NUMBER_OF_BARS }
```

- **Don’t Use async if await isn’t Used Inside the Function**

@typescript-eslint/require-await

> We should use `async` functions only if we have to `await` something inside it.

For instance, if we have something like:

```tsx
// Bad 👎
const foo = async () => "bar";

// Good 👍
const foo = async () => {
	const url = "some.domain.com";
	let response = await fetch(url, {
      method: 'GET'
  });
}
```

then we should use a normal function.

- **Return Awaited Values Consistently**

> We should not have `return` and `await` on the same line since the promises may not have resolved yet.

> Instead, put them on separate lines. The only exception to this is that we can put `return` and `await` on the same line inside a `try` block to catch errors from another promised-based function

```tsx
// Bad 👎
async function foo() {
  return await bar();
}

// Good 👍
async function foo() {
  const val = await bar();
  return val;
}

// Good 👍
async function foo() {
  try {
    return await bar();
  } catch (error) {}
}
```

## Array

- **Annotate arrays as `foos:Foo[]` instead of `foos:Array<Foo>`.**

> Reasons: Its easier to read. Its used by the TypeScript team. Makes easier to know something is an array as the mind is trained to detect [].

```tsx
// Bad 👎
foos:Array<Foo>;

// Good 👍 
foos:Foo[];
```

## Strings

- **Prefer single quotes (`'`) unless escaping.**

> Reason: More JavaScript teams do this (e.g. airbnb, standard, npm, node, google/angular, facebook/react). Its easier to type (no shift needed on most keyboards). Prettier team recommends single quotes as well

> Double quotes are not without merit: Allows easier copy paste of objects into JSON. Allows people to use other languages to work without changing their quote character. Allows you to use apostrophes e.g. He's not going.. But I'd rather not deviate from where the JS Community is fairly decided.

```tsx
// bad 👎
var foo = "bad";

// good 👍
var foo = 'bar';
```

- **When you can't use double quotes, try using back ticks (\`).**

@typescript-eslint/restrict-template-expressions

> Reason: These generally represent the intent of complex enough strings.

```tsx
// good 👍
var foo = `this foo has a dynamic ${bar}`;
```

- **Have Consistent Use of Backticks, Double Quotes or Single Quotes**

We should use backticks or quotes in a consistent manner for declaring strings. Better yet, we should use backticks since they’ll create template strings, which are more flexible. They allow expressions to be embedded in it.

## Class

- **Use `PascalCase` for class names.**

> Reason: This is actually fairly conventional in standard JavaScript.

```tsx
// Bad 👎
class fooBoo { }

// Good 👍
class FooBoo { }
```

- **Use `camelCase` of class members and methods**

> Reason: Naturally follows from variable and function naming convention.

```tsx
// Bad 👎
class Foo {
    BarVar: number;
    BazFunc() { }
}

// Good 👍
class Foo {
    barVar: number;
    bazFunc() { }
}
```

- **No Useless Constructors**

@typescript-eslint/no-useless-constructor

> We shouldn’t have useless constructors.

```tsx
// Bad 👎
class A {
  constructor () {
  }
}

// Bad 👎
class B extends A {
  constructor (value) {
    super(value);
  }
}
```

They’re both redundant so they should be removed.

## Interface

- U**se `PascalCase` for name.**

> Reason: Similar to class

```tsx
// Bad 👎
interface themeProps {
	color: string;
}

// Good 👍
interface ThemeProps {
	color: string;
}
```

- **Use `camelCase` for members.**

> Reason: Similar to class

```tsx
// Bad 👎
interface ColorProps {
	FirstColor: string;
	second-color: string;
}

// Good 👍
interface ColorProps {
	firstColor: string;
	secondColor: string;
}
```

- **Don't prefix with `I`**

> Reason: Unconventional. lib.d.ts defines important interfaces without an I (e.g. Window, Document etc).

```tsx
// Bad 👎
interface IFoo {
}

// Good 👍
interface Foo {
}
```

## Type

- **Use `PascalCase` for name.**

> Reason: Similar to class

```tsx
// Bad 👎
type infoBaseProps = 'htmlFor' | 'className' | 'children' | 'id';

// Good 👍
type InfoBaseProps = 'htmlFor' | 'className' | 'children' | 'id';
```

- **Use `camelCase` for members.**

> Reason: Similar to class

```tsx
// Bad 👎
type Animal = {
  animalrace: string
}

// Good 👍
type Animal = {
  animalRace: string
}
```

## Type vs. Interface

- **Use `type` when you *might* need a union or intersection:**

```tsx
// Good 👍
type Foo = number | { someProperty: number }
```

- **Use `interface` when you want `extends` or `implements` e.g**

```tsx
// Good 👍
interface Foo {
  foo: string;
}

interface FooBar extends Foo {
  bar: string;
}

class X implements FooBar {
  foo: string;
  bar: string;
}
```

## Namespace

- **Use `PascalCase` for names**

> Reason: Convention followed by the TypeScript team. Namespaces are effectively just a class with static members. Class names are PascalCase => Namespace names are PascalCase

```tsx
// Bad 👎
namespace fooBaz {
}

// Good 👍
namespace FooBaz {
}
```

# Enum

- **Use `PascalCase` for enum names**

> Reason: Similar to Class. Is a Type.

```tsx
// Bad 👎
enum colorOne {
}

// Good 👍
enum ColorOne {
}
```

- **Use `PascalCase` for enum member**

> Reason: Convention followed by TypeScript team i.e. the language creators e.g SyntaxKind.StringLiteral. Also helps with translation (code generation) of other languages into TypeScript

```tsx
// Bad 👎
enum Color {
    redHue
}

// Good 👍
enum Color {
    RedHue
}
```

## Null vs. Undefined

- **Prefer not to use either for explicit unavailability**

> Reason: these values are commonly used to keep a consistent structure between values. In TypeScript you use types to denote the structure

```tsx
// Bad 👎
let foo = { x:123, y:undefined };

// Good 👍
let foo:{ x:number, y?:number } = { x:123 };

```

- **Use `undefined` in general (do consider returning an object like `{valid:boolean,value?:Foo}` instead)**

```tsx
// Bad 👎
return null;

// Good 👍
return undefined;

```

- **Use `null` where its a part of the API or conventional**

> Reason: It is conventional in Node.js e.g. error is null for NodeBack style callbacks.

```tsx
// Bad 👎
cb(undefined)

// Good 👍
cb(null)

```

- **Use *truthy* check for objects being `null` or `undefined`**

```tsx
// Bad 👎
if (error === null)

// Good 👍
if (error)

```

- **Use `== null` / `!= null` (not `===` / `!==`) to check for `null` / `undefined` on primitives as it works for both `null`/`undefined` but not other falsy values (like `''`,`0`,`false`) e.g.**

```tsx
// Bad 👎
if (error !== null) // does not rule out undefined

// Good 👍
if (error != null) // rules out both null and undefined

```

## Tabs vs. Spaces

- **Use tabs over spaces.**

> Reason: Use tabs for indenting your code. With tabs users can choose their desired width. This has positive implications for accessibility and screenreaders, putting people in control of how they want to view the code.

```tsx
// bad 👎
function foo() {
∙∙let name;
}

// bad 👎
function bar() {
∙let name;
}

// good 👍
function baz() {
∙ let name;
}
```

## Semicolons

- **Use semicolons.**

> Reasons: The usage of semicolons is a core value of our community. Consider the points of the opposition, but be a traditionalist when it comes to abusing error correction mechanisms for cheap syntactic pleasures. Explicit semicolons helps language formatting tools give consistent results. Missing ASI (automatic semicolon insertion) can trip new devs.

```tsx
// Bad 👎
let x = 5

// Good 👍
let x = 5;
```

We should put in semicolons in our code instead of letting the JavaScript interpreter add them for us in unexpected places.

- **Remove Useless Semicolons**

@typescript-eslint/no-extra-semi

> We should remove duplicate semicolons in our code. We only need one semicolon at the end of a statement.

```tsx
// Bad 👎
let x = 5;;

// Good 👍
let x = 5;
```

- **Require Semicolons Instead of Automatic Semicolon Insertion**

> Instead of letting the Javascript interpreter put in semicolons for us, we should put them in ourselves.

```tsx
// Bad 👎
function returnObject() {
	return //<-----semi colon will be inserted causing an error.
	{
		key: value
	};
}

// Good 👍
function returnObject() {
	return {
		key: value
	};
}
```

## Import / Export

- **Avoid export default**

> Avoid `export default` in TypeScript because of the maintainability and <abbr title="Developer experience">DX</abbr> issues outlined in [Typescript Deep Dive - Avoid Export Default](https://basarat.gitbook.io/typescript/main-1/defaultisbad).

Example: 

```ts
// foo.ts
class Foo {
}
export default Foo;
```

```ts
// bar.ts
import Foo from "./foo";
```
- If you refactor `Foo` in `foo.ts` it will not rename it in `bar.ts`.
- If you end up needing to export more stuff from `foo.ts` (which is what many of your files will have) then you have to juggle the import syntax

```tsx
// Bad 👎
// foo.ts
export default class Foo {
  return 
  {
    key: value
  };
}

// bar.ts
import Foo from './foo';


// Good 👍
// foo.ts
export class Foo {
	return {
		key: value
	};
}

// bar.ts
import { Foo } from "./foo";

```
