import PropTypes from "prop-types";
import React, { Component } from "react";
import { isBrowser } from "react-device-detect";
import Breadcrumbs from "./Breadcrumbs";
import { Col, Row, Container } from "reactstrap";
import StarRatings from "./StarRatings";
import ButtonSizeSelect from "./BtnSizeSelect";
import ButtonAddToCart from "./BtnAddToCart";
import CheckoutModal from "./CheckoutModal";

const propTypes = {
  infoItem: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  selectedSize: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  errorFetching: PropTypes.bool,
  handleSizeSelection: PropTypes.func.isRequired,
  handleColorSelection: PropTypes.func.isRequired,
  totalItemsSelectorStats: PropTypes.number.isRequired
};

const styles = {
  marginTop: "20px"
};

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0,
      openModal: false
    };
  }

  toggleModal = () => this.setState({ openModal: !this.state.openModal });

  render() {
    const {
      infoItem,
      loading,
      errorFetching,
      addToCart,
      handleSizeSelection,
      validateSizeSelection,
      selectedSize,
      totalItemsSelectorStats,
      sizeSelectionMissingRemark
    } = this.props;

    const { selectedImage } = this.state;

    if (errorFetching) {
      return <p>Sorry! There was an error loading the items! Please reload the page!</p>;
    }

    const { size, images, tags } = infoItem;
    if (
      loading ||
      size === undefined ||
      images === undefined ||
      tags === undefined
    ) {
      return <div style={{ height: "1000px" }} />;
    }
    const thumbnailsBrowserView = infoItem.images.map((x, index) => (
      <div key={x} style={{ padding: "5px" }}>
        <img
          onMouseEnter={() => this.setState({ selectedImage: index })}
          src={infoItem.images[index]}
          alt="Smiley face"
          width="50px"
          height="70px"
          style={{cursor: 'pointer'}}
        />
      </div>
    ));
    const MainImageBrowserView = (
      <img
        src={infoItem.images[selectedImage]}
        alt="Smiley face"
        width="100%"
      />
    );
    const MainImageMobileView = (
      <CarouselItemPage imgsArray={infoItem.images} />
    );

    return (
      <div>
        <Breadcrumbs
          selectedCategory={infoItem.tags}
          backgroundColor={"white"}
          textColor={"black"}
        />
        <Container style={{paddingTop:'50px', paddingBottom:'80px'}}>
          <Row>
            <Col md="1">{isBrowser && thumbnailsBrowserView}</Col>
            <Col md="6">
              {isBrowser ? MainImageBrowserView : MainImageMobileView}
            </Col>
            <Col md="5">
              <h1>{infoItem.title}</h1>
              <div>{infoItem.price} $</div>
              <StarRatings
                rating={infoItem.rating}
                starDimension="15px"
                starSpacing="1px"
                starRatedColor="#072a48"
                changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
              />
              <div style={styles}>
                <ButtonSizeSelect
                  style={styles}
                  sizesArray={infoItem.size}
                  infoItem={infoItem}
                  handleSizeSelection={handleSizeSelection}
                  selectedSize={selectedSize}
                  validateSizeSelection={validateSizeSelection}
                />
                {sizeSelectionMissingRemark.length > 0 ? (
                  <b style={{ color: "red" }}>*{sizeSelectionMissingRemark}</b>
                ) : (
                  ""
                )}
              </div>
              <div style={styles}>
                <ButtonAddToCart
                  sizeBtn="lg"
                  addToCart={addToCart}
                  infoItem={infoItem}
                  selectedSize={selectedSize}
                  toggleModal={this.toggleModal}
                  validateSizeSelection={validateSizeSelection}
                  sizeSelectionMissingRemark={sizeSelectionMissingRemark}
                />
              </div>
              <CheckoutModal
                openModal={this.state.openModal}
                toggleModal={this.toggleModal}
                infoItem={infoItem}
                totalItemsSelectorStats={totalItemsSelectorStats}
                selectedSize={selectedSize}
              />
              <p style={{ paddingTop: "30px" }}>Description:</p>
              <p>{infoItem.description}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Item.propTypes = propTypes;

export default Item;