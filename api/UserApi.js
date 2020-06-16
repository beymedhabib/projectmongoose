var express = require("express");
var users = require("./../models/UserSchema")
var userlogin =require("./../models/userloginSchema")
var register =require("./registerapi")
var login = require("./loginapi");
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs")
var salt = bcrypt.genSaltSync(8) 
// router.use("/login",login);
// router.post("/insretdata",function (req, res) {
//     users.create(req.body, (err, resultat) => {
//         if (err) { res.send(err) };
//         res.send(resultat);
//     });
// });

// register
router.post("/register",(req,res)=>{
    console.log('feqgsdrfhtgjhj')
    users.create(req.body, (err, resultat) => {
                if (err) { res.send(err) };
                res.send(resultat);
            });
})
// login
router.post("/login",(req,res)=>{
    users.findOne({email: req.body.email  },(err,resultat)=>{
    const verif = bcrypt.compareSync(req.body.password, resultat.password);
    console.log(verif);
     if (err) {res.send(err);}
       else {
         // create a token
         if (verif === true) {
             var token = jwt.sign({
             exp: Math.floor(Date.now() / 1000) + (60 * 60),
               data: resultat
             }, 'secret');
             userlogin.create({token},(err,done)=>{
               res.send(done);
               console.log(token);
             })
         } else {
             console.log('mouch yemchi');
             res.send(err)  
         }
       }
     }); 
   })

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