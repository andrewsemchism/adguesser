import React from 'react';
import ReactDOM from 'react-dom';

class Homepage extends React.Component {

  render() {
      return (
        <div>
          <h1>This is the homepage.</h1>
          <button onClick={this.props.changeScreen}></button>
        </div>
        
      );
  }
}

export default Homepage;
