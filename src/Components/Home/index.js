import React from 'react';
import data from './../../resources/data/Home'
import {
    Element,
} from "react-scroll";
import './Home.scss';

const Home = () => {
    return (
        <Element name="home" className="home">
            <div className="container">
                {data.paragraph}
            </div>
        </Element>
    );
};

export default Home;