import React from 'react';
import ReactDOM from 'react-dom';

class Panel extends React.Component {

  formatNumer(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    if (this.props.current) {
      return (
        <div className='panel panel-2 d-flex flex-column align-items-center justify-content-center'>
          <h2 className='name'>"{this.props.name}"</h2>
          <p>has</p>
          <div id='reveal' className='flex-column align-items-center justify-content-center'>
            <h3 id='reveal-num'className='number'>{this.props.number}</h3>
            <p>ads posted</p>
          </div>
          <div id='show-buttons' className='flex-column align-items-center justify-content-center'>
            <button value="higher" id='higherBtn' className='btn btn-light' onClick={this.props.handleAnswer}><span id='higher-txt'>Higher ▲</span></button>
            <button value="lower" id='lowerBtn' className='btn btn-light' onClick={this.props.handleAnswer}><span id='lower-txt'>Lower ▼</span></button>
            <p id='ads-than'>ads than {this.props.oldWord}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className='panel panel-1 d-flex flex-column align-items-center justify-content-center'>
            <h2 className='name'>"{this.props.name}"</h2>
            <p>has</p>
            <h3 className='number'>{this.formatNumer(this.props.number)}</h3>
            <p>ads posted</p>
        </div>
      );
    }
      
  }
}

export default Panel;