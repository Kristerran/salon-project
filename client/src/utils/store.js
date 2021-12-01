import { createStore } from 'redux';
import reducers from '../utils/reducers/ListFetchReducer';

export default createStore(reducers);