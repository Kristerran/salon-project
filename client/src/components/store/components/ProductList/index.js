import React, { useEffect } from 'react';
import ProductItem from '../ProductItem/';
// import { useDispatch, useSelector } from 'react-redux';
// import { UPDATE_PRODUCTS } from '../../utils/actions';
// import { useQuery } from '@apollo/client';
// import { QUERY_PRODUCTS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
import products from '../../data.js';

function ProductList() {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);

  // const { currentCategory } = state;

  // const { loading, data } = useQuery(QUERY_PRODUCTS);

  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: UPDATE_PRODUCTS,
  //       products: data.products,
  //     });
  //     data.products.forEach((product) => {
  //       idbPromise('products', 'put', product);
  //     });
  //   } else if (!loading) {
  //     idbPromise('products', 'get').then((products) => {
  //       dispatch({
  //         type: UPDATE_PRODUCTS,
  //         products: products,
  //       });
  //     });
  //   }
  // }, [data, loading, dispatch]);

  // function filterProducts() {
  //   if (!currentCategory) {
  //     return state.products;
  //   }

  //   return state.products.filter(
  //     (product) => product.category._id === currentCategory
  //   );
  // }

  return (
    <div className="my-2">
      <h2>FeaturedProducts</h2>
      {/* {state.products.length ? ( */}
        <div className="flex-row">
          {products.map((products) => (
            <ProductItem
              key={products._id}
              _id={products._id}
              image={products.image}
              name={products.name}
              price={products.price}
              desc={products.desc}
              size={products.size}
              rating={products.rating}
              quantity={products.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>
  );
}

export default ProductList;
