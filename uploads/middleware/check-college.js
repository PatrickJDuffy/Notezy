var College = require('../models/colleges');

module.exports = function (req, res, next) {
  var collegeName = req.params.college_name;

  College.findOne({ college_abbreviation: collegeName.toUpperCase() }, function (err, college) {
    if (err)
      res.status(500).json(err);

    if (college) {                    //Checks to see if the college exists
      next();
    } else {
      res.status(500).json({
        status: "College doesn't exist"
      })
    }
  });
};