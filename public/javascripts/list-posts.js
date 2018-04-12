$(document).ready(function () {
  getPosts();

  /**
   * Retrieves the posts for that module from the databases
   */
  function getPosts() {
    var path = window.location.pathname
    var fields = path.split('/')
    var module = fields[4].toUpperCase();      //Retrieves the module from the path name

    $.get(path + "/getPosts", function (data) {
      var posts = "";

      for (var i = 0; i < data.length; i++) {
        if (module === data[i].module_code) {                 //Only adds posts that with the module in the path name
          posts += "<a href='/colleges'><div class='panel panel-default'>" +
            "<div class='panel-heading'>" + data[i].post_title + "</div>" +
            "<div class='panel-body'>" + data[i].post_content + "</div></div></a>"
        }
      }

      $("#list-posts").html(posts);
    });
  }
});