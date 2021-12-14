import React from 'react';
import Scorebar from './Scorebar'
import ReactDOM from 'react-dom';

class Ingame extends React.Component {

  constructor(props) {
    super(props);
    // roundState should have: new, win, lose
    this.state = {
      roundState: "new",
      currentScore: 0
    };
  }


  // Ingame logic
  // - We need to have two sides open - left and right
  // - right side needs to have the higher or lower buttons
  // - have a click handler the button (pass the value of the button through)
  // - See if the user selected the correct button in this class
  // 


  // Render notes: 3 things
  // Score bar keeping track of score and highscore
  // main display with the two images
  // higher or lower buttons plastered on top
  render() {
      return (
        <div>
          <Scorebar highscore={this.props.highscore} score={this.state.currentScore}/>
          <h1>In Game!!!</h1>
        </div>
        
      );
  }
}

export default Ingame;