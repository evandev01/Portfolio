const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  secure: true,
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
    // console.log('this is the transport object:');
    // console.log(
    //   process.env.HOST,
    //   process.env.PORT,
    //   process.env.USER,
    //   process.env.PASS
    // );
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
  const mailOptions = {
    from: `${firstName}${' '}${lastName}<evanbero@evandev.com>`,
    to: 'evanbero@evandev.com',
    email: `${email}`,
    occupation: `${occupation}`,
    subject: subject,
    text: content
  };

  console.log('this is the mail object sent:');
  console.log(mailOptions);

  // Function to SEND EMAIL to Mailtrap inbox
  await transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
        error: err
      });
      console.log('status:fail -- error:');
      console.log(err);
    } else {
      res.json({
        status: 'success',
        data: mailOptions
      });
      console.log('message sent!');
    }
  });
});

module.exports = router;
