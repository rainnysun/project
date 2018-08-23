var express = require('express');
var router = express.Router();
var hotel = require('../models/hotel');

/* GET home page. */
router.get('/', function(req, res, next) {
    hotel.findAll(function (err, hotel) {
        var hotelSection = [];
        for (var n in hotel) {
            if (hotel[n].type == "1") {
                hotelSection.push(hotel[n]);
            }
        }
        res.render('hotel',{hotelSection:hotelSection});
    })
});



router.post('/postAjax',function(req,res){
    if(global.isFlag != 1){
        global.isFlag = 1;
        hotel.findPage(req.body.skip,function(err,result){
            if(err) return result.json(err);
            global.isFlag = 0;
            return res.json(result);
        });
    }else{
        return res.json(null);
    }
});


module.exports = router;