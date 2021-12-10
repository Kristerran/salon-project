import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { Card, CardGroup} from 'reactstrap';

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, price, quantity, size, rating, description, category} = product;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem.name === name);
    console.log(cart);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        name: name,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...product, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...product, purchaseQuantity: 1 });
    }
  };

  return (

    <CardGroup>
      <Card>
        <div className="part1">
          <h4 className="product-category">{category}</h4>
          <p className="product-name">{name}</p>
            <p className="product-description">{description}</p>
            <span className="stars">Rated: {rating}</span>
        </div>
        <img className="product-images" alt={name} src={image}/>
        <div className="part-3">
          <span className="product-price"> ${price}.00</span>
          <p className="product-size">{size}</p>
          <button className="product-btn" onClick={addToCart}>Add to cart</button>
          <p className="product-qty">{quantity} in stock </p>
        </div>
      </Card>
    </CardGroup>
  )}

export default ProductItem;
