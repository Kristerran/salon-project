import PropTypes from 'prop-types';
import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
import ProductLabels from './Items-list-htags-labels';

import Placeholder from '../../assets/images/placeholder.png';

const propTypes = {
  reducerPriceRangeFilter: PropTypes.number,
  sortArgsForFilter: PropTypes.string,
}

const StoreBanner = ({
  reducerPriceRangeFilter,
  sortArgsForFilter,
}) => {

  return (
    <Jumbotron href={Placeholder}>
      <Container style={textBanner}>
        <ProductLabels
          reducerPriceRangeFilter={reducerPriceRangeFilter}
          sortArgsForFilter={sortArgsForFilter}
        />
      </Container>
    </Jumbotron>
  )
};

StoreBanner.propTypes = propTypes;

export default StoreBanner;