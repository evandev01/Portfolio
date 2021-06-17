require('dotenv').config();
const router = require('express').Router();

// SendGrid
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const options = {
  host: process.env.SENDGRID_HOST,
  port: process.env.SENDGRID_PORT,
  auth: {
    api_user: process.env.SENDGRID_USERNAME,
    api_key: process.env.SENDGRID_PASSWORD
  }
};
const client = nodemailer.createTransport(sgTransport(options));

// Single Send Email POST request
router.post('/send', async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const senderEmail = req.body.senderEmail;
  const occupation = req.body.occupation;
  const subject = req.body.subject;
  const text = req.body.text;
  const content = `
      firstName: ${firstName} \n 
      lastName: ${lastName} \n
      email: ${senderEmail} \n 
      occupation: ${occupation} \n
      subject: ${subject} \n
      text: ${text} `;
  //https://api.sendgrid.com/v3/mail/send

  // Email object
  const email = {
    from: 'evanbero@evandev.com',
    to: 'evanbero@evandev.com',
    subject: subject,
    text: content,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };

  await client.sendMail(email, (err, info) => {
    if (err) {
      console.log(error);
      res.json({
        status: 'fail',
        error: err
      });
    } else {
      console.log('Message sent: ' + info.response);
      res.json({
        status: 'success',
        data: msg
      });
    }
  });

  // Function to SEND EMAIL to SendGrid
  //   await sgMail
  //     .send(msg)
  //     .then(() => {
  //       console.log('Email sent');
  //       console.log(msg);
  //       res.json({
  //         status: 'success',
  //         data: msg
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.json({
  //         status: 'fail',
  //         error: err
  //       });
  //     });
});

module.exports = router;
