var express = require("express");
var router = express.Router();
var cron = require('node-cron');
 
cron.schedule('*/2 * * * *', () => {
  console.log('running a task every two minutes');
});
module.exports = router;