$(document).ready(function () {
  getPost();

  function getPost() {
    var path = window.location.pathname
    var fields = path.split('/')
    var post = fields[5].toUpperCase();

    $("#postName").text(post);
    $.get(path + '/getPost', function (data) {
      $('#post-title').html('<h2>' + data.post_title + '</h2>')
      $('#post-content').html('<p>' + data.post_content + '</p>')
    });
  }
});