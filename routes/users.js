var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
const nodemailer=require('nodemailer');
//async function main(){
//let testaccount=await nodemailer.createTestAccount();
let transpoter=nodemailer.createTransport({
  //host:"smtp.ethereal.email",
  service:'gmail',
  auth:{
    user:'shubhgana1617@gmail.com',
    pass:'sh',
  }

});
var mailoptions={
  from:'shubhgana@gmail.com',
  to:'shubhamdsd007@gmail.com',
  subject:'sending email using nodejs',
  text:'that wasnt easy'
};
 transpoter.sendMail(mailoptions, function(err,info){
    if(err){
     console.log(err);
   }else{
     console.log('email sent:' + info);
   }
 });

module.exports = router;
