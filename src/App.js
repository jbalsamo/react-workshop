import React, { Component } from 'react';
import Header from './components/Header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header name="Joe's Torture Chamber">
       <div className="center-tag">Horror knows no bounds!</div>
       </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
