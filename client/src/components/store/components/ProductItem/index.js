import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody } from 'reactstrap';

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, _id, price, quantity, size, rating} = product;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
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
        <Link to={`/products/${_id}`}>
          <p>{name}</p>
          <img alt={name} src={`./images/${image}`} />
        </Link>
          <span>{rating}</span>
        <div>
          <span>{price}</span>
          <p>{size}</p>
        </div>
        <div>
            {quantity} in stock
          </div>
        <button onClick={addToCart}>Add to cart</button>
        </Card>
      </CardGroup>
  );
}

export default ProductItem;
