import PropTypes from 'prop-types';
import React from 'react';
import { isBrowser, isMobile } from "react-device-detect";
import StoreBanner from './StoreBanner';
import Breadcrumbs from './Breadcrumbs';
import Sidebar from './Sidebar';
import Paginator from './Paginator';
import EachItemInList from './EachProductInList';
import { Container, Row, Col } from 'reactstrap';

const propTypes = {
  listIsLoading: PropTypes.bool.isRequired,
  FilteredSortedList: PropTypes.array.isRequired,
  currentPageHandler: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsMaxPage: PropTypes.number.isRequired,
  dispatchSize: PropTypes.func.isRequired,
  sortArgsForFilter: PropTypes.string.isRequired,
  dispatchToSortList: PropTypes.func.isRequired,
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

const ViewProducts = ({
  listIsLoading,
  FilteredSortedList,
  currentPageHandler,
  currentPage,
  itemsMaxPage,
  sortArgsForFilter,
  categoriesProducts,
  actionPriceRangeFilter,
  reducerPriceRangeFilter,
  actionFillFilters
}) => {

  const pagination = Math.ceil(listLength/itemsMaxPage)>1 ?
    (<Paginator
      maxPages={Math.ceil(listLength/itemsMaxPage)}
      currentPage={currentPage}
      itemsMaxPage={itemsMaxPage}
      onPageChange={currentPageHandler}
    />) :
    currentPage > 1 && (()=> currentPageHandler('empty'))()

    const sideBar =  isBrowser &&
    <Col md="3" xs='12'>
      <Row>
        <Sidebar
          categoriesProducts={categoriesProducts}
          actionPriceRangeFilter={actionPriceRangeFilter}
          reducerPriceRangeFilter={reducerPriceRangeFilter}
          actionFillFilters={actionFillFilters}
        />
      </Row>
    </Col>;

  return (
    <div>
      <StoreBanner
        reducerPriceRangeFilter={reducerPriceRangeFilter}
        sortArgsForFilter={sortArgsForFilter}
      />
      <Breadcrumbs
        selectedCategory={keywordsForFilter}
        sortArgsForFilter = {sortArgsForFilter}
        backgroundColor={'#072a48'}
        textColor={'white'}
        marginTop={-34}
        showFilterBtn={isMobile}
        categoriesProducts={categoriesProducts}
        actionPriceRangeFilter={actionPriceRangeFilter}
        reducerPriceRangeFilter={reducerPriceRangeFilter}
        listLength={listLength}
      />
      <Container style={styles.containerPaddingTop}>
        <Row>
          {sideBar}
        </Row>
      </Container>
    </div>
  );
};

ViewProducts.propTypes = propTypes;

export default ViewProducts;