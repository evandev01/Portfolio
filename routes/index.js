const path = require('path')
const router = require('express').Router()
const email = require('./email-route')

// SendGrid single send API Route
router.use('/send', email)

module.exports = router
