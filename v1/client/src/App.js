import React, { Component } from 'react';
import './App.css';
import UsersContainer from './containers/UsersContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
      <UsersContainer/>
      </div>
    );
  }
}


export default App;