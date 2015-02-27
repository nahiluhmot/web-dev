var config = require('../config.js').js;
var concat = require('gulp-concat');
var gulp = require('gulp');
var merge = require('merge-stream');
var path = require('path');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var transpiler = require('gulp-babel');

/**
 * Copy the js to the build dir.
 */
gulp.task('js', function() {
  var tasks = config.dirs.map(function(dir) {
    return gulp.src(path.join(config.root, dir, '/*.js'))
      .pipe(concat(dir + '.js'))
      .pipe(transpiler())
      .pipe(gulp.dest(config.dest))
      .pipe(uglify())
      .pipe(rename(dir + '.min.js'))
      .pipe(gulp.dest(config.dest));
  });

  return merge(tasks);
});
