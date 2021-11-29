import PropTypes from 'prop-types';
import React from 'react';
import { Row,  Col,  Input,  Badge,  Button,  ListGroupItem,  Collapse,  Label,  Alert, FormGroup } from 'reactstrap';

const propTypes = {
  addUserAddress: PropTypes.func.isRequired,
  step2: PropTypes.bool.isRequired,
  step2Unlock: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string.isRequired,
  shippingMethod: PropTypes.number.isRequired,
  formIsValid: PropTypes.bool.isRequired,
  onChangeFirstName: PropTypes.func.isRequired,
  onChangeLastName: PropTypes.func.isRequired,
  onChangeCountry: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  onChangeState: PropTypes.func.isRequired,
  onChangeZipCode: PropTypes.func.isRequired,
  onChangePhoneNumber: PropTypes.func.isRequired,
  onChangeAddress1: PropTypes.func.isRequired,
  onChangeAddress2: PropTypes.func.isRequired,
  onChangeShippingMethod: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  stepsUnlock: PropTypes.func.isRequired,
  formValidator: PropTypes.func.isRequired
};

const CheckoutStepTwo = ({
  styles,
  step2,
  step2Unlock,
  toggle,
  stepsUnlock,
  onChangeFirstName,
  onChangeLastName,
  onChangeCity,
  onChangeState,
  onChangeZipCode,
  onChangePhoneNumber,
  onChangeAddress1,
  onChangeAddress2,
  onChangeShippingMethod,
  firstName,
  lastName,
  city,
  state,
  zipCode,
  phoneNumber,
  address1,
  address2,
  shippingMethod,
  formValidator,
  formIsValid,
  addUserAddress
}) => {

  const validatorClient = {
    firstName: firstName.length > 2 && typeof firstName === 'string',
    lastName: lastName.length > 2 && typeof lastName === 'string',
    city: city.length > 2 && typeof city === 'string',
    state: state.length > 2 && typeof state === 'string',
    zipCode: typeof zipCode === 'number',
    phoneNumber: typeof phoneNumber === 'number',
    address1: address1.length > 2 && typeof address1 === 'string'
  }

  const warningValidator = (x) => {
    if(x) {
      if([...new Set(Object.entries(validatorClient).map(([k, v]) => (v)))].sort()[0] === false){
        return(
          <Row>
            <Alert color="danger">
            Please fill these fields correctly:
              {!validatorClient.firstName && <div>First Name</div>}
              {!validatorClient.lastName && <div>Last Name</div>}
              {!validatorClient.city && <div>City</div>}
              {!validatorClient.state && <div>State</div>}
              {!validatorClient.zipCode && <div>Zip Code</div>}
              {!validatorClient.phoneNumber && <div>Phone Number</div>}
              {!validatorClient.address1 && <div>Address</div>}
            </Alert>
          </Row>
        )
      } else {
        return(
          <Alert color="success">
            Thank you! Click 'Continue'
          </Alert>
        )
      }
    } 
  }

  return (
    <div style={styles.collapsePanel}>
    <ListGroupItem disabled={!step2}>
    <h3 style={styles.collapsePanelTitle} onClick={()=>step2Unlock && toggle('step2')}>
      <Badge color="secondary" pill size='sm'>2</Badge>  Shipping {}
    </h3>
    <Collapse isOpen={step2}>
      <Row>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label for="First name">First Name</Label>
          <Input type='text' onChange={onChangeFirstName} value={firstName} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label for="exampleEmail">Last Name</Label>
          <Input type='text' onChange={onChangeLastName} value={lastName} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>City</Label>
          <Input type='text' onChange={onChangeCity} value={city} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>State</Label>
          <Input type='text' onChange={onChangeState} value={state} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>Zip Code</Label>
          <Input type='number' onChange={onChangeZipCode} value={zipCode} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>Phone Number</Label>
          <Input type='number' onChange={onChangePhoneNumber} value={phoneNumber} />
        </Col>
        <Col md={12} style={styles.formFieldsSpace}>
          <Label for="Address1">Address</Label>
          <Input type='text' onChange={onChangeAddress1} value={address1} />
        </Col>
        <Col md={12} style={styles.formFieldsSpace}>
          <Label>Address 2</Label>
          <Input type='text' onChange={onChangeAddress2} value={address2} />
        </Col>
        <Col xs={6} style={styles.formFieldsSpace}>
          <FormGroup style={styles.formFieldsSpace}>
            <Label for="exampleCheckbox" ><u>Shipping Method</u></Label>
            <FormGroup check>
              <Label check>
                <Input type="radio" onChange={()=>onChangeShippingMethod(1)} checked={shippingMethod === 1} />{' '}
                Express (2 Day Shipping)
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" onChange={()=>onChangeShipppingMethod(2)} checked={shippingMethod === 2} />{' '}
                Standard (5-7 Day Shipping)
              </Label>
            </FormGroup>
          </FormGroup>
        </Col>
        <div className='d-flex align-items-center'>
          <Button disabled={false} onClick={()=>{
              if([...new Set(Object.entries(validatorClient).map(([k, v]) => (v)))].sort()[0]){
                return stepsUnlock('step3'), addUserAddress({
                  firstName,
                  lastName,
                  city,
                  state,
                  zipCode,
                  phoneNumber,
                  address1,
                  address2
                })
              } else {
                formValidator(true)
              }
              }}>Continue</Button>
        </div>
      </Row>
      {warningValidator(formIsValid)}
    </Collapse>
  </ListGroupItem>
  </div>
  )
}

CheckoutStepTwo.propTypes = propTypes;

export default CheckoutStepTwo;