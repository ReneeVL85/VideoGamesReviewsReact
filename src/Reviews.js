import React from 'react';
import jQuery from "jquery";

class Reviews extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount(){
    this.getReviews();
  }

  getReviews(){
    let component = this
    let url="https://gentle-wildwood-67500.herokuapp.com/categories/ +this.props.params.categoryId+ /games/ + this.props.params.gamesId/reviews.json";
    jQuery.getJSON(url, function(data){
      component.setState({
        games: data.reviews
      });
    });
  }

  render() {
    return (
      <div className="reviews">
        <h1>Games!</h1>
        <ul>
        {this.state.reviews.map(function(game){
          return(
            <li key={review.id}>
            <Link to={`/categories/${category.id}games/${game.id}/reviews/${review.id}`}>{review.title}</Link>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default Reviews;
