import React, { Component } from 'react';
import Product from 'components/Product/Product';
import '../components.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
  }

  componentDidMount() {
    if (this.props.quantity > 0) {
      this.setState({
        quantity: this.props.quantity
      });
    }
  }

  onQuantityChange = ev => {
    const value = Number(ev.target.value);
    if (!isNaN(value)) {
      this.setState({
        quantity: value
      });
    }
  };

  handleClick = () => {
    this.props.onBuy(this.props.item_name, this.state.quantity);
  };

  render() {
    return (
      <div>
        <Product {...this.props} />
        <div className="product-quantity">
          <input value={this.state.quantity} onChange={this.onQuantityChange} />
        </div>
        <div className="btn-purchase">
          <button onClick={this.handleClick}>
            {'Buy'}
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
