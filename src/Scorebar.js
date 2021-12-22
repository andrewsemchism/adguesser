import React from 'react';
import ReactDOM from 'react-dom';

class Scorebar extends React.Component {
  render() {
      return (
        <div className='scorebar d-flex justify-content-between'>
          <h4>Highscore: {this.props.highscore}</h4>
          <h4>Score: {this.props.score}</h4>
        </div>
        
      );
  }
}
export default Scorebar;