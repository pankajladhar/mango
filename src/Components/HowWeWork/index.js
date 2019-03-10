import React from 'react';
import PropTypes from 'prop-types';
import './HowWeWork.scss';

const HowWeWork = props => {
    return (
        <div className="howWeWork">
            <div className="container">
                <h3 className="heading text-center mb-lg-5 text-white mb-4">How We Work</h3>
                <div className="row text-center join agile-info">
                    <div className="col-lg-4 col-md-6 steps-reach w3-agile-grid">
                        <span className="fa fa-cogs"></span>
                        <h4>Step 1</h4>
                        <p>Pretium elementum. Duis bibendum convallis nun ca dictum convallis nun ca dictum. Cras blandit nibh ut aliquet varius sem sit amet convallis.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-5 steps-reach w3-agile-grid">
                        <span className="fa fa-cubes"></span>
                        <h4>Step 2</h4>
                        <p>Pretium elementum. Duis bibendum convallis nun ca dictum convallis nun ca dictum. Cras blandit nibh ut aliquet varius sem sit amet convallis.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-0 mt-5 steps-reach w3-agile-grid">
                        <span className="fa fa-cart-arrow-down" aria-hidden="true"></span>
                        <h4>Step 3</h4>
                        <p>Pretium elementum. Duis bibendum convallis nun ca dictum convallis nun ca dictum. Cras blandit nibh ut aliquet varius sem sit amet convallis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

HowWeWork.propTypes = {

};

export default HowWeWork;