import React from 'react';
import PropTypes from 'prop-types';
import HeroSlider from './../HeroSlider';
import Header from './../Header';
import WhoWeAre from './../WhoWeAre';
import HowWeWork from './../HowWeWork';
import OurProducts from './../OurProducts';
import Certificates from './../Certificates';
import SrollToTop from './../SrollToTop';
import './App.scss';

const App = props => {
    return (
        <div className="app">
            <Header />
            <HeroSlider />
            <main>
                <WhoWeAre />
                <HowWeWork />
                <OurProducts />
                <Certificates />
            </main>
                <SrollToTop />
        </div>
    );
};

App.propTypes = {
    
};

export default App;