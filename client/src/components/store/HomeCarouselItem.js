import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators} from 'reactstrap';
import Placeholder from '../../assets/images/placeholder.png';

const items = [
  {
    src: {Placeholder},
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: {Placeholder},
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: {Placeholder},
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class CarouselItemPage extends Component {
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
    const nextIndex = this.state.activeIndex === this.props.imgsArray.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.imgsArray.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.imgsArray.map((x, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <img style={{width: '100%', height: '350px'}} src={x} alt={x} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselItemPage;