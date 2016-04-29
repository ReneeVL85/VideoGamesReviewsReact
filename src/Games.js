import React from 'react';
import Index from "./index";
import jQuery from "jquery";
import {Link} from "react-router";

class Games extends React.Component {
  constructor(){
    super();
    this.state = {
      games: []
    };
  }

  componentDidMount(){
    this.getGames();
  }

  getGames(){
    let component = this
    let url="https://gentle-wildwood-67500.herokuapp.com/categories/" + this.props.params.categoryId +  "/games.json";
    jQuery.getJSON(url, function(data){
      component.setState({
        games: data.games
      });
    });
  }

  render() {
    var categoryId = this.props.params.categoryId;
    return (
      <div className="games">
        <h1>Games!</h1>
        <ul>
        {this.state.games.map(function(game){
          return(
            <li key={game.id}>
            <Link to={`/categories/${categoryId}games/${game.id}`}>{game.title}</Link>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default Games;
