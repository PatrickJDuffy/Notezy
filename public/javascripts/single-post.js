$(document).ready(function () {
  getPost();

  /**
   * Retrieves the details of the post
   */
  function getPost() {
    var path = window.location.pathname

    $.get(path + '/getPost', function (data) {
      var date = new Date(data.date_created);
      var files = "";

      for (var i = 0; i < data.post_file.length; i++) {
        var fileName = data.post_file[i].substr(data.post_file[i].indexOf(' ') + 1);;

        files += "<a href='//danu7.it.nuigalway.ie:8695/" + data.post_file[i] +
          "' class='list-group-item' download>" + fileName + "</a>";
      }

      $('#post-title').html('<h2>' + data.post_title + '</h2>')
      $('#post-content').html('<p>' + data.post_content + '</p>')
      $('#post-files').html(files);
      $('#post-footer').html("<footer class='text-info'> - Posted by " + data.user_name + " on " + date.toDateString() + "</footer>");
    });
  }
});