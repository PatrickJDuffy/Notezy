$(document).ready(function () {
  getColleges();

  /**
   * Retrieves the colleges from the database
   */
  function getColleges() {
    $.get("/colleges/getColleges", function (data) {
      var colleges = "";

      for (var i = 0; i < data.length; i++) {
        colleges += "<div id='collegewrap'><div class='container'><div class='row'><div class='col-lg-3'><img src='" + data[i].college_image + "'" + " class='img-thumbnail'> </div><div class='col-lg-5'><a href='/colleges/" + data[i].college_abbreviation + "'>"
        +
        "<h2 class='college'>" + data[i].college_name + "</h2>" +
        "<p>" + data[i].description + "</p></a></div><div class='col-lg-4'><div id='contentwrap'><h1>Find Your Courses</h1></div></div></div></div></div>"
    }


      if (colleges === "") {                                          //Alters the heading if there is no colleges
        $("#colleges").prev().text("There are currently no colleges!");
      }

      $("#colleges").html(colleges);
    });
  }
});