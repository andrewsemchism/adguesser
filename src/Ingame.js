import React from 'react';
import Scorebar from './Scorebar'
import Panel from './Panel'
import Vs from './Vs'
import { CountUp } from 'countup.js';
import ReactDOM from 'react-dom';

class Ingame extends React.Component {

  constructor(props) {
    super(props);
    // roundState should have: new, win, lose
    this.state = {
      roundState: "new",
      currentWord: "Towel",
      oldWord: "Wallet",
      vs: "vs"
    };
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  data = [
    {
      "name": "Towel",
      "number": 5458
    },
    {
      "name": "Window",
      "number": 106280
    },
    {
      "name": "Wallet",
      "number": 54720
    },
    {
      "name": "Blanket",
      "number": 9480
    }
  ];

  formatNumer(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  correct(answer, oldWord, currentWord) {
    let oldWordNum = this.getNumber(oldWord);
    let currentWordNum =  this.getNumber(currentWord);
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
    // Get answer
    let answer = e.currentTarget.value;
    // Reveal answer and show count up animation
    let num = document.querySelector('#reveal-num').innerHTML.replace(/,/g, '');;
      const options = {
        duration: 1,
      };
      let demo = new CountUp('reveal-num', num, options);
      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }
    document.querySelector('#reveal').style.display = 'flex';
    document.querySelector('#show-buttons').style.display = 'none';
    // Evaluate answer and show win/lose animation
    setTimeout(() => {
      this.setState(prevState => {
        if (this.correct(answer, prevState.oldWord, prevState.currentWord)) {
            return {
              vs: "win"
            }
          } else {
            return {
              vs: "lose"
            }
          }
        }
      )
    }, 1100);
    // Evaluate answer and switch screens
    setTimeout(() => {
      document.querySelector('#reveal').style.display = 'none';
      document.querySelector('#show-buttons').style.display = 'flex';
      this.setState(prevState => {
        if (this.correct(answer, prevState.oldWord, prevState.currentWord)) {
          let genNewWord = this.getNewWord();
          this.props.incrementScore()
          return {
            roundState: "new",
            oldWord: prevState.currentWord,
            currentWord: genNewWord,
            vs: "vs"
          }
        } else {
          this.props.changeScreen();
          return {
            roundState: "lose",
            vs: "vs"
          }
        }
      });
    }, 3000);
    
  }



  // Render notes: 3 things
  // Score bar keeping track of score and highscore
  // section 1 with the first image and name - props: image, name, numberOfAds, bool showHigherLowerBtn, click handler
  // section 2 with the second image and name
  render() {
      return (
        <div>
          <Scorebar highscore={this.props.highscore} score={this.props.currentscore}/>
          <Vs view={this.state.vs}></Vs>
          <div className='panels d-flex'>
            <div id="dimmer"></div>
            <Panel name={this.state.oldWord} number={this.getNumber(this.state.oldWord)} current={false} handleAnswer={this.handleAnswer}/>
            <Panel name={this.state.currentWord} oldWord={this.state.oldWord} number={this.getNumber(this.state.currentWord)} current={true} handleAnswer={this.handleAnswer}/>
          </div>
        </div>
        
      );
  }
}

export default Ingame;