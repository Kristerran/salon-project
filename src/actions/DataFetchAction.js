import {
	LIST_ERROR,
	LIST_IS_LOADING,
	LIST_FETCH_SUCCESS,
	FILTER_ARGS,
    FILTER_PRICE_RANGE,
    ITEM_ERROR,
    ITEM_IS_LOADING,
    ITEM_FETCH_SUCCESS
} from '../constants';

export const listHasError = bool => ({
  type: LIST_ERROR,
  hasErrored: bool
});

export const itemHasError = bool => ({
  type: ITEM_ERROR,
  hasErrored: bool
});

export const listIsLoading = bool => ({
  type: LIST_IS_LOADING,
  isLoading: bool
});

export const itemIsLoading = bool => ({
  type: ITEM_IS_LOADING,
  isLoading: bool
});

export const listFetchDataSuccess = items => ({
  type: LIST_FETCH_SUCCESS,
  items
});


export const actionPriceRangeFilter = getPriceRange => ({
  type: FILTER_PRICE_RANGE,
  getPriceRange
});

export const sortArgsForFilter = sortArg => ({
  type: FILTER_ARGS,
  sortArg
});

export const itemFetchDataSuccess = item => ({
  type: ITEM_FETCH_SUCCESS,
  item
});

export const fetchDataApi = url => {
  return dispatch => {
    dispatch(listIsLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(listIsLoading(false)) && dispatch(listFetchDataSuccess(items)))
      .catch(() => dispatch(listHasError(true)));
  }
};

export const fetchItemApi = url => {
    return dispatch => {
        dispatch(itemIsLoading(true))
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(itemFetchDataSuccess(items)))
            .then(() => dispatch(itemIsLoading(false)))
            .catch(() => dispatch(itemHasError(true)));
    }
}