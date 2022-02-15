var express = require('express');
var router = express.Router();
const nodemailer=require('nodemailer');
//async function main(){
//let testaccount=await nodemailer.createTestAccount();
let transpoter=nodemailer.createTransport({
  //host:"smtp.ethereal.email",
  service:'gmail',
  auth:{
    user:'shubhgana1617@gmail.com',
    pass:'shubham1617',
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
  
//main().catch(console.error);
/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.send('index', { title: 'Express' });
//});


module.exports = router;
