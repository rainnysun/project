var mongodb=require('./db'); //引入db，也就是说引入数据库


//根据数据库写构造函数，一般和数据库集合名字一样
// Test（）函数   这里的test是对象
function hotel(text) {
    this.id=text.id;
    this.type=text.type;
    this.siteOne=text.siteOne;
    this.siteTwo=text.siteTwo;
    this.image=text.image;
    this.icon1=text.icon1;
    this.icon2=text.icon2;
    this.icon3=text.icon3;
    this.price=text.price;
}


module.exports=hotel;


//查找所有数据
hotel.findAll = function (callback) {
    mongodb.open(function (err,db) {
        if(err) return callback(err);
        db.collection('hotel',function (err,collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.find({}).toArray(function (err,result) {
                mongodb.close();
                if(err) return callback(err);
                return callback(null,result);
            })
        })
    })
};

//findPage
hotel.findPage=function (skip,callback) {
    mongodb.open(function (err, db) {
        if (err) return callback(err);
        db.collection('hotel',function (err, collection) {
            if (err) {mongodb.close(); return callback(err);}
            collection.find().skip(parseInt(skip)).limit(2).toArray(function (err,result) {
                mongodb.close();
                if(err) return callback(err);
                return callback(null,result );
            })
        })
    })
};