var fs = require('fs');
var path = require('path');

/**
 * Get all of the sub directories from a given directory.
 */
module.exports = function(dir) {
  return fs.readdirSync(dir).filter(function(file) {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
}
