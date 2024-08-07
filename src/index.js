import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './templates/Navbar.js';
import Footer from './templates/Footer.js';
import First from './templates/main/First.js';
import Separetor from './templates/main/Separetor.js';
import About from './templates/main/About.js';
import Why from './templates/main/Why.js';
import Second from './templates/main/Second.js';
import Review from './templates/main/Review.js';
import Telbot from './templates/main/Telbot.js';
import reportWebVitals from './reportWebVitals';

const nav = ReactDOM.createRoot(document.getElementById('nav'));
nav.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <React.StrictMode>
    <First />
    <Separetor />
    <About />
    <Why />
    <Second />
    <Review />
    <Telbot />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
