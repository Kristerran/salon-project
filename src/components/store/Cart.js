import PropTypes from 'prop-types';
import React from 'react'
import { Table, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const propTypes = {
  getCart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  deleteALlFromCart: PropTypes.func.isRequired,
};

const Cart = ({ getCart, addToCart, deleteFromCart, deleteALlFromCart }) => {

  const { h1, images, checkoutBtn, btnIncrement, btnDelete, containerPadding } = styles
  const reducePrice = (getCart.reduce((acc, x) => (acc + (x.quantity * x.price)), 0))

  return (
    <div style={containerPadding}>
      <Container>
        <h1 style={h1}>Cart</h1>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            getCart.map(x =>
              <tr>
                <td>
                  <img style={images} src={x.images[0]} alt=""/>
                  <p><b>{x.name}</b> | {x.size}</p>
                </td>
                <td>
                  <p><b>{x.price}$</b></p>
                </td>
                <td>
                  <p><button style={btnIncrement} onClick={()=>addToCart(x)}>+</button><b>{' '+x.quantity+' '}</b><button style={btnIncrement} onClick={()=>deleteFromCart(x)}>-</button></p>
                </td>
                <td>
                  <p><button style={btnDelete} onClick={()=>deleteALlFromCart(x)}>x</button></p>
                </td>
              </tr>
            )
          }
            <tr>
              <td></td><td></td>
              <td>
                <b>Subtotal</b>
              </td>
              <td>
                <b>{reducePrice} $</b>
              </td>
            </tr>
            <tr>
              <td></td><td></td>
              <td>
                <b>Shipping</b>
              </td>
              <td>
                <b>5.95 $</b>
              </td>
            </tr>
            <tr>
              <td></td><td></td>
              <td>
                <b>Total</b>
              </td>
              <td>
                <b>{reducePrice + 5.95} $</b>
              </td>
            </tr>
          </tbody>
        </Table>
        <div style={checkoutBtn}>
          <Link to="/checkout"><Button >Checkout</Button></Link>
        </div>
      </Container>
    </div>
  )
}

Cart.propTypes = propTypes;

export default Cart;