import React from 'react';
import {
    Element,
} from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Counter from './../Counter'
import data from './../../resources/data/OurFarm';
import './OurFarm.scss';


const OurFarm = () => {
    return (
        <Element name="ourFarm" className="ourFarm">
            <div className="container">
                <h1 className="main-title">
                    {data.title()}
                </h1>
                <Carousel autoPlay infiniteLoop>
                    {data.images.map((item) => {
                        return (
                            <div key={item.alt}>
                                <img src={item.img} alt={item.alt} />
                            </div>
                        )
                    })}
                </Carousel>
                {/* <div className="content">
                    <div className="left__content">
                    </div>
                    <div className="right__content">
                        <Counter />
                    </div>
                </div> */}
            </div>
        </Element>
    );
};

export default OurFarm;