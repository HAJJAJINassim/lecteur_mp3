const mongoose = require("mongoose");

var schema = mongoose.Schema;
var UserSchema = new schema({
    name:{required:true,type:String},
    email:{type:String,unique:true},
    password:{type:String}
});

const UserModel = mongoose.model('UserModel',UserSchema,'User');
module.exports = UserModel;