var config = require('../config.js'),
    gulp = require('gulp');

/**
 * Update the html and css when files change.
 */
gulp.task('watch', function() {
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.css.src, ['css']);
});
