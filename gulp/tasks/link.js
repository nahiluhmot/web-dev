var config = require('../config.js').link;
var link = require('gulp-symlink');
var gulp = require('gulp');

/**
 * Force a build of each dependency.
 */
gulp.task('link', ['html'], function() {
  return gulp.src(config.src)
    .pipe(link(config.dest));
});
