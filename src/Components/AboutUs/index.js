import React from 'react';
import data from './../../resources/data/Home'
import Scrolling from './../UI/Scrolling';
import './AboutUs.scss';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="container">
                {data.paragraph}
            </div>
        </div>
    );
};

export default Scrolling(AboutUs, "aboutUs");