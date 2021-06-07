import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

function App() {
  function findEmailAddresses(text) {
    var emails = text.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    );
    return emails;
  }

  var emails = {
    parse: {
      handler: function (request) {
        var payload = request.payload;
        var emails = findEmailAddresses(payload.text);

        emails.forEach(function (email) {
          db.sadd('emails', email);
        });

        request.reply({
          success: true
        });
      }
    }
  };

  server.route({
    method: 'POST',
    path: '/emails/parse',
    config: emails.parse
  });

  return (
    <Router>
      <div>
        <Route path='/' exact component={About} />
        <Route path='/portfolio' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
      </div>
    </Router>
  );
}

export default App;
