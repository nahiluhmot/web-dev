var buildDir = './build/',
    appDir = './app/',
    bowerDir = './bower_components/';

/**
 * Configuration for each task.
 */
module.exports = {
  clean: buildDir,
  css: {
    src: appDir + 'css/**/*.css',
    dest: buildDir + 'css/'
  },
  html: {
    src: appDir + 'html/**/*.html',
    dest: buildDir
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
