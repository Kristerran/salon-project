import { createStore, combineReducers, applyMiddleware } from 'redux'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
// import rootReducer from './reducers'

import thunk from 'redux-thunk';
import {
  listFetchDataSuccess,
  listHasError,
  listIsLoading,
  sortArgsForFilter,
  keywordsForFilter,
  sortSizeForFilter,
  itemFetchDataSuccess,
  itemHasError,
  itemIsLoading,
  reducerPriceRangeFilter
} from './utils/reducers/listFetchReducer';
import { categoriesProducts } from './reducers/categoriesProductsReducer'
import { getUserAddress } from './reducers/usersReducer'
import { cartReducer } from './utils/reducers/cartReducer'

const rootReducer = combineReducers({
  listFetchDataSuccess,
  itemFetchDataSuccess,
  listHasError,
  listIsLoading,
  itemHasError,
  itemIsLoading,
  sortArgsForFilter,
  keywordsForFilter,
  sortSizeForFilter,
  categoriesProducts,
  cartReducer,
  reducerPriceRangeFilter,
  getUserAddress
})

export const Store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
