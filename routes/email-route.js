const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
    console.log('this is the transport object:');
  }
});

// Mail POST request
router.post('/send', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const occupation = req.body.occupation;
  const subject = req.body.subject;
  const message = req.body.message;
  const content = `
      firstName: ${firstName} \n 
      lastName: ${lastName} \n
      email: ${email} \n 
      occupation: ${occupation} \n
      subject: ${subject}
      message: ${message} `;

  // Contact email object
  const mailOptions = {
    from: `${firstName}${lastName}<${email}>`,
    to: process.env.USER,
    subject: subject,
    text: content
  };

  console.log('this is the mail object sent:');
  console.log(mailOptions);

  // Function to SEND EMAIL to Mailtrap inbox
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      });
      console.log('status:fail -- error:');
      console.log(err);
    } else {
      res.json({
        status: 'success'
      });
      console.log('message sent!');
      console.log(data);
    }
  });
});

module.exports = router;
