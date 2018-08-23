var mongodb = require('./db');
var result = require('./result');

function Data(user) {
    this._id =user._id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.word;
    this.reword = user.re_password;
    this.user_id = user.user_id;
}

module.exports = Data;

Data.register = function (user,callback) {
    mongodb.open(function (err,db) {
        if(err) return callback(result({
            err: err,
            isSuccess:0
        }));
        db.collection('data',function (err,collection) {
            if(err){
                mongodb.close();
                return callback(result({
                    err: err,
                    isSuccess:0
                }));
            }
            collection.findOne({
                name:user.name,
                email:user.email,
                password:user.password,
                reword:user.re_password
            },function (err,user) {
                if (user != null) {
                    mongodb.close();
                    req.flash('error', '注册错误');
                    return res.redirect('/');
                } else {
                    return callback(result({
                        error: "用户已存在",
                        isSuccess: 0
                    }))
                }
            });
            collection.insertOne({
                name:user.name,
                email:user.email,
                password:user.password,
                reword:user.re_password,
                user_id:user.user_id
            },function (err,info) {
                mongodb.close();
                return callback(result({
                    err:err,
                    info:info,
                    isSuccess:err == null && info.insertedCount == 1 ? 1 :0
                    }));
                });
            });
        });
};