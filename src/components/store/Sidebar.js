import PropTypes from 'prop-types';
import React from 'react';
import ProductListFilterPriceBar from './Item-list-filter-priceBar';

const propTypes = {
  categoriesProducts: PropTypes.object.isRequired,
  actionPriceRangeFilter: PropTypes.func.isRequired,
  reducerPriceRangeFilter: PropTypes.number.isRequired,
  actionFillFilters: PropTypes.func.isRequired
};


const Sidebar = ({ categoriesProducts, actionPriceRangeFilter, reducerPriceRangeFilter, actionFillFilters }) => (
  <div>
    <h4>Categories</h4>
      <ItemsListFilterKeywords 
        categoriesProducts={categoriesProducts}
        actionFillFilters={actionFillFilters}
      />
    <h4 style={styles.subTitles}>Price {`< ${reducerPriceRangeFilter}$`}</h4>
      <ProductListFilterPriceBar
        actionPriceRangeFilter={actionPriceRangeFilter}
        reducerPriceRangeFilter={reducerPriceRangeFilter}
      />
  </div>
)

Sidebar.propTypes = propTypes;

export default Sidebar;