var express = require('express');
var router = express.Router();
var index_image = require('../models/insert_pic');

/* GET home page. */
router.get('/', function(req, res, next) {
    index_image.findAll(function (err, index_image) {
        var inlandPic = [];
        var worldPic = [];
        for (var i in index_image) {
            if(index_image[i].type == "inland"){
                inlandPic.push(index_image[i]);
            }
            if (index_image[i].type == "world") {
                worldPic.push(index_image[i]);
            }
        }
        res.render('indexTwo',{inlandPic:inlandPic,worldPic:worldPic});
    });
});

router.post('/postAjax',function (req,res) {
    index_image.findPage(req.body.skip,function (err,result) {
        res.json(result);
    });
});


module.exports = router;