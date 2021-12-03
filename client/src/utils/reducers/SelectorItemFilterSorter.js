import { createSelector } from 'reselect'

const listToFilter = state => state.listFetchDataSuccess
const argsForFilter = state => state.keywordsForFilter
const sortForFilter = state => state.sortArgsForFilter
const getSize = state => state.sortSizeForFilter
const getPriceRange = state => state.reducerPriceRangeFilter

const getFilteredList = (listFetchDataSuccess, keywordsForFilter, sortArgsForFilter, sortSizeForFilter, reducerPriceRangeFilter) => {

  const FilteredListByKeywords = listFetchDataSuccess.filter(x=>
    keywordsForFilter.some(el => x.tags.includes(el))
  )

  const FilteredListBySize = sortSizeForFilter === 'All' ? FilteredListByKeywords :
  FilteredListByKeywords.filter(y=>
    y.size.includes(sortSizeForFilter)
  )

  const FilteredListByPriceRange = FilteredListBySize.filter(x => x.price <= reducerPriceRangeFilter)

  return FilteredListByPriceRange.sort((a, b) => {
    switch(sortArgsForFilter) {
      case 'titleAsc':
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        break;
      case 'titleDesc':
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        break;
      case 'priceAsc':
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        break;
      case 'priceDesc':
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        break;
      default:
        return 1;

    }
    return
  })
}


export const selectorListFilterSorter = createSelector(
  listToFilter,
  argsForFilter,
  sortForFilter,
  getSize,
  getPriceRange,
  getFilteredList
)
