var mongoose = require("mongoose");
var todoSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.ObjectId, ref: 'user'},
    book:String
})
module.exports = mongoose.model("book", todoSchema) 