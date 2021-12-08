import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
// import rootReducer from './reducers'


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
} from './utils/reducers/ListFetchReducer';
import { categoriesItems } from './utils/reducers/CategoryReducer';
import { getUserAddress } from './utils/reducers/UserReducer';
import { cartReducer } from './utils/reducers/CartReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
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
  categoriesItems,
  cartReducer,
  reducerPriceRangeFilter,
  getUserAddress
})

 const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default Store;