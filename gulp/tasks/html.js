var config = require('../config.js').html;
var gulp = require('gulp');

/**
 * Copy the html to the build dir.
 */
gulp.task('html', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
