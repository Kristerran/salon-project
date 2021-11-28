import PropTypes from 'prop-types';
import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
import ItemsListHtagsLabels from './Items-list-htags-labels';

import Placeholder from '../../assets/images/placeholder.png';

const propTypes = {
  reducerPriceRangeFilter: PropTypes.number,
  sortArgsForFilter: PropTypes.string,
}

const styles={
  bannerCover1: {
    backgroundImage: {Placeholder},
    backgroundSize: 'cover'
  }
}

const StoreBanner = ({
  reducerPriceRangeFilter,
  sortArgsForFilter,
}) => {

  return (
    <Jumbotron style={backgroundJumbotron}>
      <Container style={textBanner}>
        <ItemsListHtagsLabels
          reducerPriceRangeFilter={reducerPriceRangeFilter}
          sortArgsForFilter={sortArgsForFilter}
        />
      </Container>
    </Jumbotron>
  )
};

StoreBanner.propTypes = propTypes;

export default StoreBanner;