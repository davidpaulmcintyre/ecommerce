import React, { Component } from 'react';
import CartItem from './CartItem';

const Cart = props =>
  <div>
    <ul>
      {props.purchases.map((purchase, ix) =>
        <CartItem {...purchase} key={ix} />
      )}
    </ul>
  </div>;

Cart.defaultProps = {
  purchases: []
};

export default Cart;
