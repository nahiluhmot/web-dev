var config = require('../config.js').html;
var gulp = require('gulp');
var handleErrors = require('../util/handle-errors.js');
var merge = require('merge-stream');
var render = require('mustache').render;

/**
 * Copy the html to the build dir.
 */
gulp.task('html', function() {
  var tasks = config.dirs.map(function(dir) {
    var opts = { project: dir };
    return gulp.src(render(config.src, opts))
      .on('error', handleErrors)
      .pipe(gulp.dest(render(config.dest, opts)));
  });

  return merge(tasks);
});
