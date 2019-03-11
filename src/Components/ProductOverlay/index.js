import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import './ProductOverlay.scss';

const ProductOverlay = props => {
    const overlayRef = useRef();
    const handleClick = (e) => {
        overlayRef.current.contains(e.target) && props.hideMenu();
    };
    return ReactDom.createPortal(
        <div
            ref={overlayRef}
            onKeyDown={() => {}}
            tabIndex="0"
            role="button"
            className="productOverlay"
            onClick={handleClick}
        >
        </div>,
        document.body
    );

};

export default ProductOverlay;