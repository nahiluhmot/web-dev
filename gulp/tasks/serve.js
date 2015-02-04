var browserSync = require('browser-sync'),
    config = require('../config.js').serve,
    gulp = require('gulp');

/**
 * Run a web server for the application.
 */
gulp.task('serve', ['watch'], function() {
  browserSync(config);
});
