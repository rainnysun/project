var express = require('express');
var router = express.Router();
var test = require('../models/test');

/* GET home page. */
router.get('/', function(req, res, next) {
    /*test.insertOne({
        "name": '5555',
        "email": '5555'
    },function (err) {
        console.log(err);
    });*/
    /*test.deleteOne({
        "email": "1111@123"
    },function (err) {
        console.log(err);
    });*/

    test.findSort(function (err, user) {
        console.log(user);
    });

    /*test.insertMany([
        {
            email:"123",
            age:"10"
        },
        {
            email:"1234",
            age:"20"
        },
        {
            email:"12345",
            age:"20"
    }],function (err) {
        console.log(err);
    });*/


    //查询所有数据
    /*test.findAll(function (err, result) {
        console.log(result);
    });*/
    res.render('index', { title: '哎呀！出错了'});
});

module.exports = router;
