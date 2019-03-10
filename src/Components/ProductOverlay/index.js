import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
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

ProductOverlay.propTypes = {
    hideMenu: PropTypes.func
};

export default ProductOverlay;