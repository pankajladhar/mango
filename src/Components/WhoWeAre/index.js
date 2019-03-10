import React from 'react';
import PropTypes from 'prop-types';
import WhoWeAreImg from './images/WhoWeAre.jpg';
import './WhoWeAre.scss';

const WhoWeAre = props => {
    return (
        <div className="whoWeAre">
            <div className="container">
                <h1 className="main-title">
                    <strong>Who</strong> we are
                </h1>
                <div className="content">
                    <div className="left__content">
                        <h2>
                            welcome to our organic fruit - we serve all types of seasonal fruits
                        </h2>
                        <p>
                            Cras blandit nibh ut pretium elementum.
                            Duis bibendum convallis nun cael dictum.
                            Quisquen ac ipsum porta, ultrices metus sit amet, curs in nisl.
                            Dui aliquet varius sem sit amet convallis nun ca dictum.
                            Cras blandit nibh ut pretium elementum.
                            Duis bibendum convallis nun ca dictum aliquet.
                        </p>
                        <ul>
                            <li>Duis Bibendum Convallis Blandit Dictum.</li>
                            <li>Cras Blandit Nibh Blandit Pretium Dolor Ipsum.</li>
                            <li>Bibendum Convallis Nun Ca Dictum Elementum Ipsum Elit.</li>
                        </ul>
                    </div>
                    <div className="right__content">
                        <img src={WhoWeAreImg} alt="who we are" />
                    </div>
                </div>
            </div>
        </div>
    );
};

WhoWeAre.propTypes = {

};

export default WhoWeAre;