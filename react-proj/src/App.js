import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I am a React app </h1>
        <p>This is really working</p>
        <Person name ="Vismayak" age = "23">  Passion: F1</Person>
      </div>
    );
  }
}

export default App;
