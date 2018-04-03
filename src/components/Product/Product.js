import React, { Component } from 'react';
import { URL_IMAGES } from '../../constants';
import '../components.css';

const Product = props => {
  const { item_name, item_description, photo, unit_price } = props;
  return (
    <div className="containerProduct">
      <img className="img-product" src={`${URL_IMAGES}${photo}`} alt={'product'}/>
      <div className="product-details">
        <div className="item_name">
          {item_name}
        </div>
        <div>
          {item_description}
        </div>
      </div>
      <div className="product-price">
        <span>{`$${unit_price.toFixed(2)}`}</span>
      </div>
    </div>
  );
};

export default Product;
