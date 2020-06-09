var express = require("express");
var users = require("./../models/UserSchema")
var userlogin =require("./../models/userloginSchema")
var jwt = require('jsonwebtoken');
var router = express.Router();
var bcrypt = require("bcryptjs")
var salt = bcrypt.genSaltSync(10) 
router.post("/login",(req,res)=>{
     users.findOne({email: req.body.email,password: bcrypt.hashSync(req.body.password, salt)  },(err,resultat)=>{
      console.log(bcrypt.hashSync(req.body.password, salt));
      
      if (err) {res.send(err);}
        // if (err) { res.send("There was a problem registering the user.")}
        // res.send(resultat);
        // console.log("workin");
        // (req.body)
        else {
          // create a token
          var token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: resultat
          }, 'secret');
          userlogin.create({token},(err,done)=>{
            res.send(done);
            console.log(token);
          })
          // res.send(resultat)
        }
        // ({token})
      }); 
    })
// })
module.exports = router;

// function authenticate({ username, password }) {
//     const user = await users.findOne({ username });
//     if (user && bcrypt.compareSync(password, user.hash)) {
//         const { hash, ...userWithoutHash } = user.toObject();
//         const token = jwt.sign({ sub: user.id }, config.secret);
//         return {
//             ...userWithoutHash,
//             token
//         };
//     }
// }
