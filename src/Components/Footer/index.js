import React from 'react';
import {
    socialIconsData,
    addressData
} from './../../resources/data';
import {
    Element,
} from "react-scroll";
import SocialIcons from './../UI/SocialIcons'
import './Footer.scss';

const Footer = props => {
    const { line1, line2,
        line3, line4,
        contactNumber, email } = addressData.address
    return (
        <Element name="contactus">
            <footer>
                <div className="container">
                    <h1 className="main-title">
                        {addressData.title()}
                    </h1>
                    <div className="content">
                        <div className="left__content">
                            <p className="line1">{line1}</p>
                            <p className="line">{line2}</p>
                            <p className="line">{line3}</p>
                            <p className="line">{line4}</p>
                            <p className="line">{contactNumber}</p>
                            <p className="line">{email}</p>
                            <SocialIcons data={socialIconsData} />
                        </div>
                        <div className="right__content">
                            <img src={addressData.img} alt={addressData.alt} />
                        </div>
                    </div>
                </div>
            </footer>
        </Element>
    );
};

export default Footer;