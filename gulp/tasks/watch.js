var config = require('../config.js');
var gulp = require('gulp');

/**
 * Update the html and less when files change.
 */
gulp.task('watch', ['build'], function() {
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.less.src, ['less']);
  gulp.watch(config.js.root + '**/*.js', ['js']);
});
