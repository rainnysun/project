var mongodb=require('./db'); //引入db，也就是说引入数据库


//根据数据库写构造函数，一般和数据库集合名字一样
// Test（）函数   这里的test是对象
function Data(test) {
    this.id=test.id;
    this.name=test.name;
    this.email=test.email;
    this.word=test.word;
    this.reword=rest.reword;
}

module.exports=Data;


//查找所有数据
Data.findAll = function (callback) {
    mongodb.open(function (err,db) {
        if(err) return callback(err);
        db.collection('data',function (err,collection) {
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

//insertOne插入一条数据的方法
Data.insertOne=function (test,callback) {
    mongodb.open(function (err,db) {   //打开mongodb中的数据库
        if(err) callback(err);
        db.collection('data',function (err,collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.insertOne({
                name:test.name,
                email:test.email,
                word:test.word,
                reword:test.reword
            },function (err,result) {
                mongodb.close();
                if (err) return callback(err);
                if(result) return callback(null,result);
            });
        });
    });
};

//insertMany插入多条数据方法
Data.insertMany=function (testArray,callback) {
    mongodb.open(function (err,db) {
        if(err) return callback(err);
        db.collection('data',function (err,collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            var insertArray = new Array();
            for(var i in testArray){
                insertArray.push({
                    name:testArray[i].name,
                    email:testArray[i].email
                    });
            }
            collection.insertMany(insertArray,function (err,insertNumber) {
                mongodb.close();
                if(err) return callback(null,err);

            })
        })
    })
};


// Test的添加findOne查找一条数据方法
Data.findOne=function (test,callback) {
    mongodb.open(function (err,db) {   //打开mongodb中的数据库
        if(err) callback(err);
        db.collection('data',function (err,collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.findOne({
                email:test.email,
                word:test.word

            },function(err,user) {
                mongodb.close();
                if(user){
                    return callback(null,user);
                }
                callback(err);
            });
        });
    });
};

//deleteOne删除一条数据，deleteMany也是同理，删除多条数据
Data.deleteOne = function (where,callback) { //where是对象
    mongodb.open(function (err, db) {   //打开mongodb中的数据库
        if (err) callback(err);
        db.collection('data', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.deleteOne({
                email: where.email
                // password: test.word
            }, function (err, user) {
                mongodb.close();
                if (user) {
                    return callback(null, user);
                }
                callback(err);
            });
        });
    });
};



Data.findSort= function (where,callback) {
    mongodb.open(function (err, db) {   //打开mongodb中的数据库
        if (err) callback(err);
        db.collection('data', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.find().sort({age:-1}).toArray(function (err, user) {
                if(err) throw err;
                console.log(user);
                mongodb.close();

            });
        });
    });
};






