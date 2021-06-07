import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' exact component={About} />
        <Route path='/portfolio' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
      </div>
    </Router>
  );
};

export default App;
