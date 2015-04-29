var bodyParser = require('body-parser');
var express = require('express');
var app = express();

/**
 * Initial list of courses (none);
 */
var courses = [];

/**
 * Use a custom middleware for basic functionality.
 */
app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  return next();
});

/**
 * Parse JSON.
 */
app.use(bodyParser.json());

/**
 * Return a JSON listing of the courses.
 */
app.get('/api/course/', function(req, res) {
  console.log('Returning a listing of every course');
  res.status(200);
  res.send(courses);
});

/**
 * Find a course by its id.
 */
app.get('/api/course/:id/', function(req, res, next) {
  var id = req.params.id;
  console.log('Looking up course with id: ' + id);

  if ((typeof id === 'number') && (id >= 0) && (id < courses.length) && (courses[id] !== null)) {
    console.log('Found course with id: ' + id);
    console.log(courses[id]);

    res.status(200);
    res.send(courses[id]);
  } else {
    console.log('Unable to find course with id: ' + id);

    res.status(404);
    next();
  }
});

/**
 * Create a new course.
 */
app.post('/api/course/', function(req, res, next) {
  var body = req.body;
  console.log('Creating a new course with the following body:');
  console.log(body);

  if (typeof body === 'object') {
    console.log('The body is an object, creating the course');
    res.status(201);
    body.id = courses.length;
    courses.push(body);
    res.send(courses);
  } else {
    console.log('The body is not an object, cannot create course');
    res.status(400);
    next();
  }
});

/**
 * Update a course by its id.
 */
app.put('/api/course/:id/', function(req, res, next) {
  var id = parseInt(req.params.id, 10);
  var body = req.body;

  console.log('Updating the course with id ' + id + ' to have tho following body:');
  console.log(body);

  if ((typeof id === 'number') && (id >= 0) && (id < courses.length) && (courses[id] !== null)) {
    console.log(id  + ' is the ID of a valid course');

    if (typeof body === 'object') {
      console.log('The body is an object, updating the course');
      res.status(200);
      body.id = id;
      courses[id] = body;
      res.send(courses);
    } else {
      console.log('The body is not object, cannot update the course');
      res.status(400);
      next();
    }
  } else {
    console.log('No course found with id: ' + id);
    console.log(courses);
    res.status(404);
    next();
  }
});

/**
 * Update a course by its id.
 */
app.delete('/api/course/:id/', function(req, res, next) {
  var id = parseInt(req.params.id, 10);

  console.log('Deleting course with id: ' + id);
  if ((typeof id === 'number') && (id >= 0) && (id < courses.length) && (courses[id] !== null)) {
    console.log(id + ' is valid, deleting course');
    res.status(204);
    courses[id] = null;
    res.send('');
  } else {
    console.log(id + ' is not valid, cannot delete the course');
    res.status(404);
    next();
  }
});

/**
 * Listen on port 4567.
 */
app.listen(4567, function() {
  console.log('Listening on port 4567...');
});
