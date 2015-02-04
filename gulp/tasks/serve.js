var config = require('../config.js').serve,
    gulp = require('gulp'),
    serve = require('../util/serve.js');

/**
 * Run a web server for the application.
 */
gulp.task('serve', ['watch'], function() {
  serve(config.port, config.root, config.index);
});
