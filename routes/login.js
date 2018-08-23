var express = require('express');
var router = express.Router();
var test  = require('../models/test');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', {});
});

router.post('/',function (req,res) {
    test.findOne({
        "email": req.body.email,
        "password": req.body.word
    }, function (err, user) {
        if (user == undefined) {
            req.flash('error', '用户名或者密码不正确');
            return res.redirect('/login');
        } else {
            return res.redirect('/indexTwo');
        }
    });
});

module.exports = router;