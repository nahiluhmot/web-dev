var config = require('../config.js').lint;
var gulp   = require('gulp');
var handleErrors = require('../util/handle-errors.js');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src(config.src)
    .on('error', handleErrors)
    .pipe(jshint(config.jshintOpts))
    .pipe(jshint.reporter(config.reporter));
});
