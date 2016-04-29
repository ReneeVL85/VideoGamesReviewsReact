import React from 'react';
import Index from "./index";

class Category extends React.Component {
  render() {
    return (
      <div className="Category">
        <h1>Category!</h1>
        <p>ID: {this.props.params.categoryId}</p>
        {this.props.children}
      </div>

    );
  }
}

export default Category;
