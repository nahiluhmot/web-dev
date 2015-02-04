var config = require('../config.js'),
    gulp = require('gulp');

/**
 * Update the html and less when files change.
 */
gulp.task('watch', ['build'], function() {
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.less.src, ['less']);
});
