# eslint-config-norton
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Norton JavaScript style guide](https://gitlab.com/wwnorton/style)

## Installation
```sh
$ npm install --save-dev eslint@3.19 git+ssh://git@gitlab.com:wwnorton/eslint-config-norton.git#v1.0.0-beta.2
```

## Usage
Once the `eslint-config-norton` package is installed, you can use it by specifying `norton` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
// .eslintrc.js
module.exports = {
    extends: 'norton',
    rules: {
        // Override rules here
    }
};
```
