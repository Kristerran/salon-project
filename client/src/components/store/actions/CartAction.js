import {
	ADD_TO_CART,
	DELETE_FROM_CART,
	DELETE_ALL_FROM_CART
} from './constants.js';

export const addToCart = item => ({
	type: ADD_TO_CART,
	item
});

export const deleteFromCart = item => ({
	type: DELETE_FROM_CART,
	item
});

export const deleteAllFromCart = item => ({
	type: DELETE_ALL_FROM_CART,
	item
});