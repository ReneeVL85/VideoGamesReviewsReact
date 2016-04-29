import React from 'react';
import Index from "./index";
import jQuery from "jquery";
import {Link} from "react-router";

class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      game: []
    };
  }

  componentDidMount(){
    this.getGame();
  }

  getGame(){
    let component = this
    let url="https://gentle-wildwood-67500.herokuapp.com/categories/" + this.props.params.categoryId +  "/games.json";
    jQuery.getJSON(url, function(data){
      component.setState({
        game: data.game
      });
    });
  }

  render() {
    return (
      <div className="Game">
        <h1>Game!</h1>
        <p>ID: {this.state.game.name}</p>
      </div>

    );
  }
}


export default Game;
