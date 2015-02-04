var config = require('../config.js').less,
    gulp = require('gulp'),
    handleErrors = require('../util/handleErrors.js');
    less = require('gulp-less');

/**
 * Compile the less sources.
 */
gulp.task('less', function() {
  return gulp.src(config.src)
    .pipe(less({ paths: config.paths }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
