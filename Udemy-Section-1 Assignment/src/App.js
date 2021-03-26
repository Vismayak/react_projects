import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state= {
    name: "Visu"
  };

  nameChangeHandler = (event)=>{
    this.setState({
      name: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <UserInput changer = {this.nameChangeHandler} currentName = {this.state.name}/>
        <UserOutput 
        name = {this.state.name} 
        age = '23' 
         />
      </div>
    );
  }
}

export default App;
