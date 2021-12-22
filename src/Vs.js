import React from 'react';
import ReactDOM from 'react-dom';

class Vs extends React.Component {

  render() {
    let className = 'vs';
    let vsText = 'vs';
    if (this.props.view === "win") {
      className += ' vs-win';
      vsText = '✓';
    }
    if (this.props.view === "lose") {
      className += ' vs-lose';
      vsText = '✖';
    }
    return (
      <div className={className}>
        <div className='vs-text'>
          {vsText}
        </div>
      </div>
    );
  }
} 
export default Vs;