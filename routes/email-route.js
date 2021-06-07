require('dotenv').config();
const router = require('express').Router();
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
// SendGrid
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const options = {
  auth: {
    api_user: process.env.USERNAME,
    api_key: process.env.SENDGRID_API_KEY
  }
};
const client = nodemailer.createTransport(sgTransport(options));

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
  await client
    .sendMail(mailObject)
    .then(() => {
      res.json({
        status: 'success',
        data: mailObject
      });
      console.log('Message sent: ' + info.res);
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
