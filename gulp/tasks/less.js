var config = require('../config.js').less;
var gulp = require('gulp');
var handleErrors = require('../util/handleErrors.js');
var less = require('gulp-less');
var merge = require('merge-stream');
var render = require('Mustache').render;

/**
 * Compile the less sources.
 */
gulp.task('less', function() {
  var tasks = config.dirs.map(function(dir) {
    var opts = { project: dir };
    var src = render(config.src, opts);
    var dest = render(config.dest, opts);
    var paths = config.paths.map(function(path) {
      return render(path, opts);
    });

    return gulp.src(src)
      .pipe(less({ paths: paths }))
      .on('error', handleErrors)
      .pipe(gulp.dest(dest));
  });

  return merge(tasks);
});
