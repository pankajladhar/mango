import React from 'react';
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

export default Button;