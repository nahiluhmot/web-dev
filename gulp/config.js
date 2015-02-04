var buildDir = './build/',
    clientDir = './client/',
    bowerDir = './bower_components/';

/**
 * Configuration for each task.
 */
module.exports = {
  clean: buildDir,
  html: {
    src: clientDir + 'html/**/*.html',
    dest: buildDir
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
        bowerDir + 'jquery/dist/**/*'
      ],
      dest: buildDir + 'js/'
    },
    fonts: {
      src: './bower_components/bootstrap/dist/fonts/**/*',
      dest: buildDir + 'fonts/'
    }
  }
};
