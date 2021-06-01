//Ref:  Routes index.js from edate project

const path = require('path');
const router = require('express').Router();
const healthCheckRoute = require('./health-check');
const email = require('./email-route');

// API Route
// Route used to CRUD email
router.use('/api/contact', email);

router.use('/api', healthCheckRoute);

// If no API routes are hit, send confirmation
router.use(function (req, res) {
    res.json({ "Response": "Incorrect Url" });
  });

module.exports = router;