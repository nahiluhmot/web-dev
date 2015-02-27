/**
 * This Object holds the functions to throw errors
 */
var Errors = {
  /**
   * Thrown when an invalid course is created.
   */
  invalidCourse(errors) {
    return {
      type: 'InvalidCourseError',
      errors: errors
    };
  },

  /**
   * Thrown when an invalid course id is referenced.
   */
  noSuchCourse(id) {
    return {
      type: 'NoSuchCourseError',
      id: id
    };
  }
};
