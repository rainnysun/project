var mongodb=require('./db'); //引入db，也就是说引入数据库


//根据数据库写构造函数，一般和数据库集合名字一样
// Test（）函数   这里的test是对象
function Index_image(picture) {
    this.id=picture.id;
    this.type=picture.type;
    this.image=picture.image;
    this.title=picture.title;
    this.message=picture.message;
}


module.exports=Index_image;


//查找所有数据
Index_image.findAll = function (callback) {
    mongodb.open(function (err,db) {
        if(err) return callback(err);
        db.collection('index_image',function (err,collection) {
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
Index_image.findPage=function (skip,callback) {
    mongodb.open(function (err, db) {
        if (err) return callback(err);
        db.collection('index_image',function (err, collection) {
            if (err) {mongodb.close(); return callback(err);}
            collection.find().skip(4).limit(2).toArray(function (err,result) {
                mongodb.close();
                if(err) return callback(err);
                return callback(null,result );
            })
        })
    })
};
