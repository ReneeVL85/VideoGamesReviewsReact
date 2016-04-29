import React from 'react';
import Index from "./index";

class Game extends React.Component {
  render() {
    return (
      <div className="Category">
        <h1>Game!</h1>
        <p>ID: {this.props.params.gameId}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Game;
