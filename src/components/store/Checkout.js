import PropTypes from 'prop-types';
import React from 'react';
import CheckoutStepOne from './CheckoutStepOne';
import CheckoutStepTwo from './CheckoutStepTwo';
import CheckoutStepThree from './CheckoutStepThree';
import CheckoutSummary from './CartSummary.js';
import { Row, Col, Container, Progress, ListGroup } from 'reactstrap';

const propTypes = {
  getCart: PropTypes.array.isRequired,
  addUserAddress: PropTypes.func.isRequired,
  getUserAddress: PropTypes.object.isRequired,
  step1: PropTypes.bool.isRequired,
  step2: PropTypes.bool.isRequired,
  step3: PropTypes.bool.isRequired,
  step2Unlock: PropTypes.bool.isRequired,
  step3Unlock: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
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
  onChangeEmail: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  stepsUnlock: PropTypes.func.isRequired,
  formValidator: PropTypes.func.isRequired,
  onSubmitOrder: PropTypes.func.isRequired
};

const styles = {
  container: {
    paddingTop: '120px',
    paddingBottom: '120px'
  },
  h1: {
    paddingBottom: '20px'
  },
  collapsePanel: {
    borderBottom: '1px solid grey'
  },
  collapsePanelTitle: {
    cursor: 'pointer'
  },
  formFieldsSpace: {
    paddingTop: '10px'
  }
}

const CheckoutContainer = ({
  getCart,
  addUserAddress,
  getUserAddress,
  step1,
  step2,
  step3,
  step2Unlock,
  step3Unlock,
  email,
  firstName,
  lastName,
  city,
  state,
  zipCode,
  phoneNumber,
  address1,
  address2,
  shippingMethod,
  formIsValid,
  onChangeFirstName,
  onChangeLastName,
  onChangeCountry,
  onChangeCity,
  onChangeState,
  onChangeZipCode,
  onChangePhoneNumber,
  onChangeAddress1,
  onChangeAddress2,
  onChangeShippingMethod,
  onChangeEmail,
  toggle,
  stepsUnlock,
  formValidator,
  emailIsValid,
  handleEmailValidation,
  onSubmitOrder,
  selectorTotalAmountCart,
  totalDelivery
}) => (
  <div>
    <Progress value={ step3Unlock ? 100 : step2Unlock ? 66 :  33} />
    <Container style={styles.container}>
    <h1 style={styles.h1}>Check out</h1>
      <Row>
        <Col md='8'>
          <ListGroup flush >
            <CheckoutStepOne
              styles={styles}
              email={email}
              emailIsValid={emailIsValid}
              handleEmailValidation={handleEmailValidation}
              onChangeEmail={onChangeEmail}
              stepsUnlock={stepsUnlock}
              step1={step1}
              step2={step2}
              step2Unlock={step2Unlock}
              toggle={toggle}
            />
            <CheckoutStepTwo
              styles={styles}
              stepsUnlock={stepsUnlock}
              step2={step2}
              step2Unlock={step2Unlock}
              toggle={toggle}
              onChangeFirstName={onChangeFirstName}
              onChangeLastName={onChangeLastName}
              onChangeCountry={onChangeCountry}
              onChangeCity={onChangeCity}
              onChangeState={onChangeState}
              onChangeZipCode={onChangeZipCode}
              onChangePhoneNumber={onChangePhoneNumber}
              onChangeAddress1={onChangeAddress1}
              onChangeAddress2={onChangeAddress2}
              onChangeShippingMethod={onChangeShippingMethod}
              email={email}
              firstName={firstName}
              lastName={lastName}
              city={city}
              state={state}
              zipCode={zipCode}
              phoneNumber={phoneNumber}
              address1={address1}
              address2={address2}
              shippingMethod={shippingMethod}
              formValidator={formValidator}
              formIsValid={formIsValid}
              addUserAddress={addUserAddress}
            />
            <CheckoutStepThree
              styles={styles}
              step3={step3}
              step3Unlock={step3Unlock}
              toggle={toggle}
              getUserAddress={getUserAddress}
              onSubmitOrder={onSubmitOrder}
              selectorTotalAmountCart={selectorTotalAmountCart}
              totalDelivery={totalDelivery}
            />
          </ListGroup>
        </Col>
        <Col md='4'>
          <CheckoutSummary
            getCart={getCart}
            selectorTotalAmountCart={selectorTotalAmountCart}
            totalDelivery={totalDelivery}
          />
        </Col>
      </Row>
    </Container>
  </div>
);

CheckoutContainer.propTypes = propTypes;

export default CheckoutContainer;