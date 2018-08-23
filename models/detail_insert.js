var mongodb=require('./db'); //引入db，也就是说引入数据库


//根据数据库写构造函数，一般和数据库集合名字一样
// Test（）函数   这里的test是对象
function detail(text) {
    this.id=text.id;
    this.type=text.type;
    this.title=text.title;
    this.parphy1=text.parphy1;
    this.parphy2=text.parphy2;
    this.parphy3=text.parphy3;
    this.parphy4=text.parphy4;
}


module.exports=detail;


//查找所有数据
detail.findAll = function (callback) {
    mongodb.open(function (err,db) {
        if(err) return callback(err);
        db.collection('detail',function (err,collection) {
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