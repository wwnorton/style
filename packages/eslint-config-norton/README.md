# eslint-config-norton
![release version](https://img.shields.io/github/v/release/wwnorton/style "Release Version")

> An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Norton code style](https://github.com/wwnorton/style).
> Currently defaulted to provide React linting. Usage without React Rules can be found below.

A note from [airbnb's JavaScript guide](https://github.com/airbnb/javascript), which this repository extends:

> **Note**: this guide assumes you are using [Babel](https://babeljs.io), and requires that you use [babel-preset-airbnb](https://npmjs.com/babel-preset-airbnb) or the equivalent. It also assumes you are installing shims/polyfills in your app, with [airbnb-browser-shims](https://npmjs.com/airbnb-browser-shims) or the equivalent.

## Installation

As of `v1.2.1`, this repository can be installed from the NPM registry. You'll also need a compatible version of ESLint, and [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import), which are peer dependencies. The preferred way to install requires [npx](https://github.com/zkat/npx), which comes with NPM 5+:

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

## FOR NON-REACT PROJECTS

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

## Rules

This configuration extends [airbnb's base style guide](https://github.com/airbnb/javascript) ([eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)). It overrides the following rules:
- [Tabs instead of spaces](https://gitlab.com/wwnorton/style/guide/issues/1).