/**
 * This class acts as a data store for the courses. Each course is stored in an
 * object, being keyed by its unique ID.
 */
class CourseManager {
  /**
   * Create a new CourseManager.
   */
  constructor() {
    this.courses = {};
    this.eventHandlers = [];
    this.nextId = 1;
  }

  /**
   * Return a list of every course.
   */
  all() {
    let object = this.courses;
    return Object.keys(object).map(function(key) {
      return object[key];
    });
  }

  /**
   * Add an on change handler.
   */
  onChange(func) {
    this.eventHandlers.push(func);
    return this;
  }

  /**
   * Create a new course, assigning it the next ID.
   */
  create(opts) {
    let dateCreated = opts.dateCreated instanceof Date ? opts.dateCreated : new Date(opts.dateCreated.replace((/\//g, '-')));
    let course = new Course(this.nextId, opts.name, opts.category, dateCreated, opts.description);
    this.courses[this.nextId] = course;
    this.nextId += 1;
    this.triggerHandlers();
    return course;
  }

  /**
   * Find a course by its ID.
   */
  read(id) {
    let course = this.courses[id];

    if (course === null) {
      throw Errors.noSuchCourse(id);
    }

    return course;
  }

  /**
   * Update a course by its ID.
   */
  update(n, callback) {
    let course = this.read(n);
    callback(course);
    this.triggerHandlers();
    return course;
  }

  /**
   * Destroy a course by its ID.
   */
  destroy(n) {
    let result = this.read(n);
    delete this.courses[n];
    this.triggerHandlers();
    return result;
  }


  triggerHandlers() {
    this.eventHandlers.map(handler => handler(this));
  }
}
