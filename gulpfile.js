'use strict';

var browserify = require('browserify');
var finalhandler = require('finalhandler');
var gulp = require('gulp');
var http = require('http');
var rimraf = require('rimraf');
var serveStatic = require('serve-static');
var source = require('vinyl-source-stream');

gulp.task('clean', function(cb) {
  return rimraf('./build/', cb);
});

gulp.task('html', function() {
  return gulp.src('./app/html/**/*.html')
    .pipe(gulp.dest('./build/'));
});

gulp.task('vendored-css', function() {
  return gulp.src('./bower_components/bootstrap/dist/css/**/*')
    .pipe(gulp.dest('build/css/vendored'));
});

gulp.task('vendored-js', function() {
  return gulp.src('./bower_components/bootstrap/dist/js/**/*')
    .pipe(gulp.dest('build/js/vendored'));
});

gulp.task('vendored-fonts', function() {
  return gulp.src('./bower_components/bootstrap/dist/fonts/**/*')
    .pipe(gulp.dest('build/fonts/vendored'));
});

gulp.task('vendored', ['vendored-css', 'vendored-js', 'vendored-fonts']);

gulp.task('build', ['html', 'vendored']);

gulp.task('watch', function() {
  return gulp.watch('./app/html/**/*.html', ['html']);
});

gulp.task('serve', ['build', 'watch'], function() {
  var port = parseInt(process.env.PORT) || 3000;
  var serve = serveStatic('./build/', { index: ['index.html'] });
  var server = http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
  })

  server.listen(port);
});

gulp.task('default', ['build']);
