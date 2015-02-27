/**
 * Function to be executed when all of the page elements load.
 */
window.onload = function() {
  // Set up global state
  let manager = new CourseManager();
  let createModal = new EditModal('#create-modal', '#modal-submit',
    {
      inputCourseName: '',
      inputCourseCategory: '',
      inputCourseDateCreated: '',
      inputCourseDescription: '',
    },
    (name, category, created, description) => {
      manager.create({
        name: name,
        category: category,
        dateCreated: new Date(created),
        description: description
      });
    }
  );

  manager.onChange(function() {
    var courses = manager.all();
    var board = BoardPresenter.renderCourses(courses);
    $('#courses-table > tbody').replaceWith(board);
  });

  /**
   * Show window the global button handlers.
   */
  window.showCreateModal = () => createModal.show();
  window.destroyCourse = n => manager.destroy(n);
  window.showUpdateModal = n => {
    let course = manager.read(n);
    let modal = new EditModal('#create-modal', '#modal-submit',
      {
        inputCourseName: course.name,
        inputCourseCategory: course.category,
        inputCourseDateCreated: BoardPresenter.renderDate(course.dateCreated),
        inputCourseDescription: course.description,
      },
      (name, category, created, description) => {
        manager.update(n, () => {
          let newDate = (new Date($('#inputCourseDateCreated').val()));
          newDate.setDate(newDate.getDate() + 1);
          course.name = $('#inputCourseName').val();
          course.category = $('#inputCourseCategory').val();
          course.dateCreated = newDate;
          course.description = $('#inputCourseDescription').val();
        });
      }
    );

    modal.show();
  };

  /**
   * Populate dummy data.
   */
  let defaultCourses = [
    { name: 'Java 101'     , category: 'PROG', dateCreated: '1/1/2015', description: 'Wow'     },
    { name: 'MongoDB 101'  , category: 'DB'  , dateCreated: '2/1/2015', description: 'Good'    },
    { name: 'Express 101'  , category: 'PROG', dateCreated: '3/1/2015', description: 'Better'  },
    { name: 'AngularJS 101', category: 'WEB' , dateCreated: '4/1/2015', description: 'Best'    },
    { name: 'NodeJS 101'   , category: 'PROG', dateCreated: '5/1/2015', description: 'Awesome' }
  ];

  defaultCourses.map(course => manager.create(course));
};
