require('dotenv').config();
const router = require('express').Router();

// SendGrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Single Send Email POST request
router.post('/', async (req, res) => {
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

  // Email object
  const msg = {
    from: 'evanbero@evandev.com',
    to: 'evanbero@evandev.com',
    subject: subject,
    text: content,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };

  // Function to SEND EMAIL to SendGrid
  await sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
      console.log(msg);
      res.json({
        status: 'success',
        data: msg
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        status: 'fail',
        error: err
      });
    });
});

module.exports = router;
