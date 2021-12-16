import React from 'react';
import ReactDOM from 'react-dom';

class Playagain extends React.Component {

  render() {
      return (
        <div>
          <h2>Playagain</h2>
          <button onClick={this.props.changeScreen}></button>
        </div>
      );
    }
}

export default Playagain;