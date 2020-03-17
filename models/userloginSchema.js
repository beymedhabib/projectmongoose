var mongoose = require('mongoose');

var userlogin = new  mongoose.Schema({
    email:String,
    password:String,
})
module.exports = mongoose.model("userlogin", userlogin)