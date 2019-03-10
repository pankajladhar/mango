import React from 'react';
import PropTypes from 'prop-types';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import './Certificates.scss';

const Certificates = props => {
    return (
        <div className="certificates">
            <div className="container">
                <h1 className="main-title invert">
                    <strong>Our</strong> Certificates
                </h1>
                <div className="certificates-container">
                    <img src={img1} alt={img1}/>
                    <img src={img2} alt={img2}/>
                    <img src={img3} alt={img3}/>
                </div>
            </div>
        </div>
    );
};

Certificates.propTypes = {
    
};

export default Certificates;