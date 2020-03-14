var mongoose = require('mongoose');

var users = new  mongoose.Schema({
    email:String,
    password:String,
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: 'book'}]
})
module.exports = mongoose.model("user", users)