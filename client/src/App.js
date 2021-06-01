import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={About} />
        <Route path='/portfolio' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
      </div>
    </Router>
  )
};

export default App;



















// {/* <Header background={headerImage} /> */}

// const [headerImage, setHeaderImage] = useState();
// const [mainImage, setMainImage] = useState();
// // const [navState, setNavState] = useState(false);
// const currentLocation = (window.location.pathname);

// useEffect(() => {
//   handleChange();
// });

// function handleChange() {
//   if (currentLocation === '/') {
//     setMainImage(homeImage);
//     // } else if (currentLocation === '/about') {
//     //   setMainImage(aboutImage);
//   } else if (currentLocation === '/contact') {
//     setMainImage(contactImage);
//   }
// };

// const divStyle = {
//   backgroundImage: 'url(' + mainImage + ')'
// };


{/* <div className='mainDiv' style={divStyle}></div> */ }
