var config = require('../config.js').clean;
var gulp = require('gulp');
var rimraf = require('rimraf');

/**
 * Remove all build state.
 */
gulp.task('clean', function(cb) {
  return rimraf(config, cb);
});
