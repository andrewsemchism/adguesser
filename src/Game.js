import './Game.css';
import Homepage from './Homepage'
import Ingame from './Ingame'
import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homepage: true,
      ingame: false,
      playagain: false,
      highscore: 5,
    };
    this.handleChangeScreen = this.handleChangeScreen.bind(this);
  }

  handleChangeScreen() {
    this.setState(prevState => {
      if (prevState.homepage) {
        return {
          homepage: false,
          ingame: true,
          playagain: false
        }
      } else if (prevState.ingame) {
        return {
          homepage: false,
          ingame: false,
          playagain: true
        }
      } else if ( prevState.playagain) {
        return {
          homepage: false,
          ingame: true,
          playagain: false
        }
      }
    });
  }

  render() {
    // Need to have 3 game states: Homepage, playing stage, and ending stage
    if ( this.state.homepage) {
      return (
        <Homepage changeScreen={this.handleChangeScreen}/>
      );
    }
    if ( this.state.ingame ) {
      return (
        <Ingame highscore={this.state.highscore}/>
      );
    }
    if (this.state.playagain) {
      // Need to add playagain component
    }
  }
}
export default Game;