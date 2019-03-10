import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import Logo from './images/logo.png';
import Hamburger from './../Hamburger';

const Header = props => {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", function (event) {
            setScroll(window.scrollY);
        });
    }, [scroll]);
    const getClassName = () => {
        return scroll ? "isFixed" : ""
    }
    return (
        <header className={`${getClassName()}`}>
            <div className="container header-content">
                <Hamburger />
                <a href="/">
                    <img className="logo" src={Logo} />
                </a>
            </div>
        </header>
    );
};

Header.propTypes = {

};

export default Header;