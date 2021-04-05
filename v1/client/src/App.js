import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersContainer from './containers/UsersContainer'

class App extends Component {

  render() {
    return (
      <div className="App" styles="height: 100%;">
        <h1>Inside App</h1>
        <UsersContainer/>
        <h1>Outside and After UsersContainer</h1>
      </div>
    );
  }
}


export default App;