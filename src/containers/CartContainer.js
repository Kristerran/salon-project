import React from 'react';
import { connect } from 'react-redux';
import { addToCart, deleteFromCart, deleteALlFromCart } from '../actions/CartAction.js';
import Cart from '../components/store/Cart.js';

const CartContainer = props => <Cart {...props} />;

const mapStateToProps = state => ({ getCart: state.cartReducer })

const mapDispatchToProps = dispatch => ({
  addToCart: x => dispatch(addToCart(x)),
  deleteFromCart: x => dispatch(deleteFromCart(x)),
  deleteALlFromCart: x => dispatch(deleteALlFromCart(x))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)