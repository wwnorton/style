# prettier-config-norton

A Prettier [shareable config](https://prettier.io/docs/en/configuration.html#sharing-configurations) for [Norton code style](https://gitlab.com/wwnorton/style).

## Installation

You'll also need a compatible version of Prettier which is a peer dependency. The preferred way to install requires [npx](https://github.com/zkat/npx), which comes with NPM 5+:

```sh
npx install-peerdeps --dev prettier-config-norton
```

## Usage

Once the `prettier-config-norton` package is installed, you can use it by specifying it in your package.json: 

```
"prettier": "prettier-config-norton"
```

Alternatively, you can add this to your .prettier file:

```
// .prettierrc.json
"prettier-config-norton"
```

```
// prettier.config.js or .prettierrc.js
module.exports = 'prettier-config-norton';
```
### Examples for Extending

This configuration is not intended to be changed. Prettier does not offer an "extends" mechanism as you might be familiar from tools such as ESLint.

To extend a configuration you will need to use a prettier.config.js or .prettierrc.js file that exports an object:

```
module.exports = {
	...require('prettier-config-norton'),
	semi: false
	// additional rule changes.
};
```

## Running

This package only provides the W.W. Norton Prettier configuration, it is assumed that you have `prettier` installed in your project.
This will already be done if you ran the `install-peerdeps` command specified in the [Installation section](#installation).

- It's recommended to install the relevant [Editor Addons/Plugins](https://prettier.io/docs/en/editors.html) and enable "Prettier on Save".

- It's recommended to add a prettier script to your `package.json`. An example is below: 

	```
	scripts: {
		"prettier": "prettier '**/*.{js,json,css,scss,html,hbs,md}' --write" 
	}
	```
	You can then run the following, to automatically format your project's code:

	```
	npm run prettier 
	```
- More commands can be found on [Prettier's documentation](https://prettier.io/docs/en/cli.html).

## Rules

This configuration is aimed to align with our modified Airbnb Style Guides by overriding a couple of the default rules for Prettier.

- Use [Tabs](https://prettier.io/docs/en/options.html#tabs) over spaces 
- Use [single quotes](https://prettier.io/docs/en/options.html#quotes) in regards to JavaScript code.
