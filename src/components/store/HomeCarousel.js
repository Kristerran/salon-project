import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, Col, Row } from 'reactstrap';
import ButtonInternalLink from './BtnInternalLink.js';
import Placeholder from '../../assets/images/placeholder.png';

const styles = {
  sliderContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color:'white'
  }
}

const items = [
  {
    src: {Placeholder},
    altText: 'Slide 1',
    caption: 'Slide 1',
    title: 'Womens haircare',
    subtitle: 'ya',
    btn: {
      content: 'Go to the collection',
      link: '/category/women'

    }
  },
  {
    src: {Placeholder},
    altText: 'Slide 2',
    caption: 'Slide 2',
    title: "Mens Haircare",
    subtitle: 'Ya',
    btn: {
      content: 'Cool collection',
      link: '/category/men'

    }
  },
  {
    src: {Placeholder},
    altText: 'Slide 3',
    caption: 'Slide 3',
    title: 'Services',
    subtitle: 'Amazing!',
    btn: {
      content: 'See our list of services',
      link: '/category/services'

    }
  }
];

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(x => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={x.src}
        >
          <Row  style={{backgroundColor: '#072a48'}}>
            <Col md="6">
              <img src={x.src} alt={x.altText} style={{width: '100%', maxHeight: '500px'}}/>
            </Col>
            <Col md="6" style={styles.sliderContent}>
              <h2>{x.title}</h2>
              <p>{x.subtitle}</p>
              <ButtonInternalLink 
                content={x.btn.content}
                link={x.btn.link}
                lightOrDark='light'
                sizeBtn='lg'
              />
            </Col>
          </Row>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default HomeCarousel;