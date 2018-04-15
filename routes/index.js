var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var checkAuth = require('../middleware/check-auth');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Notezy' });
});

/* GET college page. */
router.get('/colleges', function (req, res, next) {
  res.render('list-colleges');
});

/* GET feed page. */
router.get('/feed', checkAuth, function (req, res, next) {
  res.render('feed');
});

/* GET login/register page. */
router.get('/login', function (req, res, next) {
  res.render('login');
});

/* GET about us page. */
router.get('/aboutus', function (req, res, next) {
  res.render('aboutus');
});

/* GET profile page. */
router.get('/profile', checkAuth, function(req, res, next) {
  res.render('profile');
})

module.exports = router;