import * as types from '../constants/actionTypes';
import { URL_FIXTURES } from '../constants';
import fetch from 'isomorphic-fetch';

export const getProductList = () => {
  return dispatch => {
    fetch(URL_FIXTURES, {
      method: 'GET',
      headers: {
        Accept: 'text/html'
      }
    })
      .then(response => {
        if (!response.status >= 300) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        dispatch(receiveProductData(json));
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
        /* eslint-enable no-console */
      });
  };
};

export const setProductQuantity = (item_name, quantity) => {
  return {
    type: types.SET_PRODUCT_QUANTITY,
    payload: {
      item_name,
      quantity
    }
  };
};

const receiveProductData = payload => {
  return {
    type: types.RECEIVE_PRODUCT_DATA,
    payload
  };
};
