import React from 'react';
import {
    Element,
} from "react-scroll";
import PropTypes from 'prop-types';

const Scrolling = (WrappedComponent, scrollId) => {
    return (props) => {
        return (
            <Element name={`${scrollId}`}>
                <WrappedComponent {...props} />
            </Element>
        );
    };
};

export default Scrolling;