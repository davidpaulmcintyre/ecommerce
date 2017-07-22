const mapStateToListProps = state => {
  // convert obj back to array
  const arrProducts = Object.keys(state.shopping.products).map(
    key => state.shopping.products[key]
  );
  const arrProductsMergedWithPurchaseDetails = arrProducts.map(product => {
    const purchase = state.shopping.purchases[product.item_name];
    const details = Object.assign({}, purchase, product );
    return details;
  });
  return {
    products: arrProductsMergedWithPurchaseDetails
  };
};

export default mapStateToListProps;