import React, { Component } from 'react';
import CartItem from './CartItem';

const Cart = props =>
  <div>
    <ul>
      {props.purchases.map((purchase, ix) =>
        <CartItem {...purchase} key={ix} />
      )}
    </ul>
    <div className='grandTotal'>
      <div className='product-quantity'>{'Total'}</div>
      <div  className='product-quantity'>{`$${props.grandTotal.toFixed(2)}`}</div>
    </div>
  </div>;

Cart.defaultProps = {
  purchases: []
};

export default Cart;
