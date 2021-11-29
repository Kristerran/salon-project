import PropTypes from 'prop-types';
import React from 'react';
import { isBrowser, isMobile } from "react-device-detect";
import ItemsListBanner from './Items-list-banner';
import Breadcrumbs from './Breadcrumbs';
import ItemsListSidebar from './Items-list-sidebar';
import Paginator from './Paginator';
import EachItemInList from './Each-item-in-list'; 
import LoadingGif from './Loading-gif';
import ButtonLinkGenderPage from './Button-link-gender-page'
import { Container, Row, Col } from 'reactstrap';

const propTypes = {
  listIsLoading: PropTypes.bool.isRequired, 
  FilteredSortedList: PropTypes.array.isRequired, 
  keywordsForFilter: PropTypes.array.isRequired, 
  oneKeywordForFilter: PropTypes.func.isRequired,
  currentPageHandler: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsMaxPage: PropTypes.number.isRequired,
  dispatchSize: PropTypes.func.isRequired,
  sortSizeForFilter: PropTypes.string.isRequired,
  sortArgsForFilter: PropTypes.string.isRequired,
  dispatchToSortList: PropTypes.func.isRequired,
  keywordsSelectAction: PropTypes.func.isRequired,
  categoriesProducts: PropTypes.object.isRequired,
  actionPriceRangeFilter: PropTypes.func.isRequired,
  reducerPriceRangeFilter: PropTypes.number.isRequired,
  actionFillFilters: PropTypes.func.isRequired
}

const styles = {
  spaceColumn: {
    marginLeft: '25px',
    marginRight: '25px',
    marginBottom: '50px'
  },
  fontSize: {
    fontSize: '15px'
  },
  marginLeftBtn: {
    marginLeft: '30px'
  },
  containerPaddingTop: {
    paddingTop: '35px'
  }
};

const ProductList = ({
  match,
  listIsLoading,
  FilteredSortedList,
  currentPageHandler,
  currentPage,
  itemsMaxPage,
  dispatchSize,
  sortArgsForFilter,
  dispatchToSortList,
  categoriesProducts,
  actionPriceRangeFilter,
  reducerPriceRangeFilter,
  actionFillFilters
}) => {

  const listLength = FilteredSortedList.length

  const loading_logic = listIsLoading && <LoadingGif />;

  const pagination = Math.ceil(listLength/itemsMaxPage)>1 ? 
    (<Paginator
      maxPages={Math.ceil(listLength/itemsMaxPage)}
      currentPage={currentPage}
      itemsMaxPage={itemsMaxPage}
      onPageChange={currentPageHandler}
    />) :
    currentPage > 1 && (()=> currentPageHandler('empty'))()

  return (
    <div>
      <Breadcrumbs
        sortArgsForFilter = {sortArgsForFilter}
        dispatchToSortList = {dispatchToSortList}
        backgroundColor={'#072a48'}
        textColor={'white'}
        marginTop={-34}
        showSortBtn={keywordsForFilter.length > 0}
        showFilterBtn={isMobile}
        dispatchSize={dispatchSize}
        categoriesProducts={categoriesProducts}
        actionPriceRangeFilter={actionPriceRangeFilter}
        reducerPriceRangeFilter={reducerPriceRangeFilter}
        listLength={listLength}
      />
    </div>
  );
};

ProductList.propTypes = propTypes;

export default ProductList;