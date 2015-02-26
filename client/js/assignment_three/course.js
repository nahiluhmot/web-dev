/**
 * This object represents a Course. It contains validation and presentation
 * logic.
 */
var Course = function(id, name, category, dateCreated, description) {
  this.id = id;
  this.name = name;
  this.category = category;
  this.dateCreated = dateCreated;
  this.description = description;
};

/**
 * The list of valid categories.
 */
Course.VALID_CATEGORIES = ['PROG', 'DB', 'WEB'];

Course.prototype = {
  /**
   * Test if the caller is a valid Course, raising an InvalidCourseError
   * otherwise.
   */
  validate: function() {
    var errors = {};

    if ((typeof this.id !== 'number') || (this.id <= 0)) {
      errors.id = 'ID must be a positive integer';
    }

    if ((typeof this.name !== 'string') || (this.name === '')) {
      errors.name = 'Name must be a non-null String';
    }

    if (Course.VALID_CATEGORIES.indexOf(this.category) === -1) {
      errors.category = 'Category must be one of: ' + Course.VALID_CATEGORIES.join(', ');
    }

    if (!(this.dateCreated instanceof Date)) {
      errors.dateCreated = 'Date Created must be a valid date';
    }

    if ((typeof this.description !== 'string') || (this.description === '')) {
      errors.description = 'Description must be a non-null String';
    }

    if (Object.keys(errors).length > 0) {
      throw Errors.invalidCourse(errors);
    }
  },
};
