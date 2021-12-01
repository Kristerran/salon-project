import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';

const propTypes = {
  dispatchSize: PropTypes.func.isRequired,
  sortSizeForFilter: PropTypes.string.isRequired
};

const availableSizes = ['All', '8oz', '16oz', '24oz'];

const FilterBySize = ({dispatchSize, sortSizeForFilter}) => availableSizes.map(x=><Button outline={sortSizeForFilter !== x} color="secondary" onClick={()=> dispatchSize(x)} key={x}>{x}</Button>);

FilterBySize.propTypes = propTypes;

export default FilterBySize;