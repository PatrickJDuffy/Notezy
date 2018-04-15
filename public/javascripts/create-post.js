$(document).ready(function () {
  /**
   * Event handler for when the user submits a post
   */
  $("#postForm").submit(function (event) {
    event.preventDefault();

    var path = window.location.pathname;
    var fields = path.split("/");
    var module = fields[4];                           //Module code
    var route = path.replace("/createPost", "");      //Route for the POST request
    var file = document.getElementById("inputPostFile").files[0];
    console.log(file);

    if (event.target.inputPostTitle.value && event.target.inputPostDesc.value) {
      $.post(route + "/addPost", {
        user_name: User,
        module_code: module,
        post_title: event.target.inputPostTitle.value,
        post_content: event.target.inputPostDesc.value,
        //post_file: file
      }, function (result) {
        $(location).attr("href", route + "/" + event.target.inputPostTitle.value);    //Redirects to the page the post was created
      });
    }
  });
});