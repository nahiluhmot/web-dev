/**
 * This object is used to transform courses (and lists of courses) into an HTML
 * representation.
 */
var BoardPresenter = {
  /**
   * Render the list of courses into a table body.
   */
  renderCourses(courses) {
    return [
      '<tbody>',
        courses.map(BoardPresenter.renderCourse).join(''),
      '</tbody>'
    ].join('');
  },

  /**
   * Render the given course into a table row.
   */
  renderCourse(course) {
    return [
      '<tr class="course">',
        '<td class="courseName">',
          course.name,
        '</td>',
        '<td class="courseCategory">',
          course.category,
        '</td>',
        '<td class="courseDateCreated">',
          BoardPresenter.renderDate(course.dateCreated),
        '</td>',
        '<td class="courseDescription">',
          course.description,
        '</td>',
        '<td class="button-cell">',
          '<button type="button" class="btn btn-lg btn-primary" onclick="showUpdateModal(' + course.id + ')">',
            '<span class="glyphicon glyphicon-pencil custom-glyph"></span>',
          '</button>',

          '<button type="button" class="btn btn-lg btn-danger" onclick="destroyCourse(' + course.id + ')">',
            '<span class="glyphicon glyphicon-remove custom-glyph"></span>',
          '</button>',
        '</td>',
      '</tr>'
    ].join('');
  },

  /**
   * Render the given date into the following format: YYYY-MM-DD.
   */
  renderDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }
};
