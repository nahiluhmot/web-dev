var config = require('../config.js').clean,
    gulp = require('gulp'),
    rimraf = require('rimraf');

/**
 * Remove all build state.
 */
gulp.task('clean', function(cb) {
  return rimraf(config, cb);
});
