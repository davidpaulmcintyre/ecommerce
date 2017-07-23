import mapStateToListProps from './mapStateToListProps';

it('sums numbers', () => {
  const state = {
    shopping: {
      products: {
        'Diamine Jet Blue Ink': {
          item_name: 'Diamine Jet Blue Ink',
          item_description: '130 ml bottle of Diamine ink',
          unit_price: 13.99,
          qty_available: 100,
          photo: 'ink.jpg'
        },
        'Palomino pencil': {
          item_name: 'Palomino pencil',
          item_description:
            'Wonderful wooden pencil that draws a soft dark line',
          unit_price: 1.25,
          qty_available: 100,
          photo: 'pencil.jpg'
        },
        'Parker Rollerball': {
          item_name: 'Parker Rollerball',
          item_description: 'Classic rollerball in the jotter style',
          unit_price: 25,
          qty_available: 50,
          photo: 'rollerball.jpg'
        }
      },
      purchases: {
        'Parker Rollerball': {
          item_name: 'Parker Rollerball',
          quantity: 3,
          total: 75
        }
      }
    }
  };

  // test that obj is converted to array of proper length
  const props = mapStateToListProps(state);
  const countKeys = Object.keys(state.shopping.products).length;
  const countArr = props.products.length;
  expect(countKeys).toEqual(countArr);

  // if item has been designed for purchase, qty prop should be set
  const purchaseKey = Object.keys(state.shopping.purchases)[0];
  console.log('purchaseKey', purchaseKey);
  const productPurchased = props.products.find(
    product => product.item_name === purchaseKey
  );
  const productKeys = Object.keys(productPurchased);
  expect(productKeys).toContain('quantity');

  // test value and type
  expect(productPurchased.quantity).toEqual(3);
});
