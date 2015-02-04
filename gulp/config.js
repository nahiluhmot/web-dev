var buildDir = './build/',
    appDir = './app/',
    bowerDir = './bower_components/';

/**
 * Configuration for each task.
 */
module.exports = {
  clean: buildDir,
  html: {
    src: appDir + 'html/**/*.html',
    dest: buildDir
  },
  less: {
    src: appDir + 'less/**/*.less',
    dest: buildDir + 'css/',
    paths: [appDir + 'less/includes/']
  },
  serve: {
    port: parseInt(process.env.PORT) || 1337,
    root: buildDir,
    index: 'index.html'
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
