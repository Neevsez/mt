import Footer from '../templates/Footer';
import First from '../templates/main/First';
import Separetor from '../templates/main/Separetor';
import About from '../templates/main/About';
import Why from '../templates/main/Why';
import Second from '../templates/main/Second';
import Review from '../templates/main/Review';
import Telbot from '../templates/main/Telbot';
import '../index.css';
import React from 'react';


function Home() {
    return (
        <React.StrictMode>
            <First />
            <Separetor />
            <About />
            <Why />
            <Second />
            <Review />
            <Telbot />
            <Footer />
        </React.StrictMode>
    )
};

export default Home;