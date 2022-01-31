const dotenv = require('dotenv')
dotenv.config()
const router = require('express').Router()
const sgMail = require('@sendgrid/mail')

// Single Send Email POST request
router.post('/', async (req, res) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const senderEmail = req.body.senderEmail
  const occupation = req.body.occupation
  const subject = req.body.subject
  const text = req.body.text
  const content = `
  firstName: ${firstName}
  lastName: ${lastName}
  email: ${senderEmail}
  occupation: ${occupation}
  subject: ${subject}
  text: ${text} `

  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: `<evanbero@evandev.com>`, // Change to your recipient
    from: `<evanbero@evandev.com>`, // Change to your verified sender
    subject: subject,
    text: content,
    html: `<h3>From: <strong>${lastName}, ${firstName} (${senderEmail})</strong></h3>
    <h3>Subject: <strong>${subject}</strong></h3>
    <h3>Occupation: <strong>${occupation}</strong></h3>
    <h3>Message:</h3>
    <h4><strong>${text}</strong></h4>`,
  }
  await sgMail.send(msg).then(
    () => {},
    error => {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    }
  )
})

module.exports = router
