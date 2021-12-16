import './Game.css';
import Homepage from './Homepage'
import Ingame from './Ingame'
import Playagain from './Playagain'
import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component {

  constructor(props) {
    super(props);
    /*
    homepage: true,
      ingame: false,
      playagain: false,
      */
    this.state = {
      page: "homepage",
      highscore: 5,
    };
    this.handleChangeScreen = this.handleChangeScreen.bind(this);
  }

  handleChangeScreen() {
    this.setState(prevState => {
      if (prevState.page === "homepage") {
        return {
          page: "ingame"
        }
      } else if (prevState.page === "ingame") {
        return {
          page: "playagain"
        }
      } else if (prevState.page === "playagain") {
        return {
          page: "ingame"
        }
      }
    });
  }

  render() {
    // Need to have 3 game states: Homepage, playing stage, and ending stage
    if ( this.state.page === "homepage") {
      return (
        <Homepage changeScreen={this.handleChangeScreen}/>
      );
    }
    if ( this.state.page === "ingame" ) {
      return (
        <Ingame highscore={this.state.highscore} changeScreen={this.handleChangeScreen}/>
      );
    }
    if (this.state.page === "playagain") {
      return (
        <Playagain highscore={this.state.highscore} changeScreen={this.handleChangeScreen}/>
      );
    }
  }
}
export default Game;