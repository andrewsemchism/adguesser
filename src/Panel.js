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
          <h3 className='number hide-num'>{this.formatNumer(this.props.number)}</h3>
          <p className='hide-num'>ads posted</p>
          <button value="higher" id='higherBtn' className='btn btn-light' onClick={this.props.handleAnswer}><span id='higher-txt'>Higher ▲</span></button>
          <button value="lower" id='lowerBtn' className='btn btn-light' onClick={this.props.handleAnswer}><span id='lower-txt'>Lower ▼</span></button>
          <p>ads than {this.props.oldWord}</p>
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