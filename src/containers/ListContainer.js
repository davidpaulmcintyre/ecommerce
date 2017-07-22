import React from 'react';
import { connect } from 'react-redux';
import { getProductList, setProductQuantity } from '../actions';
import List from '../components/Product/List';
import mapStateToListProps from './mapStateToListProps';
import { Link } from 'react-router-dom';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filter: ''
    };
  }

  componentDidMount() {
    this.props.getProductList();
  }

  componentWillReceiveProps(nextProps) {
    // todo filter
    this.setState({
      products: nextProps.products
    })
  }

  handleBuy = (item_name, quantity) => {
    this.props.setProductQuantity(item_name, quantity);
  };

  render() {
    return (
      <div className="page">
        <div className="container">
          <h1>
            {'Product List'}
          </h1>
          <List products={this.state.products} onBuy={this.handleBuy.bind(this)} />
        </div>
        <div className="navigation-list">
          <Link to="/cart">Buy</Link>
        </div>
      </div>
    );
  }
}

ListContainer.defaultProps = {
  products: []
};

const mapDispatchToProps = dispatch => {
  return {
    getProductList: () => {
      dispatch(getProductList());
    },
    setProductQuantity: (item_name, quantity, price) => {
      dispatch(setProductQuantity(item_name, quantity, price));
    }
  };
};

export default connect(mapStateToListProps, mapDispatchToProps)(ListContainer);
