require('dotenv').config()
const sgMail = require('@sendgrid/mail')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const path = require('path')
const app = express()

// Middleware
app.use(express.json({ extended: false }))

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'evanbero@evandev.com', // Change to your recipient
//   from: 'evanbero@evandev.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun when it works!',
//   text: 'and easy to do anywhere, even with Node.js!!!',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail.send(msg).then(
//   () => {},
//   error => {
//     console.error(error)

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   }
// )
// Add routes, both API and View
app.use(routes)

app.use(cors())

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 3001

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> evanDev Server now listening on PORT ${PORT}!`)
})
