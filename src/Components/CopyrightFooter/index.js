import React from 'react';
import PropTypes from 'prop-types';
import './CopyrightFooter.scss';

const CopyrightFooter = props => {
    return (
        <div className="copyrightFooter">
            <div className="container">
                Copyright @ 2018 Mango Bangalore. A Green Go Ventures Comp.
            </div>
        </div>
    );
};

CopyrightFooter.propTypes = {

};

export default CopyrightFooter;