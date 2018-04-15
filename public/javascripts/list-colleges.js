$(document).ready(function () {
  getColleges();

  /**
   * Retrieves the colleges from the database
   */
  function getColleges() {
    $.get("/colleges/getColleges", function (data) {
      var colleges = "";

      for (var i = 0; i < data.length; i++) {
        colleges += "<div class='container'><a href='/colleges/" + data[i].college_abbreviation + "'>" + 
        "<figure class='figure'><img src='" + data[i].college_image + "' class='figure-img img-fluid rounded' " +
          "alt='A generic square placeholder image with rounded corners in a figure.'>" +
          "<figcaption class='figure-caption'>" + data[i].college_name + "</figcaption>" +
          "<p>" + data[i].description + "</p></figure></a></div>"
      }

      if(colleges === "") {                                          //Alters the heading if there is no colleges
        $("#colleges").prev().text("There are currently no colleges!");
      }

      $("#colleges").html(colleges);
    });
  }
});