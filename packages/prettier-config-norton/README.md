# prettier-config-norton

A Prettier [shareable config](https://prettier.io/docs/en/configuration.html#sharing-configurations) for [Norton code style](https://gitlab.com/wwnorton/style).

## Installation

```
npm install prettier-config-norton
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
};
```

## Rules

This configuration is aimed to align with our modified Airbnb Style Guides and overrides a couple of the default rules for Prettier.

- Use [Tabs](https://prettier.io/docs/en/options.html#tabs) over spaces 
- Use [single quotes](https://prettier.io/docs/en/options.html#quotes) in regards to JavaScript code.
