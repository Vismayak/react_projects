import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  
  state = {
    persons:[
      {name: "Visu",age: 23},
      {name: "Morty", age :12},
      {name: "Rick",age: 65}
    ]
  }
  
  buttonHit = false;
  
  switchNameHandler = () =>{
    if (!this.buttonHit){
    this.setState({
      persons:[
        {name: "Visu",age: 23},
        {name: "Bonnie", age :32},
        {name: "Clyde",age: 30}
      ]
    })
    this.buttonHit = true
    }
    else{
      this.setState({
        persons:[
          {name: "Visu",age: 23},
          {name: "Morty", age :12},
          {name: "Rick",age: 65}
        ]
      })
      this.buttonHit = false
    }
  }
  render() {
    return (
      <div className="App">
        <h1> Hi, I am a React app </h1>
        <p>This is really working</p>
        <button onClick = {this.switchNameHandler}> Switch State</button>
        <Person name ={this.state.persons[1].name} age = {this.state.persons[1].age} click = {this.switchNameHandler}>  Passion: F1</Person>
      </div>
    );
  }
}

export default App;
