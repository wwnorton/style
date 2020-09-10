# eslint-config-norton
![release version](https://img.shields.io/github/v/release/wwnorton/style "Release Version")

> An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Norton code style](https://github.com/wwnorton/style).
> Currently defaulted to provide React linting. Usage without React Rules can be found below.

A note from [airbnb's JavaScript guide](https://github.com/airbnb/javascript), which this repository extends:

> **Note**: this guide assumes you are using [Babel](https://babeljs.io), and requires that you use [babel-preset-airbnb](https://npmjs.com/babel-preset-airbnb) or the equivalent. It also assumes you are installing shims/polyfills in your app, with [airbnb-browser-shims](https://npmjs.com/airbnb-browser-shims) or the equivalent.

## Installation

As of `v1.2.1`, this repository can be installed from the NPM registry. You'll also need a compatible version of ESLint, [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import), [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and other plugins found in the package.json which are peer dependencies. The preferred way to install requires [npx](https://github.com/zkat/npx), which comes with NPM 5+:

```sh
npx install-peerdeps --dev eslint-config-norton
```

Alternatively, you can use [generator-norton-style](https://gitlab.com/wwnorton/style/generator-norton-style) (a [Yeoman](http://yeoman.io/) generator) to automatically add all required files and dependencies. Follow instructions on [generator-norton-style's README](https://gitlab.com/wwnorton/style/generator-norton-style/blob/master/README.md) to install [Yeoman](http://yeoman.io/) and generator-norton-style globally and then just follow the generator's prompts:

```sh
yo norton-style
```

## Usage

Once the `eslint-config-norton` package is installed, you can use it by specifying `norton` or `eslint-config-norton` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring). Note that generator-norton-style automatically sets up this file. You can then override anything you like from there.

### Usage with Prettier

Currently [Prettier](https://prettier.io/) does a much better job at handling formatting than Eslint. `eslint-config-norton` is setup to work alongside our [`prettier-config-norton`](https://github.com/wwnorton/style/tree/master/packages/prettier-config-norton) which handles our formatting. `eslint-config-norton` extends [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) and `eslint-config-prettier/react` accordingly to turn off Eslint rule conflicts with Prettier. Please incorporate our [`prettier-config-norton`](https://github.com/wwnorton/style/tree/master/packages/prettier-config-norton) in your project as well.

### Examples

`.eslintrc.js` with 2 spaces instead of tabs.

```js
module.exports = {
  extends: ['norton'], // or 'eslint-config-norton'
  rules: {
    indent: ['error', 2],
    'no-tabs': 'error'
  }
};
```

The ESLint `env` attribute may need to be configured to handle certain variables based on your use case.

`.eslintrc.json` in a browser environment with jQuery

```json
{
  "extends": ["eslint-config-norton"],
  "env": {
    "browser": true,
    "jquery": true
  }
}
```

## For Non React Projects

If you don't want React linting you can simply extend the base.js entry point in our config, `eslint-config-norton/base`.

### Usage without React rules

To use the Norton config in a project that doesn't use [React](https://reactjs.org/), import and use the included base.js config instead of the default one.

```js
module.exports = {
	extends: ['eslint-config-norton/base'],
	rules: {
    // Override rules here
	}
}
```

## For TypeScript projects

This package also provides configuration for TypeScript liniting. In order to use our TypeScript linting you need to extend an additional entrypoint based on your needs. Under the hood this configuration disables some base ESLint rules which do not interface well with TypeScript files and Prettier options and subsequently provides TypeScript linting.

> Expects TypeScript to already be installed on your application side. 

It uses [`@typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) for most of its TypeScript rules.

Note: These configurations are still meant to be used alongside [`prettier-config-norton`](https://github.com/wwnorton/style/tree/master/packages/prettier-config-norton) to facilitate most of the formatting.

### How this works.

The entrypoints below provide TypeScript overrides. 

- **eslint-config-norton/typescript**: this includes an extendable override file providing linting for TypeScript along with React.
- **eslint-config-norton/typescript-base**: this includes an extendable override file providing linting for *only* TypeScript.

> The TypeScript ruleset relies on Type definitions and being aware of the location of your TSConfig. Make sure your `'./tsconfig.json'` is in your root directory.

### Examples

Incorporating TypeScript and React Linting:

```js
module.exports = {
  extemds: [
    'norton',
    'eslint-config-norton/typescript'
  ]
}
```

Incorporating just TypeScript Linting:

```js
module.exports = {
  extemds: [
    'eslint-config-norton/base',
    'eslint-config-norton/typescript-base'
  ]
}
```

### **For more information please see...**

TypeScript Lint Setup - https://www.notion.so/Typescript-Lint-Setup-06cef0036d0b4887b4e07b57def202e4
TypeScript Style Guide - https://www.notion.so/TypeScript-Style-Guide-a73cca890fb342b0a1f99a7ba1ce55d8
ESLint Plugin TypeScript - https://www.npmjs.com/package/@typescript-eslint/eslint-plugin


## Rules

This configuration extends [airbnb's base style guide](https://github.com/airbnb/javascript) ([eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)). It overrides the following rules:
- [Tabs instead of spaces](https://gitlab.com/wwnorton/style/guide/issues/1).
