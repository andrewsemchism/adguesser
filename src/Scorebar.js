import React from 'react';
import ReactDOM from 'react-dom';

class Scorebar extends React.Component {
  render() {
      return (
        <h4>Scorebar: Highscore: {this.props.highscore} Score: {this.props.score}</h4>
      );
  }
}
export default Scorebar;