import React, { Component } from 'react';
import ListContainer from './containers/ListContainer';
import CartContainer from './containers/CartContainer';
import Confirm  from './components/Confirm';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <ListContainer />,
    main: () => <h3>Product List</h3>
  },
  {
    path: '/cart',
    sidebar: () => <CartContainer />,
    main: () => <h2>Shopping Cart</h2>
  },
  {
    path: '/confirm',
    sidebar: () => <Confirm />,
    main: () => <h2>Thank you for your purchase</h2>
  }
];

export default routes;
