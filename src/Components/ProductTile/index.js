import React from 'react';
import PropTypes from 'prop-types';
import Button from './../Button';
import './ProductTile.scss';

const ProductTile = ({ img, title, cost }) => {
    return (
        <div className="productTile">
            <img src={img} alt={title} />
            <div className="productInfo">
                <strong className="title">{title}</strong>
                <span className="cost">{cost}</span>
                <Button title="Prebook now"/>
            </div>
        </div>
    );
};

ProductTile.propTypes = {

};

export default ProductTile;