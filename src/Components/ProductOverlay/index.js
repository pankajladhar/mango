import React from 'react';
import ReactDom from 'react-dom';
import UserForm from './../UserForm'
import './ProductOverlay.scss';

const ProductOverlay = props => {
    const handleClick = (e) => {
        props.hideMenu()
    };
    return ReactDom.createPortal(
        <div
            className="productOverlay"
        >
            <UserForm selectedProduct={props.title} hideMenu={handleClick} />
        </div>,
        document.body
    );

};

export default ProductOverlay;