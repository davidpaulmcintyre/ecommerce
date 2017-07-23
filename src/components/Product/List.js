import React, { Component } from 'react';
import ListItem from '../Cart/ListItem';

const List = props =>
  <div>
    <ul>
      {props.products.map((product, ix) =>
        <ListItem {...product} key={ix} onBuy={props.onBuy} />
      )}
    </ul>
  </div>;

List.defaultProps = {
  products: []
};

export default List;
