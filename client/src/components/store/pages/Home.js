import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import '../../../css/store/store.css'

const Home = ({products}) => {
  return (
    <div className="container">
      <ProductList products={products}/>
      <Cart />
    </div>
  );
};

export default Home;
