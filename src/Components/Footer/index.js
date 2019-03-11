import React from 'react';
import PropTypes from 'prop-types';
import data from './../../resources/data/Footer';
import {
    Element,
} from "react-scroll";
import './Footer.scss';

const Footer = props => {
    return (
        <Element name="contactus">
            <footer>
                <div className="container">
                    <h1 className="main-title">
                        {data.title()}
                    </h1>
                    <div className="content">
                        <div className="left__content">
                            <p className="line1">{data.address.line1}</p>
                            <p className="line">{data.address.line2}</p>
                            <p className="line">{data.address.line3}</p>
                            <p className="line">{data.address.line4}</p>
                            <p className="line">{data.address.contactNumber}</p>
                            <p className="line">{data.address.email}</p>
                        </div>
                        <div className="right__content">
                            <img src={data.img} alt={data.alt} />
                        </div>
                    </div>
                </div>
            </footer>
        </Element>
    );
};

Footer.propTypes = {

};

export default Footer;