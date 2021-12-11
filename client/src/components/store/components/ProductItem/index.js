import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { Card, CardGroup} from 'reactstrap';

function ProductItem(item) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, _id, name, price, quantity, size, rating, description, category} = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    console.log(cart);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id:_id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (

    <CardGroup>
      <Card>
        <div>
          <Link to={`/products/${_id}`}>
            <h4 className="product-category">{category}</h4>
            <p className="product-name">{name}</p>
            <p className="product-description">{description}</p>
            <p className="stars">Rated: {rating}</p>
          <img className="product-images" alt={name} src={image} />
            <p className="product-price"> ${price}.00</p>
            <p className="product-size">{size}</p>
            <button className="product-btn" onClick={addToCart}>Add to cart</button>
            <p className="product-qty">{quantity} in stock </p>
            </Link>
        </div>
      </Card>
    </CardGroup>
  )}

export default ProductItem;
