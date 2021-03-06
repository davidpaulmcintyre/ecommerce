const mapStateToCartProps = state => {
  // convert obj back to array
  const arrPurchases = Object.keys(state.shopping.purchases).map(
    key => state.shopping.purchases[key]
  );
  const arrPurchasesMergedWithProductDetails = arrPurchases.map(purchase => {
    const product = state.shopping.products[purchase.item_name];
    const details = Object.assign({}, product, purchase);
    return details;
  });
  const grandTotal = arrPurchasesMergedWithProductDetails.reduce((sum, item) => sum += item.total, 0);
  return {
    purchases: arrPurchasesMergedWithProductDetails,
    grandTotal
  };
};

export default mapStateToCartProps;
