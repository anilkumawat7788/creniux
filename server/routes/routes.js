const { response } = require('express');
const express= require('express');
const router =  express.Router()
// const nodemailer =require('nodemailer');
const Myregister =  require('../models/SignUpModels')
router.post('/signup', (request, response) => {
    const signedUpUser = new Myregister({
        fullname:request.body.fullname,
        email:request.body.email,
        message:request.body.message,
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })



    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>fullname: ${request.body.fullname} </li>
    <li>email: ${request.body.email} </li>
    </ul>
    <h3>Message</h3>
    <p>${request.body.message}</p> `;
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'anilkumawatk881@gmail.com', // generated ethereal user
        pass: '123abc', // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
    
    // send mail with defined transport object
    let mailOptions = {
      from: '"nodemailer contact" <anilkumawatk881@gmail.com>', // sender address
      to: "anilkumawat791@gmail.com", // list of receivers
      subject: "Node contact Request", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    };
    //send mail with default transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)) 
    });


})
module.exports =  router;