import React, { Component } from 'react';
import Product from '../Product/Product';
import '../components.css';

class CartItem extends Component {
  render() {
    return (
      <div>
        <Product {...this.props} />
        <div className="product-quantity">
          <span>
            {this.props.quantity}
          </span>
        </div>

        <div className="product-quantity">
          <span>{`$${this.props.total.toFixed(2)}`}</span>
        </div>
      </div>
    );
  }
}

CartItem.defaultProps = {
  total: 0,
  quantity: 0,
  unit_price: 0
};

export default CartItem;
