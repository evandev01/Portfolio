require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const path = require('path')
const app = express()

// Middleware
app.use(express.json({ extended: false }))

// Add routes, both API and View
app.use(routes)

app.use(cors())

app.get('/api/apikey', (req, res) => {
  res.send(process.env.SENDGRID_API_KEY)
})

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
