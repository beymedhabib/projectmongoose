var express = require("express")
var nodemailer = require('nodemailer'); 
  var router = express.Router();
  
let mailTransporter = nodemailer.createTransport({ 
    service: 'Gmail', 
    auth: { 
        user: 'beymedhabib@gmail.com', 
        pass: 'haboub26413011'
    } 
}); 
  
router.post("/send", function (req,res) {
    let mailDetails = { 
        from: '<beymedhabib@gmail.com>', 
        to: '<beymedhabib@gmail.com>', 
        subject: 'Nodemail', 
        html: '<p>Hello!</p><p>Mail send working</p>',
        createTextFromHtml: true
    }; 
    mailTransporter.sendMail(mailDetails,(err, data)=> { 
          if(err) { 
              console.log('Error Occurs'); 
              res.send(err)
            } else { 
                console.log('Email sent successfully'); 
                res.send(data);
                res.send({
                    message:'mail send success!'
                })
            } 
        }); 
    })
        module.exports =router;