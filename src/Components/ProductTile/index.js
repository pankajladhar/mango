import React from 'react';
import PropTypes from 'prop-types';
import './ProductTile.scss';

const ProductTile = ({ img, title, cost }) => {
    return (
        <div className="productTile">
            <img src={img} alt={title} />
            <div className="productInfo">
                <strong className="title">{title}</strong>
                <span className="cost">{cost}</span>
            </div>
        </div>
    );
};

ProductTile.propTypes = {

};

export default ProductTile;