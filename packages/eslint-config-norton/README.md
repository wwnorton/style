# eslint-config-norton

![npm](https://img.shields.io/npm/v/eslint-config-norton)

> The official W. W. Norton ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html), based on [Airbnb](https://github.com/airbnb/javascript) but with support for TypeScript.

## Installation

It is highly recommend to use npm v7+, which [will install peer dependencies for you](https://github.blog/2021-02-02-npm-7-is-now-generally-available/).
Earlier versions of npm will require you to install peer dependencies yourself.

```sh
npm install eslint-config-norton
```

## Usage

The default config provides rules for JavaScript and TypeScript.

```js
extends: [
  'norton',
],
```

To also use React rules, extend `norton/react` instead.

```js
extends: [
  'norton/react',
],
```

## TypeScript support

Both [the default entrypoint](./index.js) and [the React entrypoint](./react.js) provide support for TypeScript through [overrides](https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work) that use both [the officially recommended configs](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#recommended-configs) (including `recommended-requiring-type-checking`) and [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript).
This means that only `.ts(x)?` files will use the TypeScript rules, while `.js(x)?` files will use the JavaScript rules, allowing for mixed TypeScript/JavaScript codebases.
This is helpful when you want to lint your entire TypeScript codebase but some files have to be JavaScript, such as configs (e.g., `docusaurus.config.js`, `.stylelintrc.js`).

## Rules

This configuration extends [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), [the officially recommended configs](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#recommended-configs), and the unofficial [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) (for TypeScript rules), overriding only a small handful of rules from those configs.

### Tabs instead of spaces

This is done purely to promote more accessible and inclusive code.
Spaces do not allow individual developers to set the visual appearance of indents in their IDE, whereas tabs do.

See https://alexandersandberg.com/tabs-for-accessibility/ for further explanation of why this is helpful for code accessibility.

#### Related rules

- [indent](https://eslint.org/docs/rules/indent)
- [no-tabs](https://eslint.org/docs/rules/no-tabs)
- [react/jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)
- [react/jsx-indent-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md)
- [@typescript-eslint/indent](https://typescript-eslint.io/rules/indent/)

### Avoid default exports (TypeScript only)

There are a handful of reasons for this, all of which are explained quite well in https://basarat.gitbook.io/typescript/main-1/defaultisbad.

> **Note**: [export default is preferred in JavaScript](https://github.com/airbnb/javascript#modules--prefer-default-export).
This is the exact opposite of the TypeScript rule.

```ts
// bad
export default class Foo {}

// good
export class Foo {}
```

#### Related rules

- [import/prefer-default-export](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md)
- [import/no-default-export](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md)

### Allow sequential single-line class fields (TypeScript only)

Since TypeScript supports [class field declarations](https://www.typescriptlang.org/docs/handbook/2/classes.html#fields), it can be helpful to group single-line declarations.
Airbnb doesn't allow this because it doesn't support class field declarations, so we've overridden it just for TypeScript.

```ts
class Foo {
  // allowed: no line between single-line members
  #foo = 'foo';
  #bar = 'bar';

  // not allowed: no line between multi-line members
  get foo() {
    return this.#foo;
  } // <- no line between members
  get (bar) {
    return this.#bar;
  }
}
```

#### Related rules

- [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)
- [function-component-definition](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md)

### Prefer static class fields (TypeScript+React only)

TypeScript supports public class fields, so prefer using them for static fields.
[Airbnb intends to use this rule](https://github.com/airbnb/javascript/blob/b4377fb03089dd7f08955242695860d47f9caab4/packages/eslint-config-airbnb/rules/react.js#L489-L492) when it's supported.

```tsx
class Foo extends React.Component<FooProps> {
  // good
  static defaultProps = defaultProps;
}

// bad
Foo.defaultProps = defaultProps;
```

#### Related rules

- [react/static-property-placement](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md)

## Adding support for {x}

This config is designed to provide a good base for Airbnb-based JavaScript and TypeScript.
Any additional functionality or overrides should be done in your own config.

For instance, add support for [comments](https://mysticatea.github.io/eslint-plugin-eslint-comments/), [Jest](https://github.com/jest-community/eslint-plugin-jest) and [Prettier](https://github.com/prettier/eslint-plugin-prettier):

```js
module.exports = {
  extends: [
    'norton/react',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
};
```
