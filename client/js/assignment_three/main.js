/**
 * Function to be executed when all of the page elements load.
 */
window.onload = function() {
  // Set up global state
  var manager = new CourseManager();
  var defaultCourses = [
    { name: 'Java 101'     , category: 'PROG', dateCreated: '1/1/2015', description: 'Wow'     },
    { name: 'MongoDB 101'  , category: 'DB'  , dateCreated: '2/1/2015', description: 'Good'    },
    { name: 'Express 101'  , category: 'PROG', dateCreated: '3/1/2015', description: 'Better'  },
    { name: 'AngularJS 101', category: 'WEB' , dateCreated: '4/1/2015', description: 'Best'    },
    { name: 'NodeJS 101'   , category: 'PROG', dateCreated: '5/1/2015', description: 'Awesome' }
  ];

  manager.onChange(function() {
    var courses = manager.all();
    var board = BoardPresenter.renderCourses(courses);
    $('#courses-table > tbody').replaceWith(board);
  });

  defaultCourses.map(function(course) {
    manager.create(course);
  });

  // Set up callbacks for the window

  window.showCreateModal = function() {
    $('#create-modal').modal();
    $('#modal-submit').unbind('click');
    $('#modal-submit').click(function() {
      manager.create({
        name: $('#inputCourseName').val(),
        category: $('#inputCourseCategory').val(),
        dateCreated: new Date($('#inputCourseDateCreated').val()),
        description: $('#inputCourseDescription').val()
      });

      $('#create-modal').modal('hide');
    });

    document.getElementById('inputCourseName').value = '';
    document.getElementById('inputCourseCategory').value = '';
    document.getElementById('inputCourseDateCreated').value = '';
    document.getElementById('inputCourseDescription').value = '';
  };

  window.showUpdateModal = function(n) {
    var course = manager.read(n);

    $('#create-modal').modal();
    $('#modal-submit').unbind('click');
    $('#modal-submit').click(function() {
      manager.update(n, function(course) {
        var newDate = (new Date($('#inputCourseDateCreated').val()));
        newDate.setDate(newDate.getDate() + 1);
        course.name = $('#inputCourseName').val();
        course.category = $('#inputCourseCategory').val();
        course.dateCreated = newDate;
        course.description = $('#inputCourseDescription').val();
        $('#create-modal').modal('hide');
      });
    });

    document.getElementById('inputCourseName').value = course.name;
    document.getElementById('inputCourseCategory').value = course.category;
    document.getElementById('inputCourseDateCreated').value = BoardPresenter.renderDate(course.dateCreated);
    document.getElementById('inputCourseDescription').value = course.description;
  };

  window.destroyCourse = function(n) {
    manager.destroy(n);
  };
};
