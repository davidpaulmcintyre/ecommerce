import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import mapStateToCartProps from './mapStateToCartProps';
import './containers.css';

class CartContainer extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="container">
          <h1>
            {'Shopping Cart'}
          </h1>
          <Cart {...this.props} />
          <div className="navigation-cart">
            <Link to="/">Back to shopping</Link>
            <Link to="/confirm">Checkout</Link>
          </div>
        </div>
      </div>
    );
  }
}

CartContainer.defaultProps = {
  purchases: []
};



export default connect(mapStateToCartProps, null)(CartContainer);
