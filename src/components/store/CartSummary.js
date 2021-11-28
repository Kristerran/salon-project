import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { ListGroup, ListGroupItem, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../../css/store/cart-summary.css';

const propTypes = {
  getCart: PropTypes.array.isRequired,
  empty: PropTypes.bool.isRequired
};

const CartSummary = ({ getCart, empty }) => {

  const CardPreview =
  <ListGroup>
    {
      !empty ?
    <Fragment>
     <ListGroupItem>
      {
        getCart.map(x=>
          <Row key={x._id}>
            <Col xs='9'><p style={styles.fontSize}>x{x.quantity} {x.name} {x.price}$ size: {x.size}</p></Col>
            <Col xs='3'><img style={{width: '20px'}} src={x.imag[0]} alt="" /></Col>
          </Row>
        )
      }
      </ListGroupItem>
      <ListGroupItem>
          <Link to="/checkout"><Button className='p-3 mb-2 bg-dark text-white' size="lg">Check out</Button></Link>
          <Link to="/cart"><Button outline color="secondary" size="lg">View Cart</Button></Link>
      </ListGroupItem>
    </Fragment>
    :
    <ListGroupItem>
      Empty card
    </ListGroupItem>
    }
  </ListGroup>;


  return CardPreview;

}

CartSummary.propTypes = propTypes;

export default CartSummary;