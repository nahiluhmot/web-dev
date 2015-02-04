var config = require('../config.js').css,
    gulp = require('gulp');

/**
 * Copy the css to the build dir.
 */
gulp.task('css', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
