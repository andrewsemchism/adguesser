import React from 'react';
import ReactDOM from 'react-dom';

class Playagain extends React.Component {

  render() {
      return (
        <div className='background'>
        <div className='logo-small'></div>
        <h3 className='scored'>You Scored:</h3>
        <h2 className='your-score'>{this.props.currentscore}</h2>
        
        <h3 className='header-playagain'>Which item has more listings on Kijiji?</h3>
        <button id='playagain-btn' className='btn btn-dark' onClick={this.props.changeScreen}><span id='playagain-txt'>Play Again</span><span id='playagain-symbol'>▶</span></button>
      </div>
      );
    }
}

export default Playagain;