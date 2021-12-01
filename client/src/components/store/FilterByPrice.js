import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-rangeslider';
import '../../css/rangeslider.min.css';

const propTypes = {
  actionPriceRangeFilter: PropTypes.func.isRequired,
  reducerPriceRangeFilter: PropTypes.number.isRequired,
};

const styles = {
  display: 'flex',
  justifyContent: 'space-around'
};

const FilterByPrice = ({
  actionPriceRangeFilter,
  reducerPriceRangeFilter
}) => (
    <div>
      <Slider
        max={200}
        step={1}
        value={reducerPriceRangeFilter}
        onChange={actionPriceRangeFilter}
      />
      <div style={styles}>
        <span>
          Min
        </span>
        <span>
          Max
        </span>
      </div>
    </div>
  );

FilterByPrice.propTypes = propTypes;

export default FilterByPrice;