require('dotenv').config()
const router = require('express').Router()

const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Single Send Email POST request
router.post('/send', async (req, res) => {
  const logger = () => {
    console.log(process.env.SENDGRID_API_KEY)
  }
  logger()

  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const senderEmail = req.body.senderEmail
  const occupation = req.body.occupation
  const subject = req.body.subject
  const text = req.body.text
  const content = `
      firstName: ${firstName} \n 
      lastName: ${lastName} \n
      email: ${senderEmail} \n 
      occupation: ${occupation} \n
      subject: ${subject} \n
      text: ${text} `

  // Email object
  const msg = {
    to: `<evanbero@evandev.com>`,
    from: `<evanbero@evandev.com>`,
    subject: subject,
    text: content,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  console.log(`Email: \n 
  firstName: ${firstName} \n 
      lastName: ${lastName} \n
      email: ${senderEmail} \n 
      occupation: ${occupation} \n
      subject: ${subject} \n
      text: ${text} `)

  console.log(JSON.stringify(email))

  await sgMail
    .send(msg)
    .then(() => {
      console.log('Message sent: ' + res.data)
      res.json({
        status: 'success',
        data: msg,
      })
    })

    .catch(err => {
      console.log(error)
      res.json({
        status: 'fail',
        error: err,
      })
    })
})

module.exports = router

//https://api.sendgrid.com/v3/mail/send
