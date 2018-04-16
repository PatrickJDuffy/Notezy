$(document).ready(function () {
    var totalCharacters = 140;
    var showComments = true;

    /**
     * Calculates the remaining characters and changes the html label with #charRemaining
     */
    $("#commentForm").keyup(function (event) {
        var inputText = event.target.value;
        $("#charRemaining").html(totalCharacters - inputText.length);
    });
    getComments();

    /**
     * When the page loads (or is refreshed) we request all comments from the server
     */
    function getComments() {
        $.get("/comments/getComments", function(data) {
            var comments = "";

            for(var i = 0; i < data.length; i++) {
                comments += " <div id='comment'> <div class='row'> <div class='col-sm-8'>" + data[i].comment + "</div> <div class='col-sm-2'> <button type='button' name='" + data[i]._id + "' class='btn btn-success' id='e-btn'>Edit</button> </div> <div class='col-sm-2'>" + " <button type='button' name='" + data[i]._id + "' class='btn btn-danger' id='d-btn'>" + "Delete </button> </div> </div> </div> ";}

            $("#feedComments").html(comments);
            $("#count").html(data.length);

            if (!showComments)
                $("#feedComments").hide();
            else
                $("#feedComments").show();

            // Recursively call getComments every 10 seconds
            setTimeout(getComments, 10000);
        });
    }

    /**
   * Event handler for when the user submits a comment
   */
    $("#commentForm").submit(function(event) {
        event.preventDefault();

        var path = window.location.pathname;
        var domain = window.location.hostname;
        var port = window.location.port;
        var fields = path.split("/");
        var title = fields[5];

        if(event.target.inputComment.value) {
            $.post("/comments/addComment", {
                user_name: User,
                post_title: title,
                comment: event.target.inputComment.value,
                comment_link: "//" + domain + ":" + port + path,
            }, function (result) {
                $("#charRemaining").html(totalCharacters);
                event.target.reset();
                getComments();
            });
        } else {
            $('[data-toggle="popover"]').popover(); //Toggles a popover on the comment button
        }
    });

    /**
     * Determines which button to act on i.e. either the Edit or Delete button(MY VERSION)
     */
    $("#feedComments").click(function(event) {
        var name = event.target.name;   //Actually the comment id
        var id = event.target.id;       //This is the button element id

        if(name) {
            if(id === "e-btn") {
                updateComment(event);
            }
            else if(id === "d-btn") {
                deleteComment(name);
            }
        }
    });

    /**
     * Event handler for when the user edits a comment(MY VERSION)
     */
    function updateComment(event) {
        var newComment = "This is a new comment";
        var oldComment;
        
        $.get('/comments/getComment/' + event.target.name, function(data) {
            oldComment = data[0].comment;
        });


        if(newComment) {
            $.ajax({
                url: '/comments/updateComment/' + event.target.name,
                type: 'PUT',
                data: {comment: newComment},
                success: function(result) {
                    getComments();
                }
            });
        }   
    }

    /**
     * Event handler for when the user deletes a comment
     */
    function deleteComment(name) {
        $.ajax({
            url: '/comments/removeComment/' + name,
            type: 'DELETE',
            success: function(result) {
                getComments();
            }
        });
    }

    $("#btn-count").click(function(event) {
        var options = {};

        if (!showComments) {
            $("#feedComments").show("blind", options, 1000);
            showComments = true;
        }
        else {
            $("#feedComments").hide("blind", options, 1000);
            showComments = false;
        }
    });
});

