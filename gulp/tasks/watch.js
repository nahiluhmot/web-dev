var config = require('../config.js').watch;
var gulp = require('gulp');

/**
 * Update the html and less when files change.
 */
gulp.task('watch', ['build'], function() {
  gulp.watch(config.html, ['html']);
  gulp.watch(config.less, ['less']);
  gulp.watch(config.js, ['js']);
});
