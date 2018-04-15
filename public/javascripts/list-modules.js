$(document).ready(function () {
  getModules();
  
  /**
   * Retrieves the modules for that course from the databases
   */
  function getModules() { 
    $("a#modBack").attr("href", window.location.pathname);
    var path = window.location.pathname
    var fields = path.split('/')
    var course = fields[3].toUpperCase();      //Retrieves the course from the path name

    $("#courseName").text(course);
 
    $.get(path + "/getModules", function (data) {
      var modules = "";

      for (var i = 0; i < data.length; i++) {
        if (course === data[i].course_code) {                 //Only adds module that with the course in the path name
          modules += "<a href='" + path + "/" + data[i].module_code +
            "'><div class='panel panel-default'>" +
            "<div class='panel-heading'>" + data[i].module_name + "</div>" +
            "<div class='panel-body'>" + data[i].module_code + "</div></div></a>"
        }
      }

      $("#modules").html(modules);
    });
  }
});