const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json({ extended: false }));

require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Express serve up index.html file if it doesn't recognize route
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.use(cors());

// Add routes, both API and View
app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> evanDev Server now listening on PORT ${PORT}!`);
});
