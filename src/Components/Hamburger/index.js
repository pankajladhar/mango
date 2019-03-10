import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Hamburger.scss';

const Hamburger = props => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }
    return (
        <button className="hamburger" onClick={handleClick}>
            <div className="icon">
                <div
                    className={`${
                        !toggle
                            ? 'icon-container'
                            : 'icon-container icon-container-active'
                        }`}
                >
                    <span className="line" />
                </div>
            </div>
            <span className="title">MENU</span>
        </button>
    );
};

Hamburger.propTypes = {

};

export default Hamburger;