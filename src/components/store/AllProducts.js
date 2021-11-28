
import PropTypes from "prop-types";
import React, { Component } from "react";
import { isBrowser } from "react-device-detect";
import Breadcrumbs from "./Breadcrumbs";
import { Col, Row, Container } from "reactstrap";
import StarRatings from "react-star-ratings";
import ButtonAddToCart from "./Button-add-to-cart";
import CheckoutModal from "./CheckoutModal";
import CarouselItemPage from "./Carousel-item";

const propTypes = {
  productInfo: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorFetching: PropTypes.bool,
  totalItemsSelectorStats: PropTypes.number.isRequired
};

const styles = {
  marginTop: "20px"
};

class AllProducts extends Component {
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
      productInfo, loading, errorFetching, addToCart,
      selectedImage,totalItemsSelectorStats
    } = this.props;

    const { selectedImage } = this.state;

    if (errorFetching) {
      return <p>Sorry! There was an error loading the product. Please try again.</p>;
    }

    const { size, img, sku } = productInfo;
    if (
      loading ||
      img === undefined ||
      sku === undefined
    ) {
      return <div style={{ height: "1000px" }} />;
    }
    const MainImageBrowserView = (
      <img
        src={productInfo.img[selectedImage]}
        alt="Smiley face"
        width="100%"
      />
    );
    const MainImageMobileView = (
      <CarouselItemPage imgsArray={productInfo.img} />
    );

    return (
      <div>
        <Breadcrumbs
          selectedCategory={productInfo.sku}
          backgroundColor={"white"}
          textColor={"black"}
        />
        <Container style={{paddingTop:'50px', paddingBottom:'80px'}}>
          <Row>
            <Col md="1">{isBrowser}</Col>
            <Col md="6">
              {isBrowser ? MainImageBrowserView : MainImageMobileView}
            </Col>
            <Col md="5">
              <h1>{productInfo.title}</h1>
              <div>{productInfo.price} $</div>
              <StarRatings
                rating={productInfo.rating}
                starDimension="15px"
                starSpacing="1px"
                starRatedColor="#072a48"
                changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
              />
              <div style={styles}>
                <ButtonAddToCart
                  sizeBtn="lg"
                  addToCart={addToCart}
                  productInfo={productInfo}
                  toggleModal={this.toggleModal}
                />
              </div>
              <CheckoutModal
                openModal={this.state.openModal}
                toggleModal={this.toggleModal}
                productInfo={productInfo}
                totalItemsSelectorStats={totalItemsSelectorStats}
              />
              <p style={{ paddingTop: "30px" }}>Description:</p>
              <p>{productInfo.description}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

AllProducts.propTypes = propTypes;

export default AllProducts;