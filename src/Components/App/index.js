import React from 'react';
import HeroSlider from './../HeroSlider';
import Header from './../Header';
import AboutUs from './../AboutUs';
import WhoWeAre from './../WhoWeAre';
// import HowWeWork from './../HowWeWork';
import OurFarm from './../OurFarm';
import OurProducts from './../OurProducts';
import Certificates from './../Certificates';
import SrollToTop from './../SrollToTop';
import Footer from './../Footer';
import CopyrightFooter from './../CopyrightFooter';
import './App.scss';

const App = props => {
    return (
        <div className="app">
            <Header />
            <HeroSlider />
            <main>
                <AboutUs />
                <WhoWeAre />
                {/* <HowWeWork /> */}
                <OurFarm />
                <OurProducts />
                <div className="givingBack">
                    <div className="container">
                        <h1 className="main-title">
                            <strong>Giving </strong>
                            back to society
                        </h1>
                        <p>
                            Feel proud when you buy a mango from us because you are helping in contributing to an Institution for the Aged  – TARA in Rajarajeshwari Nagar which is run by the bangalore freemason’s society.
                        </p>
                    </div>
                </div>
                <Certificates />
            </main>
            <Footer />
            <CopyrightFooter />
            <SrollToTop />
        </div>
    );
};

export default App;