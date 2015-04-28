var getDirs = require('./util/get-dirs.js');

var bowerDir = './bower_components/';
var buildDir = './build/';
var clientDir = './client/';
var gulpDir = './gulp/';
var vendoredDir = buildDir + 'vendored/';
var subProjects = getDirs(clientDir);

/**
 * Configuration for each task.
 */
module.exports = {
  clean: buildDir,
  html: {
    dirs: subProjects,
    src: clientDir + '{{project}}/html/**/*.html',
    dest: buildDir + '{{project}}/html'
  },
  js: {
    src: clientDir + '{{project}}/js/**/*.js',
    dest: buildDir + '{{project}}/js/',
    dirs: subProjects
  },
  lint: {
    src: [clientDir + '**/*.js', gulpDir + 'js/**/*.js'],
    jshintOpts: {
      esnext: true
    },
    reporter: 'jshint-stylish'
  },
  less: {
    dirs: subProjects,
    src: clientDir + '{{project}}/less/**/*.less',
    dest: buildDir + '{{project}}/css',
    paths: [clientDir + '{{project}}/less/includes/']
  },
  link: {
    src: buildDir + 'index/html/index.html',
    dest: buildDir + 'index.html'
  },
  serve: {
    server: {
      baseDir: [buildDir]
    },
    files: [buildDir + '**/*']
  },
  vendored: {
    css: {
      src: [
        bowerDir + 'bootstrap/dist/css/**/*',
        bowerDir + 'flat-ui/dist/css/flat-ui.min.css'
      ],
      dest: vendoredDir + 'css/'
    },
    js: {
      src: [
        bowerDir + 'bootstrap/dist/js/**/*',
        bowerDir + 'flat-ui/dist/js/flat-ui.min.js',
        bowerDir + 'jquery/jquery.min.js',
        bowerDir + 'jquery-ui/jquery-ui.min.js'
      ],
      dest: vendoredDir + 'js/'
    },
    fonts: {
      src: [
        bowerDir + 'bootstrap/dist/fonts/**/*',
        bowerDir + 'flat-ui/dist/fonts/**/*'
      ],
      dest: vendoredDir + 'fonts/'
    }
  },
  watch: {
    html: clientDir + '**/*.html',
    less: clientDir + '**/*.less',
    js: clientDir + '**/*.js',
  }
};
