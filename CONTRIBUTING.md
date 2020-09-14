# Contributing

Contributions are very much welcomed! Please read this guide to help you get started.

## General Development

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
npm test
```

Note that `npm run build` will run prior to tests and the unit tests are run against the compiled source
instead of the original source code.

### Committing & Pushing Changes

When you commit changes [Prettier](https://prettier.io/) will run automatically.

If you want to manually run prettier you can use `npm run prettier:check` or `npm run prettier:fix`.

When you push changes `npm test` will automatically run. All tests need to pass for a push to be successful.

## New Features

We welcome contributions to the code base, please feel free to [open an issue](https://github.com/flmnt/graphemer/issues/new) to discuss ideas or fork the repository and open a pull request.

If you do open a pull request, please ensure all tests are passing, and you have listed your changes in the [CHANGELOG](https://github.com/flmnt/graphemer/blob/master/CHANGELOG.md).

### Adding Functionality

If you have an idea for new functionality please create a new issue so we can discuss design of the new feature.

Once we have agreed an approach please fork the repository, make your chnages and open a pull request.

We aim to respond quickly, but please be aware it's a small team maintaining this library.

### New Unicode Version Adoption

Coming soon...

## Bug Fixes

If you notice a bug in the code, please report it via a [new issue](https://github.com/flmnt/graphemer/issues/new). And even better, try and fix it via a pull request!

We'll do our very best to support anyone looking to fix and bugs. Your help is very much appreciated.

If you do open a pull request, please ensure all tests are passing, and you have listed your changes in the [CHANGELOG](https://github.com/flmnt/graphemer/blob/master/CHANGELOG.md).

## Publishing

When updates are merged via a pull request, we will create a new release.

This automatically publishes the library to NPM.
