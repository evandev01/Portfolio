//Ref:  Routes index.js from edate project

const path = require('path');
const router = require('express').Router();
const email = require('./email-route');

// SendGrid single send API Route
router.use('https://api.sendgrid.com/v3/mail/send', email);

module.exports = router;
