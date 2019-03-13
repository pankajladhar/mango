import React from 'react';
import {
    Element,
} from "react-scroll";

import data from './../../resources/data/OurFarm';
import './OurFarm.scss';


const OurFarm = () => {
    return (
        <Element name="ourFarm" className="ourFarm">
            <div className="container">
                <h1 className="main-title">
                    {data.title()}
                </h1>

                <div className="image-container">
                    {data.images.map((item) => {
                        return (
                            <img key={item.alt} src={item.img} alt={item.alt} />
                        )
                    })}
                </div>
            </div>
        </Element>
    );
};

export default OurFarm;