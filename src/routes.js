import React, { Component } from 'react';
import ListContainer from 'containers/ListContainer';
import CartContainer from 'containers/CartContainer';
import Confirm from 'components/Confirm';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <ListContainer />
  },
  {
    path: '/cart',
    sidebar: () => <CartContainer />
  },
  {
    path: '/confirm',
    sidebar: () => <Confirm />
  }
];

export default routes;
