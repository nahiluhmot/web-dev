var browserSync = require('browser-sync');
var config = require('../config.js').serve;
var gulp = require('gulp');

/**
 * Run a web server for the application.
 */
gulp.task('serve', ['watch'], function() {
  browserSync(config);
});
