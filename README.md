# Issue 20151 Reproduction

This repository reproduces [webpack/webpack#20151](https://github.com/webpack/webpack/issues/20151).

## Instructions for the USER

1.  **Create a new repository** on GitHub named `issue-20151-repro`.
2.  **Initialize the repo** and create two branches: `bug` and `fix`.
3.  **On the `bug` branch**:
    *   In `package.json`, use the standard `webpack` from npm (which contains the bug).
    *   Run `npm install` and `npm run build`.
    *   Check `dist/main.js`. You will see that inside the `unused` function, the reference to `i18n` is NOT transformed, which is the bug.
4.  **On the `fix` branch**:
    *   In `package.json`, link to your local webpack fork with the fix: `"webpack": "file:../webpack"`.
    *   Run `npm install` and `npm run build`.
    *   Check `dist/main.js`. You will see that the reference to `i18n` is now transformed to `/* inactive harmony import i18n __ */ undefined`.

## How to use these files

I have created the following files in the `issue-20151-repro` directory:
*   `package.json`
*   `webpack.config.js`
*   `src/i18n.js`
*   `src/index.js`

You can copy these files into your new reproduction repository.
