var config = require('../config.js').vendored,
    gulp = require('gulp');

/**
 * Copy all of the vendored assets to the build dir.
 */
gulp.task('vendored', ['vendored-css', 'vendored-js', 'vendored-fonts']);

gulp.task('vendored-css', function() {
  return gulp.src(config.css.src)
    .pipe(gulp.dest(config.css.dest));
});

gulp.task('vendored-fonts', function() {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
});

gulp.task('vendored-js', function() {
  return gulp.src(config.js.src)
    .pipe(gulp.dest(config.js.dest));
});
