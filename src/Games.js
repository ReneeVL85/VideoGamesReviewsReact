import React from 'react';
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
    let url="https://gentle-wildwood-67500.herokuapp.com/categories/1/games.json";
    jQuery.getJSON(url, function(data){
      component.setState({
        games: data.games
      });
    });
  }

  render() {
    return (
      <div className="Categories">
        <h1>Games!</h1>
        <ul>
        {this.state.games.map(function(game){
          return(
            <li key={game.id}>
            <Link to={`/categories/${category.id}games/${game.id}`}>{game.title}</Link>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default Games;
