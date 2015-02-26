var getFolders = require('./util/getFolders.js');

var bowerDir = './bower_components/';
var buildDir = './build/';
var clientDir = './client/';
var gulpDir = './gulp/';

/**
 * Configuration for each task.
 */
module.exports = {
  clean: buildDir,
  html: {
    src: clientDir + 'html/**/*.html',
    dest: buildDir
  },
  js: {
    root: clientDir + 'js/',
    dest: buildDir + 'js/',
    dirs: getFolders(clientDir + 'js/')
  },
  lint: {
    src: [clientDir + 'js/**/*.js', gulpDir + 'js/**/*.js'],
    reporter: 'jshint-stylish'
  },
  less: {
    src: clientDir + 'less/**/*.less',
    dest: buildDir + 'css/',
    paths: [clientDir + 'less/includes/']
  },
  serve: {
    server: {
      baseDir: [buildDir]
    },
    files: [buildDir + '**/*']
  },
  vendored: {
    css: {
      src: bowerDir + 'bootstrap/dist/css/**/*',
      dest: buildDir + 'css/'
    },
    js: {
      src: [
        bowerDir + 'bootstrap/dist/js/**/*',
        bowerDir + 'jquery/jquery.min.js',
        bowerDir + 'jquery-ui/jquery-ui.min.js'
      ],
      dest: buildDir + 'js/'
    },
    fonts: {
      src: './bower_components/bootstrap/dist/fonts/**/*',
      dest: buildDir + 'fonts/'
    }
  }
};
