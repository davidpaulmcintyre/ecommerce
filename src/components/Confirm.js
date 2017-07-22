import React, { Component } from 'react';
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
        </div>
      </div>
    );
  }
}

export default Confirm;
