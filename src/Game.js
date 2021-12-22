import './Game.css';
import Homepage from './Homepage'
import Ingame from './Ingame'
import Playagain from './Playagain'
import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "homepage",
      currentscore: 0,
      highscore: 0,
    };
    this.handleChangeScreen = this.handleChangeScreen.bind(this);
    this.clearScore = this.clearScore.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
  }

  handleChangeScreen() {
    this.setState(prevState => {
      if (prevState.page === "homepage") {
        return {
          currentscore: 0,
          page: "ingame"
        }
      } else if (prevState.page === "ingame") {
        return {
          page: "playagain"
        }
      } else if (prevState.page === "playagain") {
        return {
          currentscore: 0,
          page: "ingame"
        }
      }
    });
  }

  clearScore() {
    this.setState({
      currentscore: 0
    })
  }

  incrementScore() {
    this.setState(prevState => {
      if (prevState.currentscore + 1 >= prevState.highscore) {
        return {
          currentscore: prevState.currentscore + 1,
          highscore: prevState.currentscore + 1
        }
      } else {
        return {
          currentscore: prevState.currentscore + 1
        }
      }
    })
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
        <Ingame highscore={this.state.highscore} currentscore={this.state.currentscore} changeScreen={this.handleChangeScreen} clearScore={this.clearScore} incrementScore={this.incrementScore}/>
      );
    }
    if (this.state.page === "playagain") {
      return (
        <Playagain highscore={this.state.highscore} currentscore={this.state.currentscore} changeScreen={this.handleChangeScreen}/>
      );
    }
  }
}
export default Game;