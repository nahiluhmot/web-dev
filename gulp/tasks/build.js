var gulp = require('gulp');

/**
 * Force a build of each dependency.
 */
gulp.task('build', ['html', 'less', 'vendored']);
