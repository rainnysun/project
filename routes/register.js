var express = require('express');
var router = express.Router();
// var test = require('../models/test)
var user = require('../models/user');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register');
});



router.post('/',function (req,res) {

    if(req.body!=null){
        user.register({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            re_password:req.body.re_password
        },function(user){
            if(user=undefined){
                    // if(result.error != null ){
                    //     req.flash("error",result.error);
                    // }else {
                        req.flash("error","注册用户失败，稍后请重试");
                    // }
                    res.redirect('/register');
                }
                else {
                req.flash('注册成功');
                res.redirect('/login');
                }
        })
    }
});

    /*test.insertOne({
        "name": req.body.name,
        "email": req.body.email,
        "word":req.body.word,
        "reword":req.body.reword
    }, function (err, result) {
        if (result == undefined) {
            // req.flash('error', '请重新输入');
            res.redirect('/')
        } else {
            // req.flash('info','注册成功');
            res.redirect('/login');
        }
    });
});*/

module.exports = router;