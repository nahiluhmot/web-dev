var config = require('../config.js').link;
var gulp = require('gulp');
var handleErrors = require('../util/handle-errors.js');
var link = require('gulp-symlink');

/**
 * Create a link to serve the indx.html.
 */
gulp.task('link', ['html'], function() {
  return gulp.src(config.src)
    .on('error', handleErrors)
    .pipe(link(config.dest));
});
