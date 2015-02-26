/**
 * This class acts as a data store for the courses. Each course is stored in an
 * object, being keyed by its unique ID.
 */
var CourseManager = function() {
  this.courses = {};
  this.eventHandlers = [];
  this.nextId = 1;
};

CourseManager.prototype = {
  /**
   * Return a list of every course.
   */
  all: function() {
    var object = this.courses;
    return Object.keys(object).map(function(key) {
      return object[key];
    });
  },

  onChange: function(func) {
    this.eventHandlers.push(func);
    return this;
  },

  /**
   * Create a new course, assigning it the next ID.
   */
  create: function(opts) {
    var dateCreated = opts.dateCreated instanceof Date ? opts.dateCreated : new Date(opts.dateCreated.replace((/\//g, '-')));
    var course = new Course(this.nextId, opts.name, opts.category, dateCreated, opts.description);
    this.courses[this.nextId] = course;
    this.nextId += 1;
    this.eventHandlers.map(function(handler) {
      handler(course);
    });
    return course;
  },

  /**
   * Find a course by its ID.
   */
  read: function(id) {
    var course = this.courses[id];

    if (course === null) {
      throw Errors.noSuchCourse(id);
    }

    return course;
  },

  /**
   * Update a course by its ID.
   */
  update: function(n, callback) {
    var course = this.read(n);

    callback(course);

    this.eventHandlers.map(function(handler) {
      handler(this);
    });

    return course;
  },

  /**
   * Destroy a course by its ID.
   */
  destroy: function(n) {
    var result = this.read(n);
    delete this.courses[n];
    this.eventHandlers.map(function(handler) {
      handler(this);
    });
    return result;
  }
};
