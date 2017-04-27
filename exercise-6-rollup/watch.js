//use strict because:
//Block-scoped declarations (let, const, function, class) not yet
//supported outside strict mode
"use strict";

const chokidar = require( "chokidar");
const path = require( "path");
const shell = require( "shelljs");
const tinylr = require( "tiny-lr");
const exit = require( "exit-hook");
const options = {
  ignoreDotFiles: true
};
let tinyServer = tinylr();

const watcher = chokidar.watch(['dist'], {
  ignored: /[\/\\]\./,
  ignoreInitial: true
});

tinylr().listen(35729, function() {
  console.log('livereload up... 🔄 ✨');
});

watcher.on("change", f => checkTypeOfEvent(f));
watcher.on("add", f => checkTypeOfEvent(f));

/**
 * Does some checking on the file that changed
 *
 * @param f - file path that changed
 */
const checkTypeOfEvent = (f) => {
  const type = path.extname(f).split('.')[1];

  tinylr.changed(f);
};

exit(function () {
  console.log('♻  cleaning up...');
  watcher.close();
  tinyServer.close();
});
