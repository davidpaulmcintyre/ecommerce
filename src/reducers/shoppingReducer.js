import initialState from './initialState';
import * as types from 'constants/actionTypes';

export default function(state = initialState.shopping, action) {
  switch (action.type) {
    case types.RECEIVE_PRODUCT_DATA: {
      const arrData = action.payload.product_list;
      // convert array to Object
      const objData = arrData.reduce((obj, item) => {
        obj[item.item_name] = item;
        return obj;
      }, {});
      return Object.assign({}, state, { products: objData });
    }

    case types.SET_PRODUCT_QUANTITY: {
      // todo: where to calculate total?  can price change?  store price here as well?
      const purchases = Object.assign({}, state.purchases);
      const key = action.payload.item_name;
      const unit_price = state.products[key].unit_price;
      const total = unit_price * Number(action.payload.quantity);
      purchases[key] = {
        item_name: action.payload.item_name,
        quantity: action.payload.quantity,
        total
      };

      // todo: update qty available
      return Object.assign({}, state, { purchases });
    }
    default:
      return state;
  }
}
