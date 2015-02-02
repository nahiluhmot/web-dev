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

gulp.task('css', function() {
  return gulp.src('./app/css/**/*.css')
    .pipe(gulp.dest('./build/css'));
});

gulp.task('vendored-css', function() {
  return gulp.src('./bower_components/bootstrap/dist/css/**/*')
    .pipe(gulp.dest('build/css'));
});

gulp.task('vendored-js', function() {
  return gulp.src(['./bower_components/bootstrap/dist/js/**/*', './bower_components/jquery/dist/**/*'])
    .pipe(gulp.dest('./build/js'));
});

gulp.task('vendored-fonts', function() {
  return gulp.src('./bower_components/bootstrap/dist/fonts/**/*')
    .pipe(gulp.dest('./build/fonts'));
});

gulp.task('vendored', ['vendored-css', 'vendored-js', 'vendored-fonts']);

gulp.task('build', ['html', 'css', 'vendored']);

gulp.task('watch', function() {
  gulp.watch('./app/html/**/*.html', ['html']);
  gulp.watch('./app/css/**/*.css', ['css']);
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
