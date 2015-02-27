var config = require('../config.js').lint;
var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src(config.src)
    .pipe(jshint(config.jshintOpts))
    .pipe(jshint.reporter(config.reporter));
});
