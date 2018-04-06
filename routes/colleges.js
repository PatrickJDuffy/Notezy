var express = require('express');
var router = express.Router();
var College = require('../models/colleges');

/**
 * Returns a single college from our database(MY VERSION)
 */
router.get('/getCollege/:id', function (req, res, next) {
    var id = req.params.id;

    College.find({ _id: id }, function (err, college) {
        if (err)
            res.status(500).json(err);

        res.status(200).json(college);
    })
});

/**
 * Returns all colleges from our database
 */
router.get('/getColleges', function (req, res, next) {
    College.find({}, function (err, colleges) {
        if (err)
            res.status(500).json(err);

        res.status(200).json(colleges);
    });
});

/**
 * Adds colleges to our database
 */
router.post('/addCollege', function (req, res, next) {
    // Extract the request body which contains the colleges
    var college = new College(req.body);

    college.save(function (err, savedCollege) {
        if (err)
            res.status(500).json(err);

        res.status(405).json({
            status: "Successfully added the college",
            id: savedCollege._id
        });
    });
});

/**
  Updates a college already in the database
 */
router.put('/updateCollege/:id', function (req, res, next) {
    var id = req.params.id;

    College.update({ _id: id }, req.body, function (err) {
        if (err)
            res.status(500).json(err);

        res.status(405).json({
            status: "Successfully updated the college"
        });
    });
});

/**
 * Deletes a college from the database
 */
router.delete('/removeCollege/:id', function (req, res, next) {
    var id = req.params.id;

    College.remove({ _id: id }, function (err) {
        if (err)
            res.status(500).json(err);

        res.json({
            status: "Successfully removed the college"
        });
    });
});

module.exports = router;