import React, { Component } from 'react';


import Person from './Person';


var people = [
  {
    name: 'Губка Боб',
    image: './images/bob.jpg',
    rating: 100
  },
  {
    name: 'Микрочел',
    image: './images/man.jpg',
    rating: 102
  },
  {
    name: 'Пепега',
    image: './images/pepega.jpg',
    rating: 104
  },
  {
    name: 'Маэстро',
    image: './images/maestro.jpg',
    rating: 300
  },
  {
    name: 'Кот',
    image: './images/cat.jpg',
    rating: 200
  },
  {
    name: 'Лысый',
    image: './images/lisii.jpg',
    rating: 100
  }
];


class App extends Component {

  constructor(props) {
    super(props);
    this.data = people;
    this.state = {
      current: [3, 5],
      toFlip: -1
    };
  }

  nextPeople(chosenIndex) {
    this.setState({
      toFlip: chosenIndex === 0 ? 1 : 0,
      current: this.getNextPeople(this.state.current, chosenIndex, this.data.length - 1)
    });

    setTimeout(() => {
      this.setState({
        toFlip: -1
      });
    }, 550);
  }

  getNextPeople(current, chosenIndex, limit) {
    var random,
      result = Array(2),
      insertionIndex = chosenIndex === 0 ? 1 : 0;

    result[chosenIndex] = current[chosenIndex];

    while(true) {
      random = randomInRange();
      if(!~(current.indexOf(random))) {
        result[insertionIndex] = random;
        return result;
      }
    }

    function randomInRange() {
      return Math.floor( Math.random() * ( 1 + limit) ) ;
    }
  }

  render() {
    var {current, toFlip} = this.state;
    return (
      <div className="App">
        <div className="separator">or</div>
        { 
          current.map((x, index) => {
            return (<Person 
              index={index}
              data={this.data[current[index]]} 
              next={this.nextPeople.bind(this)}
              shouldFlip={index === toFlip}
            />);
          })
        }
      </div>
    );
  }
}

export default App;
