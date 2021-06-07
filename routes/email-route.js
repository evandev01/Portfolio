require('dotenv').config();
const router = require('express').Router();
const nodemailer = require('nodemailer');
// SendGrid
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  service: 'SendGrid',
  auth: {
    api_user: process.env.USERNAME,
    api_key: process.env.SENDGRID_API_KEY
  }
});

// Mail POST request
router.post('/send', async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const occupation = req.body.occupation;
  const subject = req.body.subject;
  const text = req.body.text;
  const content = `
      firstName: ${firstName} \n 
      lastName: ${lastName} \n
      email: ${email} \n 
      occupation: ${occupation} \n
      subject: ${subject} \n
      text: ${text} `;

  // Contact email object
  const mailObject = {
    from: 'evanbero@evandev.com',
    to: 'evanbero@evandev.com',
    subject: subject,
    text: content
  };

  console.log('this is the mail object sent:');
  console.log(mailObject);

  // Function to SEND EMAIL to SendGrid
  await transporter
    .sendMail(mailObject)
    .then(() => {
      res.json({
        status: 'success',
        data: mailOptions
      });
      console.log('Message sent: ' + info.response);
    })
    .catch(err => {
      res.json({
        status: 'fail',
        error: err
      });
      console.log('status:fail -- error: ' + err);
    });
});

module.exports = router;
