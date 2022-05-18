const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/get-users-lib/runtime.js',
    './dist/get-users-lib/polyfills.js',
    './dist/get-users-lib/scripts.js',
    './dist/get-users-lib/main.js',
  ]
  await fs.ensureDir('./dist/get-users/elements');
  await concat(files, './dist/get-users/elements/elements.js');
  // uncomment the next two lines if the app project contains styles or assets
  // await fs.copyFile('./dist/get-users/elements/styles.css', 'elements/styles.css');
  // await fs.copy('./dist/get-users/elements/assets/', 'elements/assets/');
})();
