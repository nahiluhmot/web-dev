var config = require('../config.js').less,
    gulp = require('gulp'),
    less = require('gulp-less');

/**
 * Compile the less sources.
 */
gulp.task('less', function() {
  return gulp.src(config.src)
    .pipe(less({ paths: config.paths }))
    .pipe(gulp.dest(config.dest));
});
