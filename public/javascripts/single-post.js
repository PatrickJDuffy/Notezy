$(document).ready(function () {
  getPost();

  /**
   * Retrieves the details of the post
   */
  function getPost() {
    var path = window.location.pathname;
    var domain = window.location.hostname;
    var port = window.location.port;

    $.get(path + '/getPost', function (data) {
      var date = new Date(data.date_created);       //Date the post was created
      var files = "";

      if(data.post_file.length > 0) {                 //Shows the container that contains any attached files if there is any
        $('#post-files-cont').removeClass('hide');
      }

      for (var i = 0; i < data.post_file.length; i++) {
        var fileName = data.post_file[i].substr(data.post_file[i].indexOf(' ') + 1);;

        files += "<a href='//" + domain + ":" + port + "/" + data.post_file[i] +
          "' class='list-group-item' download>" + fileName + "</a>";
      }

      //Shows the post
      $('#post-title').html('<h2>' + data.post_title + '</h2>')
      $('#post-content').html('<p>' + data.post_content + '</p>')
      $('#post-files').html(files);
      $('#post-footer').html("<footer class='text-info'> - Posted by " + data.user_name + " on " + date.toDateString() + "</footer>");
    });
  }
});