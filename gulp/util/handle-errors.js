var notify = require('gulp-notify');

/**
 * Notify gulp that an error has occurred and complete the stream.
 */
module.exports = function() {
  var args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  this.emit('end');
};
