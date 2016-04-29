import React from 'react';

class Review extends React.Component {

  onSubmit(event){
    event.preventDefault();
    var reviewGame = this.refs.reviewInput.value;
    this.props.onSubmit(reviewGame);
  }

  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Review:</label>
        <input ref="reviewInput" />
        <button>Add Review</button>
      </form>
    );
  }
}

export default Review;
