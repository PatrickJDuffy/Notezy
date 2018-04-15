$(document).ready(function () {
  getCourses();

  /**
   * Retrieves the courses for that college from the databases
   */
  function getCourses() {
    var path = window.location.pathname
    var fields = path.split('/')
    var college = fields[2].toUpperCase();      //Retrieves the college from the path name

    $.get(path + "/getCourses", function (data) {
      var courses = "";

      for (var i = 0; i < data.length; i++) {
        if (college === data[i].college_abbreviation) {         //Only adds courses that with the college in the path name
          courses += "<a href='" + path + "/" +
            data[i].course_code + "'><div class='panel panel-default'>" +
            "<div class='panel-heading'>" + data[i].course_name + "</div>" +
            "<div class='panel-body'>" + data[i].course_code + "</div></div></a>"
        }
      }

      if(courses === "") {                                          //Alters the heading if there is no courses
        $("#courses").prev().text("There are currently no courses for this college!");
      }

      $("#courses").html(courses);
    });
  }
});