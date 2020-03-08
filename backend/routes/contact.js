const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const user = require('../config');

const transport = {
  host: 'smtp-mail.outlook.com.', // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  auth: { user: user.USER, pass: user.PASS }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


router.post('/send', (request, response) => {
  const {name, email, subject, message} = request.body;
  const content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `

  const mail = {
    from: name,
    to: 'aminbensalem@outlook.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err)
      response.status(500).json({
        status: 'fail'
      })
    } else {
      response.status(200).json({
       status: 'success'
      })
    }
  })
})


module.exports = router;
