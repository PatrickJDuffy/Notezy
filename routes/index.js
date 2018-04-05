var express = require('express');
var router = express.Router();
var Comment = require('../models/comments');
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Notezy' });
});

/* GET feed page. */
router.get('/feed', function(req, res, next) {
    /*try {
        var jwtString = req.cookies.Authorization.split(" ");
        var profile = verifyJwt(jwtString[1]);
        if (profile) {
            res.render('feed');
        }
    }catch (err) {
        res.json({
            "status": "error",
            "body": [
                "You are not logged in."
            ]
        });
    }*/

    res.render('feed');
});

/**
 * Adds comments to our database
 */
router.post('/addComment', function(req, res, next) {   
    // Extract the request body which contains the comments
    comment = new Comment(req.body);
    comment.save(function (err, savedComment) {
        if(err)
            throw err;

        res.json({
            "id": savedComment._id
        });
    });
});

/**
 * Returns all comments from our database
 */
router.get('/getComments', function(req, res, next) {
    Comment.find({}, function (err, comments) {
        if (err)
            res.send(err);

        res.json(comments);
    });
});

/**
 * Returns a single comment from the database(MY VERSION)
 */
router.get('/getComment/:id', function(req, res, next) {
    var id = req.params.id;

    Comment.find({_id: id}, function(err, comment) {
        if(err){
            throw err;
        }

        res.json(comment);
    })
});

/**
  Updates a comment already in the database
 */
router.put('/updateComment/:id', function(req, res, next){
    var id = req.params.id;

    Comment.update({_id: id}, req.body, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

/**
 * Deletes a comment from the database
 */
router.delete('/removeComment/:id', function(req, res, next){
    var id = req.params.id;

    Comment.remove({_id:id}, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully removed the document"});
    });
});

/*
 Verifies a JWT
 */
function verifyJwt(jwtString) {

    var value = jwt.verify(jwtString, 'CSIsTheWorst');
    return value;
}

module.exports = router;