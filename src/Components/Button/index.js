import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = props => {
    const handleClick = () => {
        props.onClick()
    }
    return (
        <button className="button"
            onClick={handleClick}>
            {props.title}            
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func   
};

export default Button;