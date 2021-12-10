import React from 'react';
import ProductItem from '../ProductItem';

function ProductList({products}) {

  return (
    <div className="my-2">
      <h2>Featured Products</h2>
        {products.map(product => (
              <ProductItem
                key={product.name}
                product={product}
              />
          ))}
        </div>
  );
}

export default ProductList;
