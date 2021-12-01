import PropTypes from 'prop-types';
import React  from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import FilterByKeywords from './FilterByKeywords.js'
import FilterBySize from './FilterBySize.js'
import FilterByPrice from './FilterByPrice.js'

const propTypes = {
  dispatchSize: PropTypes.func.isRequired,
  sortSizeForFilter: PropTypes.string.isRequired,
  keywordsSelectAction: PropTypes.func.isRequired,
  categoriesProducts: PropTypes.object.isRequired,
  keywordsForFilter: PropTypes.array.isRequired,
  actionPriceRangeFilter: PropTypes.func.isRequired,
  reducerPriceRangeFilter: PropTypes.number.isRequired,
  listLength: PropTypes.number.isRequired
};

class BtnFilterMobile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {

    const {
      dispatchSize,
      sortSizeForFilter,
      keywordsSelectAction,
      categoriesProducts,
      keywordsForFilter,
      actionPriceRangeFilter,
      reducerPriceRangeFilter,
      listLength
    } = this.props;


    return (
      <div>
        <Button color="danger" style={{marginRight:'20px'}} onClick={this.toggle}>Filter the list</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Results: <b>{listLength}</b></ModalHeader>
          <ModalBody>
            <h4>Categories</h4>
              <FilterByKeywords
                keywordsForFilter={keywordsForFilter}
                keywordsSelectAction={keywordsSelectAction}
                categoriesProducts={categoriesProducts}
              />
            <h4>Size</h4>
              <FilterBySize
                dispatchSize={dispatchSize}
                sortSizeForFilter={sortSizeForFilter}
              />
            <h4>Price {`< ${reducerPriceRangeFilter}$`}</h4>
              <FilterByPrice
                actionPriceRangeFilter={actionPriceRangeFilter}
                reducerPriceRangeFilter={reducerPriceRangeFilter}
              />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

BtnFilterMobile.propTypes = propTypes;

export default BtnFilterMobile;