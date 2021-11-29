import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

const propTypes = {
  addToCart: PropTypes.func.isRequired,
  sizeBtn: PropTypes.string.isRequired,
  infoItem: PropTypes.object.isRequired,
  selectedSize: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  validateSizeSelection: PropTypes.func.isRequired,
  sizeSelectionMissingRemark: PropTypes.string.isRequired
};

const BtnAddToCart = ({
  addToCart,
  sizeBtn,
  infoItem,
  selectedSize,
  toggleModal,
  validateSizeSelection,
  sizeSelectionMissingRemark
}) => {

  const colorBtn = (sizeSelectionMissingRemark.length > 0) ? 'danger' : 'success'

  return (
    <Fragment>
      <Button color={colorBtn} size={sizeBtn} onClick={()=>{ return(
        selectedSize.length < 1 && validateSizeSelection('Please, select a size'),
        selectedSize.length > 0 && addToCart({...infoItem, selectedSize }) && toggleModal()
      )}}>Add to Cart</Button>
    </Fragment>

);};

BtnAddToCart.propTypes = propTypes;

export default BtnAddToCart;