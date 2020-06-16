var express = require("express");
var jsonparser = require("body-parser")
var nodeMailer = require('nodemailer')
var db = require("./db/database")
var userapi = require('./api/UserApi')
var todos = require('./api/TodoApi')
var AffectTodoTouser = require("./api/AffectTodoToUser")
var DeleleTodoFromUser =require("./api/DeleteTodoFromUser")
var mail = require("./api/mail")
var img = require("./api/imageapi")
var run = require("./api/run")
var passport = require("./api/passport")
var path = require('path')
var cors = require('cors')
 
// var router = express.Router();
var app = express();

app.use(jsonparser.json())
app.use(jsonparser.urlencoded({extended:false}))
app.use(cors()); 

// app.use(passport.initialize());
// app.use(passport.session());
app.use("/users", userapi);
app.use("/todos", todos);
app.use("/AffectTodoTouser", AffectTodoTouser);
app.use("/DeleteTodoFromUser", DeleleTodoFromUser)
app.use("/mail",mail)
app.use("/img",img)
app.use("/run",run)

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
// app.use("/passport",passport)
// app.use(passport.initialize());
// app.use(passport.session());

app.listen(3000);