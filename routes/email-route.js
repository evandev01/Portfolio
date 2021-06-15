require('dotenv').config(sendgrid);
const router = require('express').Router();

// SendGrid
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Mail POST request
router.post('/send', (req, res) => {
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
  var msg = {
    from: 'evanbero@evandev.com',
    to: 'evanbero@evandev.com',
    subject: subject,
    text: content,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };

  console.log('this is the api key: ');
  console.log(process.env.SENDGRID_PASSWORD);
  console.log('this is the message: ');
  console.log(msg);

  // Function to SEND EMAIL to SendGrid
  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log('Email sent');
  //     console.log(msg);
  //     res.json({
  //       status: 'success',
  //       data: msg
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.json({
  //       status: 'fail',
  //       error: err
  //     });
  //   });
});

module.exports = router;

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
// });

// const nodemailer = require('nodemailer');
// const sgTransport = require('nodemailer-sendgrid-transport');

// const options = {
//   service: 'SendGrid',
//   auth: {
//     api_user: process.env.USERNAME,
//     api_key: process.env.SENDGRID_API_KEY
//   }
// };
// const client = nodemailer.createTransport(sgTransport(options));

// await client
//   .sendMail(msg)
//   .then(() => {
//     res.json({
//       status: 'success',
//       data: msg
//     });
//     console.log('Message sent: ' + info.res);
//   })
//   .catch(err => {
//     res.json({
//       status: 'fail',
//       error: err
//     });
//     console.log('status:fail -- error: ' + err);
//   });
