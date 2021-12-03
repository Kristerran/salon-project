import React from 'react';
import { connect } from 'react-redux';
import { addToCart, deleteFromCart, deleteAllFromCart } from '../actions/CartAction.js';
import Cart from './Cart.js';

const CartContainer = props => <Cart {...props} />;

const mapStateToProps = state => ({ getCart: state.cartReducer })

const mapDispatchToProps = dispatch => ({
  addToCart: x => dispatch(addToCart(x)),
  deleteFromCart: x => dispatch(deleteFromCart(x)),
  deleteAllFromCart: x => dispatch(deleteAllFromCart(x))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)