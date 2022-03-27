# Katas: NodeJS - Javascipt/Typescript

Collection of exercises to help you get fit

[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)][2]
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)][4]
[![Editor Config](https://img.shields.io/badge/Editor%20Config-1.0.1-crimson.svg)][3]
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)][12]
[![prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)][8]
[![eslint](https://img.shields.io/badge/code%20style-eslint-green)][9]

## Install

`git clone https://github.com/roalcantara/katas-nodejs.git`

### Dependencies

- [git][5]
- [NodeJS][6]

## Usage

- Run `make install` to install all the dependencies
- Run `make clear` to clear the cache
- Run `make purge` to clear the cache and node_modules
- Run `make reset` to clear the cache, node_modules and reinstall dependencies

### Nx

This project was generated using [Nx](https://nx.dev).

#### Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

#### Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

#### Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@kakatas-nodejs/mylib`.

#### Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

#### Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

#### Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

#### Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

#### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Acknowledgements

- [Standard Readme][4]
- [GNU Make][7]

## Contributing

- Bug reports and pull requests are welcome on [GitHub][0]
- Do follow [Editor Config][3] rules.
- Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [Contributor Covenant][2] code of conduct.

## License

The project is available as open source under the terms of the [MIT][1] [License](LICENSE)

[0]: https://github.com/roalcantara/katas-javascript 'Katas: Ruby'
[1]: https://opensource.org/licenses/MIT 'Open Source Initiative'
[2]: https://contributor-covenant.org 'A Code of Conduct for Open Source Communities'
[3]: https://editorconfig.org 'EditorConfig'
[4]: https://github.com/RichardLitt/standard-readme 'Standard Readme'
[5]: https://git-scm.com 'Git'
[6]: https://nodejs.org/en/ 'NodeJs'
[7]: https://www.gnu.org/s/make/manual/make.html 'GNU Make'
[8]: https://prettier.io 'Prettier: Opinionated Code Formatter'
[9]: https://eslint.org 'ESLint'
