var express = require("express");
var users = require("./../models/UserSchema")
var register =require("./registerapi")
var login = require("./loginapi");
var router = express.Router();
router.use('/register', register);
router.use("/login",login);
// router.post("/insretdata",function (req, res) {
//     users.create(req.body, (err, resultat) => {
//         if (err) { res.send(err) };
//         res.send(resultat);
//     });
// });
router.get("/getusers",function (req,res) {
    users.find({},(err, resultat) =>{
        if(err) res.send(err);
        res.send(resultat)
    })
});
router.get("/getuser/:id",function (req,res) {
    users.findById(req.params.id,(err,resultat)=>{
        if(err) res.send(err);
        res.send(resultat);
    })
})
router.delete("/removeuser/:id",function (req,res) {
    users.findByIdAndRemove(req.params.id,(err,resultat)=>{
        if(err) res.send(err);
        res.send(resultat);
    })
})
router.put("/updateuser/:id",function (req,res) {
    users.findByIdAndUpdate(req.params.id,req.body,(err,resultat)=>{
        if(err) res.send(err);
        res.send(resultat);
    })
})

module.exports = router;
// function register(req, res, ) {
//     users.create(req.body, (err, resultat) => {
//                 if (err) { res.send(err) };
//                 res.send(resultat);
//             });
// }