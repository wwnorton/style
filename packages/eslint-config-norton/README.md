# eslint-config-norton [![Build Status](https://gitlab.com/wwnorton/style/eslint-config-norton/badges/master/build.svg)](https://gitlab.com/wwnorton/style/eslint-config-norton/commits/master)
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Norton JavaScript style guide](https://gitlab.com/wwnorton/style)


## Installation
```sh
$ npm install --save-dev git+ssh://git@gitlab.com:wwnorton/style/eslint-config-norton.git#v1.0.0
```

This config currently extends [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), so you'll need to install all of its peer dependencies alongside eslint-config-norton. This can be done most easily with [install-peerdeps](https://github.com/nathanhleung/install-peerdeps), which you'll need to install globally (`npm install -g install-peerdeps`).
```sh
$ install-peerdeps -d eslint-config-airbnb
```

## Usage
Once the `eslint-config-norton` package is installed, you can use it by specifying `norton` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

### Examples
`.eslintrc.js`
```js
module.exports = {
    extends: ['norton'],
    rules: {
        // Override rules here
    }
};
```

`.eslintrc.json` in a browser environment with jQuery
```json
{
    "extends": [
        "norton"
    ],
    "env": {
        "browser": true,
        "jquery": true
    }
}
```
