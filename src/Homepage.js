import React from 'react';
import ReactDOM from 'react-dom';

class Homepage extends React.Component {

  render() {
      return (
        <div className='background'>
          <div className='logo'></div>
          <h3 class='header'>Which item has more listings on Kijiji?</h3>
          <button id='play-btn' className='btn btn-dark' onClick={this.props.changeScreen}>Play ▶</button>
        </div>
        
      );
  }
}

export default Homepage;
