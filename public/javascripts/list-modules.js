$(document).ready(function () {
  getModules();

  /**
   * Retrieves the modules for that course from the databases
   */
  function getModules() {
    var path = window.location.pathname
    var fields = path.split('/')
    var course = fields[3].toUpperCase();      //Retrieves the course from the path name

    $.get(path + "/getModules", function (data) {
      var modules = "";

      for (var i = 0; i < data.length; i++) {
        if (course === data[i].course_code) {                 //Only adds module that have the course in the path name
          modules += "<a href='" + path + "/" + data[i].module_code +
            "'><div class='panel panel-default'>" +
            "<div class='panel-heading'>" + data[i].module_name + "</div>" +
            "<div class='panel-body'>" + data[i].module_code + "</div></div></a>"
        }
      }

      if(modules === "") {                                          //Alters the heading if there is no modules
        $("#modules").prev().text("There are currently no modules for this course!");
      }

      $("#modules").html(modules);
    });
  }
});