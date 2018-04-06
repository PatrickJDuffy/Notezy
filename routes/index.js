var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Notezy' });
});

/* GET feed page. */
router.get('/feed', function (req, res, next) {
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

/*
 Verifies a JWT
 */
function verifyJwt(jwtString) {

    var value = jwt.verify(jwtString, 'CSIsTheWorst');
    return value;
}

module.exports = router;