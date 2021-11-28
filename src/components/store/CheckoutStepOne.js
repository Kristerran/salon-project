import PropTypes from 'prop-types';
import React from 'react'
import { Row, Col, Input, Badge, Button, ListGroupItem, Collapse, Label,FormFeedback } from 'reactstrap';

const propTypes = {
  email: PropTypes.string.isRequired,
  step1: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  stepsUnlock: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  emailIsValid: PropTypes.bool.isRequired,
  handleEmailValidation: PropTypes.func.isRequired,
  emailIsValid: PropTypes.bool.isRequired,
};

const CheckoutStepOne = ({ styles, email, step1, toggle, stepsUnlock, emailIsValid, handleEmailValidation, onChangeEmail}) => {

  const emailValidation = (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(String(email).toLowerCase())

  return (
    <ListGroupItem disabled={!step1} style={styles.collapsePannel}>
      <h3 style={styles.collapsePanelTitle} onClick={()=>toggle('step1')} >
        <Badge color="secondary" pill size='sm'>1</Badge>  Customer
      </h3>
      <Collapse isOpen={step1}>
      <p>Express Checkout: Enter your email address and follow the steps in the email response to create an account.</p>
      <Label for="exampleEmail">Email</Label>
      <Row>
        <Col md="6">
          <Input
            invalid={!emailIsValid}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@gmail.com"
            value={email}
            onChange={onChangeEmail}
          />
          <FormFeedback>
            Email is not valid
          </FormFeedback>
        </Col>
        <Col md="6">
          <Button disabled={false} onClick={()=>{
            if (emailValidation) {
              stepsUnlock('step2');
              handleEmailValidation(true)
            } else {
              handleEmailValidation(false)
            }
            }}>Continue</Button>
        </Col>
      </Row>
      </Collapse>
    </ListGroupItem>
  )
}

CheckoutStepOne.propTypes = propTypes;

export default CheckoutStepOne;