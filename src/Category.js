import React from 'react';
import jQuery from "jquery";

class Category extends React.Component {
  constructor(){
    super();
    this.state = {
      category: {}
    };
  }

  componentDidMount(){
    this.getCategories();
  }

  getCategories(){
    let component = this;
    let url="https://gentle-wildwood-67500.herokuapp.com/categories/" + this.props.params.categoryId +  "/games.json";
    jQuery.getJSON(url, function(data){
      component.setState({
        category: data.category
      });
    });
  }

  render() {

    return (
      <div className="Category">
        <h1>Category!</h1>
        <p>{this.state.category.name}</p>
        {this.props.children}
      </div>

    );
  }
}

export default Category;
