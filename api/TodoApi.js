var express = require('express');
var todo = require("./../models/todoSchema");
var passport= require("passport");
const userloginSchema = require('../models/userloginSchema');
var router = express.Router();
var id = userloginSchema.getMaxListeners.id
router.post(`/addbook`,passport.authenticate('bearer', { session: false }),
function(req, res)  {
    todo.create(req.body, (err,resultat)=>{
        if(err) res.send(err);
        res.send(resultat);
    })
});
router.get("/getall/",function (req,res) {
    todo.find({},(err,resultat)=>{
        if(err) res.send(err);
        res.send(resultat);
    })
})
router.get("/getone/:id",function (req,res) {
    todo.findById(req.params.id,(err,resultat)=>{
        if(err) res.send(err);
        res.send(resultat);
    })
})
router.put("/updateone/:id",function (req,res) {
    todo.findByIdAndUpdate(req.params.id,req.body,(err,resultat)=>{
        if(err) res.send(err);
        res.send(resultat);
    })
})
router.delete("/deleteone/:id",function (req,res) {
    todo.findByIdAndRemove(req.params.id,(err,resultat)=>{
        if(err) res.send(err);
        res.send(resultat)
    })
})
module.exports = router;