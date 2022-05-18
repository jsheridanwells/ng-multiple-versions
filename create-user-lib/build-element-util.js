const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/create-user-lib/runtime.js',
    './dist/create-user-lib/polyfills.js',
    './dist/create-user-lib/scripts.js',
    './dist/create-user-lib/main.js',
  ]
  await fs.ensureDir('./dist/create-user/elements');
  await concat(files, './dist/create-user/elements/index.js');
  // uncomment the next two lines if the app project contains styles or assets
  // await fs.copyFile('./dist/get-users/elements/styles.css', 'elements/styles.css');
  // await fs.copy('./dist/get-users/elements/assets/', 'elements/assets/');
})();
