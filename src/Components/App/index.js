import React from 'react';
import HeroSlider from './../HeroSlider';
import Header from './../Header';
import WhoWeAre from './../WhoWeAre';
import HowWeWork from './../HowWeWork';
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
                <WhoWeAre />
                <HowWeWork />
                <OurProducts />
                <Certificates />
            </main>
            <Footer />
            <CopyrightFooter />
            <SrollToTop />
        </div>
    );
};

export default App;