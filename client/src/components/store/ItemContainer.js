import React, { Component } from 'react';
import { fetchItemApi } from '../actions/DataFetchAction.js';
import { addToCart } from '../actions/CartAction.js';
import { connect } from 'react-redux';
import { selectorTotalItemsCart } from '../selectors/SelectorListStats.js';
import Item from './Item.js';

class ItemContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedSize: '',
      sizeSelectionMissingRemark: '',
    }
  }

  componentDidMount = () => this.props.fetchItemApi(`/api/productsdata/${this.props.match.params.id}`);

  handleSizeSelection = selectedSize => this.setState({ selectedSize });

  validateSizeSelection = remark => remark === 'valid' ? this.setState({ sizeSelectionMissingRemark: '' }) : this.setState({ sizeSelectionMissingRemark: remark });


  render = () => <Item {...this.props} {...this.state} handleSizeSelection={this.handleSizeSelection} validateSizeSelection={this.validateSizeSelection} />;

};

const mapStateToProps = state => ({
  infoItem: state.itemFetchDataSuccess,
  loading: state.itemIsLoading,
  errorFetching: state.itemHasError,
  totalItemsSelectorStats: selectorTotalItemsCart(state)
});

const mapDispatchToProps = dispatch => ({
  fetchItemApi: url => dispatch(fetchItemApi(url)),
  addToCart: x => dispatch(addToCart(x))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);