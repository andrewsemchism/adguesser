import React from 'react';
import ReactDOM from 'react-dom';

class Panel extends React.Component {

  render() {
    if (this.props.current) {
      return (
        <div>
          <h2>{this.props.name}</h2>
          <button value="higher" onClick={this.props.handleAnswer}>HIGHER</button>
          <button value="lower" onClick={this.props.handleAnswer}>LOWER</button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>{this.props.name}</h2>
          <h3>{this.props.number}</h3>
        </div>
      );
    }
      
  }
}

export default Panel;