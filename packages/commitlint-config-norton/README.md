# commitlint-config-norton

[![commitlint-config-norton version](https://img.shields.io/npm/v/commitlint-config-norton)](https://www.npmjs.com/package/commitlint-config-norton)


> A commitlint [shareable config](https://commitlint.io/docs/en/configuration.html#sharing-configurations) for [Norton code style](https://gitlab.com/wwnorton/style).

## Installation

You'll also need a compatible version of commitlint which is a peer dependency. The preferred way to install requires [npx](https://github.com/zkat/npx), which comes with NPM 5+:

```sh
$ npx install-peerdeps --dev commitlint-config-norton
```

## Usage

Once the `commitlint-config-norton` package is installed, you can use it by specifying it in your package.json: 

```js
"commitlint": "commitlint-config-norton"
```

Alternatively, you can add this to your .commitlint file:

```js
// .commitlintrc.json
"commitlint-config-norton"

// commitlint.config.js or .commitlintrc.js
module.exports = 'commitlint-config-norton';
```

### Examples for Extending
This configuration is not intended to be changed. commitlint does not offer an "extends" mechanism as you might be familiar from tools such as ESLint.

To extend a configuration you will need to use a commitlint.config.js or .commitlintrc.js file that exports an object:

```js
module.exports = {
	...require('commitlint-config-norton'),
	semi: false
	// additional rule changes.
};
```

### Example `commitlint.config.js` File
```js
const { rules } = require('@commitlint/config-conventional');

const types = rules['type-enum'][2];

module.exports = {
	extends: [
		'@commitlint/config-conventional',
		'@commitlint/config-lerna-scopes',
	],
	rules: {
		'type-enum': [2, 'always', [...types, 'visual'].sort()],
	},
};
```

## Running

This package only provides the W.W. Norton commitlint configuration, it is assumed that you have `commitlint` installed in your project.
This will already be done if you ran the `install-peerdeps` command specified in the [Installation section](#installation).

- It's recommended to add a commitlint script to your `package.json`. An example is below: 

	```
	scripts: {
		"commitlint": "commitlint '**/*.{js,json,css,scss,html,hbs,md}' --write" 
	}
	```
	You can then run the following, to automatically format your project's code:

	```
	npm run commitlint 
	```
- More commands can be found on [commitlint's documentation](https://commitlint.js.org/).

## Rules
[Commitlint Rules Documentation](https://commitlint.js.org/#/reference-rules)

This configuration is aimed to align with our modified Airbnb Style Guides by overriding a couple of the default rules for commitlint.

- Use [Tabs](https://commitlint.io/docs/en/options.html#tabs) over spaces 
- Use [single quotes](https://commitlint.io/docs/en/options.html#quotes) in regards to JavaScript code.
