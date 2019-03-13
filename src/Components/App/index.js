import React from 'react';
import HeroSlider from './../HeroSlider';
import Header from './../Header';
import Home from './../Home';
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
                <Home />
                <WhoWeAre />
                {/* <HowWeWork /> */}
                {/* <OurFarm /> */}
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