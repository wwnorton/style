# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.2](https://github.com/wwnorton/style/compare/eslint-config-norton@5.0.1...eslint-config-norton@5.0.2) (2023-06-28)


### 🛠 Maintenance

* npm update ([bf216ba](https://github.com/wwnorton/style/commit/bf216ba4a74e0c05a18610dff94d44489d1266b6))



## [5.0.1](https://github.com/wwnorton/style/compare/eslint-config-norton@5.0.0...eslint-config-norton@5.0.1) (2022-10-12)

### 🐛 Bug Fixes

- **eslint-config-norton:** add missing peer dependencies ([109ae08](https://github.com/wwnorton/style/commit/109ae08922b513a9a9200797336ec7c809ed5b0b))

### 🛠 Maintenance

- **eslint-config-norton:** update eslint-config-airbnb-typescript to v17 ([0f7d75a](https://github.com/wwnorton/style/commit/0f7d75ace02c4509f24ec8f7d1e9fd11b703dfbc))
- update eslint & hoist to root ([4b4da99](https://github.com/wwnorton/style/commit/4b4da99dd525d1e591247a7b01b72062f053c8da))

## [5.0.0](https://github.com/wwnorton/style/compare/eslint-config-norton@5.0.0-alpha.1...eslint-config-norton@5.0.0) (2022-03-25)

### 📝 Documentation

- add parserOptions example ([836638d](https://github.com/wwnorton/style/commit/836638d8ad7c9d320e4ef48fae4a1d330af45953))
- use overrides to enable type checking ([eec68a1](https://github.com/wwnorton/style/commit/eec68a188791795cb7aec3e42b157f8dc8f76276))

### 🛠 Maintenance

- add uniform badges to each package ([03af26d](https://github.com/wwnorton/style/commit/03af26dbad8722d14b91c8e4188ec7d14b2e3299))
- improve prettier example ([28788fb](https://github.com/wwnorton/style/commit/28788fbf3274e1be5b6b2e1a9a87d9a20ed76aad))

## [5.0.0-alpha.1](https://github.com/wwnorton/style/compare/eslint-config-norton@4.0.0-beta.7...eslint-config-norton@5.0.0-alpha.1) (2022-02-20)

### ⚠ BREAKING CHANGES

- default config no longer includes React
- remove security rules
- remove prettier rules
- support typescript with overrides
- avoid export default in TypeScript

- feat!(eslint-config-norton): streamline for v5 ([8de4433](https://github.com/wwnorton/style/commit/8de44332f52795ac9f62b848e9d8eb0dd1ac1a71))

### 🛠 Maintenance

- airbnb is a dependency ([7dfc31b](https://github.com/wwnorton/style/commit/7dfc31b2836312e02ea07f73b771ff720a8a754c))
- **dev-deps:** bump ava to v4 ([1efc1c4](https://github.com/wwnorton/style/commit/1efc1c45ebb2f3b8d034a0eac1fe3e12016f74d0))
- disable ts type checking rules by default ([9f683ec](https://github.com/wwnorton/style/commit/9f683ecc05847eb3a196e88c5ffa808f1366d239))
- manually bump to 5.0 alpha ([b6390bb](https://github.com/wwnorton/style/commit/b6390bb3392fba7e7549d452dc146dc7f080e4e5))
- switch to npm workspaces ([7c205a5](https://github.com/wwnorton/style/commit/7c205a538ac797eb0faf20955d6c29f20ea8edc1))
- use consistent test names ([5e350dd](https://github.com/wwnorton/style/commit/5e350ddec4ef29c0688b26be5eb7e10239d9dc88))

## [4.0.0-beta.7](https://github.com/wwnorton/style/compare/eslint-config-norton@4.0.0-beta.6...eslint-config-norton@4.0.0-beta.7) (2021-12-20)

### 🛠 Maintenance

- **deps:** bump @typescript-eslint/eslint-plugin from 3.10.1 to 4.0.0 ([08fec98](https://github.com/wwnorton/style/commit/08fec98ec249ccec359ea0a1b2cb5bd710f6ea73))

## [4.0.0-beta.6](https://github.com/wwnorton/style/compare/eslint-config-norton@4.0.0-beta.5...eslint-config-norton@4.0.0-beta.6) (2020-10-14)

### ⚠ BREAKING CHANGES

- **eslint-config-norton:** in ts or tsx files will show linting errors

### ✨ Features

- **eslint-config-norton:** add avoid export default rule for Typescript overrides ([5ffd5fa](https://github.com/wwnorton/style/commit/5ffd5fad53c90ae7c2dad84eb11cb14fcc673e93))

### ♻️ Refactor

- **eslint-config-norton:** move bestPractices avoid default export logic purely into typescript-base ([e3462fe](https://github.com/wwnorton/style/commit/e3462fe6ba6b2f057ae20a849ecbe5e0072dfeb3))

### 📝 Documentation

- **eslint-config-norton:** change avoid export default rule comment to point to github issue ([63a96cb](https://github.com/wwnorton/style/commit/63a96cb4fd9bc5852584b858c1388f985f1424e6))

## [4.0.0-beta.5](https://github.com/wwnorton/style/compare/eslint-config-norton@4.0.0-beta.4...eslint-config-norton@4.0.0-beta.5) (2020-09-30)

### 📝 Documentation

- **eslint-config-norton:** add clarity to install-peerdeps command ([aabe48c](https://github.com/wwnorton/style/commit/aabe48c0066e10ff34ce2211a7fdf0813b3f7ca1))
- **eslint-config-norton:** add more clarity to examples section ([a61a075](https://github.com/wwnorton/style/commit/a61a075410f8cb3dd8aca41ad8a04689eb5e4106))
- **eslint-config-norton:** fix typos for install ([eb80ddb](https://github.com/wwnorton/style/commit/eb80ddbbe41e616b94d63c051d02ca96f73e1f17))
- **eslint-config-norton:** update installation section for more clarity ([d980928](https://github.com/wwnorton/style/commit/d9809282bd34e50f3b4a0dff38929de01ab9c72c))

## 4.0.0-beta.4 (2020-09-09)

- refactor(eslint-config-norton): add comments to security rules and reorder ([d876102](https://github.com/wwnorton/style/commit/d876102))
- feat(eslint-config-norton): add norton master eslint rules ([aceecd6](https://github.com/wwnorton/style/commit/aceecd6))
- feat(eslint-config-norton): add security rules to base and index entrypoints ([54134cb](https://github.com/wwnorton/style/commit/54134cb))
- test(eslint-config-norton): disable node/no-extraneous-import for react test cases ([642e17f](https://github.com/wwnorton/style/commit/642e17f))
- chore: update package-lock and add security peer deps to eslint-config and security dev deps to mono ([1abb8b5](https://github.com/wwnorton/style/commit/1abb8b5))
- docs(eslint-config-norton): update TypeScript documentation ([5c9e508](https://github.com/wwnorton/style/commit/5c9e508))

## 4.0.0-beta.3 (2020-09-04)

- docs(eslint-config-norton): update and fix typos for typescript project documentation ([aca96d3](https://github.com/wwnorton/style/commit/aca96d3))
- docs(eslint-config-norton): update new Typescript usage documentation ([25936fa](https://github.com/wwnorton/style/commit/25936fa))
- test: add post Prettier testing ([de7860a](https://github.com/wwnorton/style/commit/de7860a))
- test: setup for prettier changes formatting in tests ([1f83922](https://github.com/wwnorton/style/commit/1f83922))
- test(eslint-config-norton): add tests for all rules and file types ([f3c3fc7](https://github.com/wwnorton/style/commit/f3c3fc7))
- fix: add back Prettier semi rules for rule clarity and easier testing ([70f8d6e](https://github.com/wwnorton/style/commit/70f8d6e))
- fix(eslint-config-norton): don't enforce env in config ([3af1f12](https://github.com/wwnorton/style/commit/3af1f12))
- fix(eslint-config-norton): ensure that Norton rules are preferred over extended configs ([2ab6547](https://github.com/wwnorton/style/commit/2ab6547))
- fix(eslint-config-norton): overhaul typescript overrides ([f8121c4](https://github.com/wwnorton/style/commit/f8121c4))
- fix(eslint-config-norton): prefer norton rules in base config ([a455a96](https://github.com/wwnorton/style/commit/a455a96))
- fix(eslint-config-norton): re-enable semicolon since the prettier config disables them ([6b98ba1](https://github.com/wwnorton/style/commit/6b98ba1))
- refactor: move typescript rules into rules folder ([bda8892](https://github.com/wwnorton/style/commit/bda8892))
- refactor: remove semi rules in favor of prettier formatting ([b1240ae](https://github.com/wwnorton/style/commit/b1240ae))
- refactor(eslint-config-norton): add ts/tsx to import/extensions rule & setting ([ad5d5c0](https://github.com/wwnorton/style/commit/ad5d5c0))
- refactor(eslint-config-norton): override base with typescript base ([ca16f31](https://github.com/wwnorton/style/commit/ca16f31))
- refactor(eslint-config-norton): prefer "off" to 0 ([31c5e27](https://github.com/wwnorton/style/commit/31c5e27))
- refactor(eslint-config-norton): remove redundant and opinionated rules ([c9f1778](https://github.com/wwnorton/style/commit/c9f1778))
- refactor(eslint-config-norton): remove redundant plugins ([e55e395](https://github.com/wwnorton/style/commit/e55e395))
- refactor(eslint-config-norton): simplify config comment ([f8ff14d](https://github.com/wwnorton/style/commit/f8ff14d))
- refactor(eslint-config-norton): use the base config exposed by esling-config-airbnb ([dfd2183](https://github.com/wwnorton/style/commit/dfd2183))
- chore: add new entrypoints to files and add typescript to peerDependenciesMeta ([3f1c379](https://github.com/wwnorton/style/commit/3f1c379))
- chore: import typescriptReact ([31a3071](https://github.com/wwnorton/style/commit/31a3071))
- chore: remove unnecessary dependency ([58a5733](https://github.com/wwnorton/style/commit/58a5733))
- feat: move typescript overrides into entrypoints ([2053be4](https://github.com/wwnorton/style/commit/2053be4))

## 4.0.0-beta.2 (2020-08-26)

- chore: fix missing base entrypoint by adding base.js to files ([0c89d3a](https://github.com/wwnorton/style/commit/0c89d3a))
- chore: remove extra comma in dependencies ([48ab099](https://github.com/wwnorton/style/commit/48ab099))
- chore: update package to proper homepage url ([41d9765](https://github.com/wwnorton/style/commit/41d9765))
- chore(eslint): add typescript to peerDependencies ([202e321](https://github.com/wwnorton/style/commit/202e321))

## 3.1.3 (2020-07-24)

### Bug Fixes

- make sure overrides are included on npm ([307e5ac](https://github.com/wwnorton/style/commit/307e5ac3fba119ad2f5f1fab2c9270235bf399b9))
- remove redundant strict rules ([e90d59f](https://github.com/wwnorton/style/commit/e90d59fb10b9d18cc00130c99280079b05d587fd))
- require overrides ahead of compilation ([8d59ed7](https://github.com/wwnorton/style/commit/8d59ed7af9e0ac764776de00745db45d2855273c))
- update peer deps to be in line with airbnb ([9ac9715](https://github.com/wwnorton/style/commit/9ac9715ebb0de9d7ea802a114833214350dc34d0))

### Features

- add hooks to do standard release ([cffa46b](https://github.com/wwnorton/style/commit/cffa46b0543d051dd15c13afce9d65c66cac03be))
- add overrides for react & typescript ([3f197c1](https://github.com/wwnorton/style/commit/3f197c1e3db35735e4c726698e4ccad12f0b4681))
- remove support for node 6 ([bfc856e](https://github.com/wwnorton/style/commit/bfc856e80483fbeff668832730d2c5d5cbf72a65))
- update airbnb-base to v14 ([10dbfa5](https://github.com/wwnorton/style/commit/10dbfa58960c47f72f0554c1d40aea6c548b65be))
- update eslint-config-airbnb-base ([3dd60a7](https://github.com/wwnorton/style/commit/3dd60a7d990d236ec0307e6b75d28a01ce5cfd8b))

### Performance Improvements

- remove pointless coverage ([798b072](https://github.com/wwnorton/style/commit/798b072c7d0d0e453c92d54df99ec16015ee57cb))

### BREAKING CHANGES

- see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09
- see
  https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.1.2](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.1.1...v3.1.2) (2020-07-14)

### Bug Fixes

- make sure overrides are included on npm ([4e083a7](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/4e083a7f7e6efc2da425a2904b4df141e858e2d9))

### [3.1.1](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.1.0...v3.1.1) (2020-07-14)

### Bug Fixes

- require overrides ahead of compilation ([76cb91e](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/76cb91ed38c00588b12aa8e86375981c242f01db))

## [3.1.0](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.0.3...v3.1.0) (2020-07-14)

### Features

- add overrides for react & typescript ([f2c3a32](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/f2c3a32fba7523783a46d0d0516059334b293eeb))

### [3.0.3](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.0.2...v3.0.3) (2020-07-14)

### [3.0.2](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.0.1...v3.0.2) (2020-03-11)

### Bug Fixes

- remove redundant strict rules ([27b2e08](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/27b2e08283751c3d642af5af1f82533d0afb0a6b))

### [3.0.1](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.0.0...v3.0.1) (2019-08-12)

### Bug Fixes

- update peer deps to be in line with airbnb ([107722f](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/107722f))

## [3.0.0](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v2.0.2...v3.0.0) (2019-08-12)

### ⚠ BREAKING CHANGES

- see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09

### Features

- update airbnb-base to v14 ([0b5de99](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/0b5de99))

<a name="2.0.2"></a>

## [2.0.2](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v2.0.1...v2.0.2) (2019-01-09)

<a name="2.0.1"></a>

## [2.0.1](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v2.0.0...v2.0.1) (2018-11-05)

<a name="2.0.0"></a>

# [2.0.0](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v1.2.2...v2.0.0) (2018-08-21)

### Features

- add hooks to do standard release ([c200e82](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/c200e82))
- remove support for node 6 ([9807698](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/9807698))
- update eslint-config-airbnb-base ([049f4fc](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/049f4fc))

### Performance Improvements

- remove pointless coverage ([67c31d8](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/67c31d8))

### BREAKING CHANGES

- see
  https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md
