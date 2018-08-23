var express = require('express');
var router = express.Router();
var detail = require('../models/detail_insert');

/* GET home page. */
router.get('/', function(req, res, next) {
    detail.findAll(function (err, detail) {
        var sectionOne = [];
        for (var n in detail) {
            if (detail[n].type == "section1") {
                sectionOne.push(detail[n]);
            }
            if (detail[n].type == "section2") {
                sectionOne.push(detail[n]);
            }
            if (detail[n].type == "section3") {
                sectionOne.push(detail[n]);
            }
        }
        res.render('detail',{sectionOne: sectionOne});
    })
});

module.exports = router;