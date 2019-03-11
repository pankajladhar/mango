import React from 'react';
import PropTypes from 'prop-types';
import WhoWeAreData from './../../resources/data/WhoWeAre.js';
import './WhoWeAre.scss';

const WhoWeAre = props => {
    return (
        <div className="whoWeAre">
            <div className="container">
                <h1 className="main-title">
                    {WhoWeAreData.title()}
                </h1>
                <div className="content">
                    <div className="left__content">
                        <h2>
                            {WhoWeAreData.subTitle}
                        </h2>
                        <p>
                            {WhoWeAreData.paragraph}
                        </p>
                        <ul>
                            {
                                WhoWeAreData.listItems.map((item) => {
                                    return (
                                        <li key={item}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="right__content">
                        <img src={WhoWeAreData.img} alt={WhoWeAreData.alt} />
                    </div>
                </div>
            </div>
        </div>
    );
};

WhoWeAre.propTypes = {

};

export default WhoWeAre;