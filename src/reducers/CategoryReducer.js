import { CATEGORIES_PRODUCTS } from '../constants.js';

const defaultState =
{
	men: ['Shampoo & Conditioner', 'Styling Products', 'Accessories'],
	women: ['Shampoo & Conditioner', 'Styling Products', 'Accessories']
}

export const categoriesProducts = (state = defaultState, action) => {
  switch (action.type) {
		case CATEGORIES_PRODUCTS:
				return state;
		default:
				return state;
  }
}