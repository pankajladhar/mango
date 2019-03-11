import React from 'react';
import PropTypes from 'prop-types';
import ProductTile from './../ProductTile';
import OurProductsData from './../../resources/data/OurProducts';
import './OurProducts.scss';

const OurProducts = props => {
    return (
        <div className="ourProducts">
            <div className="container">
                <h1 className="main-title">
                    <strong>Our</strong> products
                </h1>
                <div className="products">
                    {OurProductsData.map((product, i) => (
                        <ProductTile key={i} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

OurProducts.propTypes = {

};

export default OurProducts;