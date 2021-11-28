import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';

const propTypes = {
  infoItem: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  totalItems: PropTypes.number.isRequired
};

const CheckoutModal = ({ infoItem, openModal, toggleModal, size, totalItems}) => (
  <Modal isOpen={openModal} toggle={toggleModal} >
    <ModalHeader toggle={toggleModal}>You have {totalItems} item{totalItems>1 && 's'} in your cart</ModalHeader>
    <ModalBody>
      {totalItems>1 && 'last item added:'}
      <Row>
        <Col xs="6"><img src={infoItem.img[0]} style={{width: '100%'}} alt="" /> </Col>
        <Col xs="6">
          <b>{infoItem.name}</b>
          <div>{infoItem.price} $</div>
          <div>size: {size}</div>
        </Col>
      </Row>
    </ModalBody>
    <ModalFooter>
      <Link to="/cart" className="text-white"> <Button outline color='secondary' onClick={toggleModal}>Edit cart</Button></Link>{' '}
      <Link to="/checkout" className="text-white"> <Button color='secondary' onClick={toggleModal}>Checkout</Button></Link>
    </ModalFooter>
  </Modal>
);

CheckoutModal.propTypes = propTypes;

export default CheckoutModal;