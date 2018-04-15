$(document).ready(function () {
  getPost();

  function getPost() {
    var path = window.location.pathname

    $.get(path + '/getPost', function (data) {
      $('#post-title').html('<h2>' + data.post_title + '</h2>')
      $('#post-content').html('<p>' + data.post_content + '</p>')
    });
  }
});