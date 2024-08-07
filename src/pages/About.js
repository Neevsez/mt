import React from 'react';
import First from '../templates/about/First';
import Second from '../templates/about/Second';
import Third from '../templates/about/Third';
import Fourth from '../templates/about/Fourth';
import Fifth from '../templates/about/Fifth';
import Footer from '../templates/Footer';


function About() {
    return (
        <React.StrictMode>
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Footer />
        </React.StrictMode>
    )
};

export default About;
