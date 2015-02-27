var config = require('../config.js').js;
var concat = require('gulp-concat');
var gulp = require('gulp');
var merge = require('merge-stream');
var path = require('path');
var rename = require('gulp-rename');
var render = require('mustache').render;
var uglify = require('gulp-uglify');
var transpiler = require('gulp-babel');

/**
 * Copy the js to the build dir.
 */
gulp.task('js', function() {
  var tasks = config.dirs.map(function(dir) {
    var src = render(config.src, { project: dir });
    var dest = render(config.dest, { project: dir });

    return gulp.src(src)
      .pipe(concat('index.js'))
      .pipe(transpiler())
      .pipe(gulp.dest(dest))
      .pipe(uglify())
      .pipe(rename('index.min.js'))
      .pipe(gulp.dest(dest));
  });

  return merge(tasks);
});
