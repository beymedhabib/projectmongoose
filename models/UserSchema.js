var mongoose = require('mongoose');
var bcrypt = require("bcryptjs")
var passport = require('passport');
var passportLocalMongoose = require('passport-local-mongoose');

var users = new  mongoose.Schema({
    email:String,
    password:String,
    profileImage: String,
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: 'book'}]
})
users.plugin(passportLocalMongoose);

users.pre('save', function(next) {                                                                                                                                        
    if(this.password) {                                                                                                                                                        
        var salt = bcrypt.genSaltSync(10)                                                                                                                                     
        this.password  = bcrypt.hashSync(this.password, salt)                                                                                                                
    }                                                                                                                                                                          
    next()                                                                                                                                                                     
})  
module.exports = mongoose.model("user", users)