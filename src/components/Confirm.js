import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

class Confirm extends Component {
  render() {
    return (
      <div className="page">
        <div className="container">
          <h1>
            {'Thank you'}
          </h1>
          <div className="confirm-message">
            {'Your purchase is complete'}
          </div>
          <div className="navigation-cart">
            <Link to="/">Back to shopping</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
