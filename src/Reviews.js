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
    let url="https://gentle-wildwood-67500.herokuapp.com/categories/"+ this.props.params.categoryId + "/games/" + this.props.params.gamesId + "/reviews.json";
    jQuery.getJSON(url, function(data){
      component.setState({
        games: data.reviews
      });
    });
  }

  render() {
    var categoryId = this.props.params.categoryId
    var gamesId = this.props.params.gamesId
    return (
      <div className="reviews">
        <h1>Games!</h1>
        <ul>
        {this.state.reviews.map(function(game){
          return(
            <li key={review.id}>
            <Link to={`/categories/${categoryId}games/${gameId}/reviews/${review.id}`}>{review.title}</Link>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default Reviews;
