//Ref:  Routes index.js from edate project

const path = require('path');
const router = require('express').Router();
const healthCheckRoute = require('./health-check');
const email = require('./email-route');

// SendGrid single send API Route
router.use('https://api.sendgrid.com/v3/mail', email);

module.exports = router;
