import React from 'react';
import Scorebar from './Scorebar'
import Panel from './Panel'
import ReactDOM from 'react-dom';

class Ingame extends React.Component {

  constructor(props) {
    super(props);
    // roundState should have: new, win, lose
    this.state = {
      roundState: "new",
      currentWord: "towel",
      oldWord: "wallet",
      currentScore: 2
    };
    this.handleAnswer = this.handleAnswer.bind(this);
  }


  // Ingame logic
  // - We need to have two sides open - left and right
  // - right side needs to have the higher or lower buttons
  // - have a click handler the button (pass the value of the button through)
  // - See if the user selected the correct button in this class
  // 

  // I need the data first before I start working
  data = [
    {
      "name": "towel",
      "number": 5458
    },
    {
      "name": "window",
      "number": 106280
    },
    {
      "name": "wallet",
      "number": 54720
    },
    {
      "name": "blanket",
      "number": 9480
    }
  ];

  correct(answer, oldWord, currentWord) {
    let oldWordNum = 0;
    let currentWordNum = 0;
    for(var i = 0; i < this.data.length; i++)
    {
      if(this.data[i].name === oldWord)
      {
        oldWordNum = this.data[i].number;
      }
      if(this.data[i].name === currentWord)
      {
        currentWordNum = this.data[i].number ;
      }
    }
    if (answer === "higher" && currentWordNum >= oldWordNum) {
      return true;
    } else if (answer === "lower" && currentWordNum <= oldWordNum) {
      return true;
    } else {
      return false;
    }
  };

  getNewWord() {
    return this.data[Math.floor(Math.random() * this.data.length)].name;
  }

  getNumber(word) {
    for(var i = 0; i < this.data.length; i++)
    {
      if(this.data[i].name === word)
      {
        return this.data[i].number;
      }
    }
  }

  handleAnswer(e) {
    let answer = e.currentTarget.value;
    this.setState(prevState => {
      if (this.correct(answer, prevState.oldWord, prevState.currentWord)) {
        let genNewWord = this.getNewWord();
        return {
          roundState: "new",
          oldWord: prevState.currentWord,
          currentWord: genNewWord,
          currentScore: prevState.currentScore + 1
        }
      } else {
        return {
          roundState: "lose"
        }
      }
    });
  }



  // Render notes: 3 things
  // Score bar keeping track of score and highscore
  // section 1 with the first image and name - props: image, name, numberOfAds, bool showHigherLowerBtn, click handler
  // section 2 with the second image and name
  render() {
      return (
        <div>
          <Scorebar highscore={this.props.highscore} score={this.state.currentScore}/>
          <Panel name={this.state.oldWord} number={this.getNumber(this.state.oldWord)} current={false} handleAnswer={this.handleAnswer}/>
          <Panel name={this.state.currentWord} number={this.getNumber(this.state.currentWord)} current={true} handleAnswer={this.handleAnswer}/>
          <h1>In Game!!!</h1>
        </div>
        
      );
  }
}

export default Ingame;