import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectorTotalAmountCart } from '../selectors/SelectorListStats';
import Checkout from '../Checkout.js';
import { addUserAddress } from '../actions/UserAction';

class CheckoutContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      step1: true,
      step2: false,
      step2Unlock: false,
      step3: false,
      step3Unlock: false,
      email: '',
      emailIsValid: true,
      firstName: 'fgsfdsf',
      lastName: 'fsdfsd',
      city: 'fdsfdsfdsf',
      state: 'fdsfdsf',
      zipCode: 87676,
      phoneNumber: 17671651111,
      address1: 'qdfsqfdsqfcfdxsf',
      address2: 'xsfdsxfsdfxsdf',
      shippingMethod: 2,
      formIsValid: false,
      totalDelivery: 5
    }
  };

  onChangeEmail = e => this.setState({ email: e.target.value});
  onChangeFirstName = e => this.setState({ firstName: e.target.value });
  onChangeLastName = e => this.setState({ lastName: e.target.value });
  onChangeCity = e => this.setState({ city: e.target.value });
  onChangeState = e => this.setState({ state: e.target.value });
  onChangeZipCode = e => this.setState({ zipCode: Number(e.target.value) });
  onChangePhoneNumber = e => this.setState({ phoneNumber: Number(e.target.value) });
  onChangeAddress1 = e => this.setState({ address1: e.target.value });
  onChangeAddress2 = e => this.setState({ address2: e.target.value });
  onChangeShippingMethod = shippingMethod => this.setState({ shippingMethod });
  handleEmailValidation = emailIsValid => this.setState({ emailIsValid });
  formValidator = formIsValid => this.setState({ formIsValid });

  toggle = step => {
    step === 'step1' ? this.setState({
      step1: true,
      step2: false,
      step3: false
    }) :
    step === 'step2' ? this.setState({
      step1: false,
      step2: true,
      step3: false
    }) :
    step === 'step3' && this.setState({
      step1: false,
      step2: false,
      step3: true
    })
  };

  stepsUnlock = step => {
    step === 'step2' ? this.setState({ step2Unlock: true, step1: false, step2: true, step3: false }) :
    step === 'step3' && this.setState({ step3Unlock: true, step1: false, step2: false, step3: true })
  };

  onSubmitOrder = () => {
    const { email, firstName, lastName, city, state, zipCode, phoneNumber, address1, address2, totalDelivery } = this.state;
    const { getCart, selectorTotalAmountCart } = this.props;
    const ref = Math.random().toString(36).substring(5)+ Date.now();
    axios.post('/api/add/orders', {
      ref,
      customerInfo: {email, firstName, lastName, city, state, zipCode, phoneNumber, address1, address2},
      order: getCart.map(x => ({idItem: x._id, nameItem:x.title, price:x.price, quantity:x.quantity})),
      totalDelivery,
      totalAmount: selectorTotalAmountCart
    })
    .catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
      <Checkout
        {...this.state}
        {...this.props}
        onChangeFirstName={this.onChangeFirstName}
        onChangeLastName={this.onChangeLastName}
        onChangeCity={this.onChangeCity}
        onChangeState={this.onChangeProvince}
        onChangeZipCode={this.onChangePostalCode}
        onChangePhoneNumber={this.onChangePhoneNumber}
        onChangeAddress1={this.onChangeAdress1}
        onChangeAddress2={this.onChangeAdress2}
        onChangeShippingMethod={this.onChangeShipppingMethod}
        stepsUnlock={this.stepsUnlock}
        toggle={this.toggle}
        onChangeEmail={this.onChangeEmail}
        handleEmailValidation={this.handleEmailValidation}
        formValidator={this.formValidator}
        onSubmitOrder={this.onSubmitOrder}
      />
      </div>

    )
  }
};


const mapStateToProps = state => ({
  getCart: state.cartReducer,
  getUserAddress: state.getUserAddress,
  selectorTotalAmountCart: selectorTotalAmountCart(state)
});

const mapDispatchToProps = dispatch => ({
  addUserAddress: x => dispatch(addUserAddress(x))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);