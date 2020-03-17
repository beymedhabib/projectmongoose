var express = require("express");
var users = require("./../models/UserSchema")
var userlogin =require("./../models/userloginSchema")
var router = express.Router();

router.post("/login",(req,res)=>{
    userlogin.create( users.findOne((req.body.email&&req.body.password),(err,resultat)=>{
        if (err) res.send(err);
        res.send(resultat);
        console.log("workin");
        // (req.body)
    
    }))
})

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
