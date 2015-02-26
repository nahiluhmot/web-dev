/**
 * This Object holds the functions to throw errors
 */
var Errors = {
  /**
   * Thrown when an invalid course is created.
   */
  invalidCourse: function(errors) {
    return {
      type: 'InvalidCourseError',
      errors: errors
    };
  },

  /**
   * Thrown when an invalid course id is referenced.
   */
  noSuchCourse: function(id) {
    return {
      type: 'NoSuchCourseError',
      id: id
    };
  }
};
