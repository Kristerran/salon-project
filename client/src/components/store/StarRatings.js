import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';

class StarRating extends Component {

  constructor(props){
    super(props);
    this.state = {
      rating: 3
    }
  };

  changeRating = ( newRating, name ) => {
    this.setState({
      rating: newRating
    });
  }

  render = () =>
    <StarRating
      rating={this.state.rating}
      starDimension="15px"
      starSpacing="1px"
      starRatedColor="yellow"
      changeRating={this.changeRating}
      numberOfStars={5}
      name='rating'
    />
};

export default StarRating;