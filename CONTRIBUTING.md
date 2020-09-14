# General Development

## Install Dependencies

```bash
npm install
```

## Run Tests

```bash
npm test
```

Note that `npm run build` will run prior to tests and the unit tests are run against the compiled source
instead of the original source code.

## Committing & Pushing Changes

When you commit changes [Prettier](https://prettier.io/) will run automatically.

If you want to manually run prettier you can use `npm run prettier:check` or `npm run prettier:fix`.

When you push changes `npm test` will automatically run. All tests need to pass for a push to be successful.

# New Features

We welcome contributions to the code base, please feel free to [open an issue](https://github.com/flmnt/graphemer/issues/new) to discuss ideas or fork the repository and open a pull request.

If you do open a pull request, please ensure all tests are passing, and you have listed your changes in the [CHANGELOG](https://github.com/flmnt/graphemer/blob/master/CHANGELOG.md).

## Adding Functionality

If you have an idea for new functionality please create a new issue so we can discuss design of the new feature.

Once we have agreed an approach please fork the repository, make your chnages and open a pull request.

We aim to respond quickly, but please be aware it's a small team maintaining this library.

## New Unicode Version Adoption

We aim to keep up to date with the latest Unicode versions, however, if we are late in releasing a new version feel free to follow the steps below and create a pull request with an updated Unicode version.

**Step 1**

Find the latest version : http://www.unicode.org/versions/latest/

Find the Unicode Character Database for the latest version...

https://www.unicode.org/Public/13.0.0/

On changes to any new version of `GraphemeBreakProperty.txt` or `emoji-data.txt`, run the following scripts
to synchronize upstream changes to JavaScript codes:

For example, if you would like to update the `GraphemeBreakProperty.txt` to a new Unicode version, download
to the `/scripts` folder and synchronize the changes.

**Step 2**

On Linux copy the required code with:

```bash
node ./scripts/generate-grapheme-break | xclip
```

On Mac use `pbcopy` like this:

```bash
node ./scripts/generate-grapheme-break | pbcopy
```

**Step 3**

Then paste the generated code into `which file?` and run `npm run fix:prettier` to format.

# Bug Fixes

If you notice a bug in the code, please report it via a [new issue](https://github.com/flmnt/graphemer/issues/new). And even better, try and fix it via a pull request!

We'll do our very best to support anyone looking to fix and bugs. Your help is very much appreciated.

If you do open a pull request, please ensure all tests are passing, and you have listed your changes in the [CHANGELOG](https://github.com/flmnt/graphemer/blob/master/CHANGELOG.md).

# Publishing

When updates are merged via a pull request, we will create a new release.

This automatically publishes the library to NPM.
