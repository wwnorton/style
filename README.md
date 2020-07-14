# eslint-config-norton

An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Norton code style](https://gitlab.com/wwnorton/style).

A note from [airbnb's JavaScript guide](https://github.com/airbnb/javascript), which this repository extends:

> **Note**: this guide assumes you are using [Babel](https://babeljs.io), and requires that you use [babel-preset-airbnb](https://npmjs.com/babel-preset-airbnb) or the equivalent. It also assumes you are installing shims/polyfills in your app, with [airbnb-browser-shims](https://npmjs.com/airbnb-browser-shims) or the equivalent.

## Installation

Install from the public NPM registry with `npm install --dev eslint-config-norton`.
You'll also need [eslint](https://www.npmjs.com/package/eslint) and [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import).
The easiest way to install the correct versions is to install peer dependencies with `npx install-peerdeps`.

```sh
npx install-peerdeps --dev eslint-config-norton
```

## Usage

Once the `eslint-config-norton` package is installed, you can use it by specifying `norton` or `eslint-config-norton` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).
You can then override anything you like from there.

### Examples

`.eslintrc.js` with a specific rule overridden for your project.

```js
module.exports = {
  extends: ['norton'], // or 'eslint-config-norton'
  rules: {
    'some-override': 'off',
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

## Rules

This configuration extends [airbnb's base style guide](https://github.com/airbnb/javascript) ([eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)).
It overrides the following rules:

- [Tabs instead of spaces](https://gitlab.com/wwnorton/style/guide/issues/1).
- [Named exports instead of default exports](https://basarat.gitbook.io/typescript/main-1/defaultisbad) (note that this rule has the greatest impact on TypeScript but is still enforced in JavaScript).

## Additional environments

This config is intended to work out of the box with vanilla JavaScript but it also includes overrides for TypeScript and React, should you decide to use it in those environments.
In both cases, you will need to install additional plugins and/or parsers for ESLint to work.

### Usage with React

Simply add Airbnb's React rules ([eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)) to get the best results with React.

```sh
npx install-peerdeps --dev eslint-config-norton  # you may have already done this
npx install-peerdeps --dev eslint-config-airbnb
```

And then extend `airbnb` and `norton` in your config.

> **Note**: the Norton config must come AFTER the Airbnb config to use our overrides.

```js
// .eslintrc.js
module.exports = {
	extends: ['airbnb', 'norton'],
};
```

### Usage with TypeScript

Add the [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) plugin and parser.

```sh
npx install-peerdeps --dev eslint-config-norton  # you may have already done this
npm install --dev @typescript-eslint/{eslint-plugin,parser}
```

And then extend the recommended TypeScript config, as well as `eslint-plugin-import`'s typescript config.

```js
// .eslintrc.js
module.exports = {
	extends: [
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'norton',
	],
};
```

### Usage with React AND TypeScript

Both the React and TypeScript overrides can be used at the same time.
Follow the instructions for installing additional tooling for each above and then extend your config with everything.

```js
// .eslintrc.js
module.exports = {
	extends: [
		'airbnb',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'norton',
	],
};
```
