import PropTypes from 'prop-types';
import React from 'react';
import { Badge } from 'reactstrap';

function ProductLabels() {
  
  const propTypes = {
    reducerPriceRangeFilter: PropTypes.number.isRequired,
    sortArgsForFilter: PropTypes.string.isRequired,
  };
  
  const ItemTags = ({ reducerPriceRangeFilter, sortArgsForFilter }) => {
  
    const priceLabel = <Badge style={{padding: '10px', margin:'10px'}} color='success'>{`#Price<${reducerPriceRangeFilter} $`} </Badge>
      const sortLabel = <Badge style={{padding: '10px', margin:'10px'}} color='danger'>{`#Sort: ${sortArgsForFilter}`} </Badge>
    const categoriesLabel = <Badge style={{padding: '10px', margin:'10px'}} color='light' ></Badge>
    return (
      <div style={{fontSize:'20px'}}>
        { sortLabel }
        { priceLabel }
        { categoriesLabel }
      </div>
    )
  };
  
  ItemTags.propTypes = propTypes;
}

export default ProductLabels;