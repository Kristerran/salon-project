import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const propTypes = {
    addToCart: PropTypes.func.isRequired,
    infoItem: PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired,
};

const AddToCartButton = ({
    addToCart, infoItem, toggleModal
}) => {

    return (
        <Fragment>
            <Button onClick={() => {
                return (
                    addToCart({ ...infoItem }) && toggleModal()
                )
            }}>Add to Cart</Button>
        </Fragment>
    );
};
AddToCartButton.propTypes = propTypes;
export default AddToCartButton;
