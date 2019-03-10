import React from 'react';
import PropTypes from 'prop-types';
import HeroSlider from './../HeroSlider';
import Header from './../Header';
import './App.scss';

const App = props => {
    return (
        <div>
            <Header />
            <HeroSlider />
            <main></main>
        </div>
    );
};

App.propTypes = {
    
};

export default App;