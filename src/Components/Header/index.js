import React, { useEffect, useState } from 'react';
import Logo from './images/logo.png';
import Navigation from './../Navigation';
import Hamburger from './../Hamburger';
import SocialIcons from './../SocialIcons';
import './Header.scss';

const Header = props => {
    const [scroll, setScroll] = useState(0);
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }

    const onResizeScreen = () => {
        document.body.classList.remove('nav--open');
    }

    const onScrollScreen = () => {
        setToggle(false)
        setScroll(window.scrollY);
    }

    useEffect(() => {
        // toggle ? document.body.classList.add('nav--open') : document.body.classList.remove('nav--open');
        window.addEventListener('resize', onResizeScreen, false);
        window.addEventListener("scroll", onScrollScreen, false);
        return () => {
            window.removeEventListener("scroll", onScrollScreen, false);
            window.removeEventListener('resize', onResizeScreen, false);
        };
    }, [scroll, toggle]);

    const getClassName = () => {
        return scroll ? "isFixed" : ""
    }
    return (
        <header className={`${getClassName()}`}>
            <div className="subheader">
                <div className="container">
                    <SocialIcons />
                </div>
            </div>
            <div className="container header-content">
                <Hamburger toggle={toggle} onClick={handleClick} />
                <a href="/">
                    <img className="logo" src={Logo} />
                </a>
                <Navigation toggle={toggle} />
            </div>
        </header>
    );
};

export default Header;