import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';
import Display from './Display.js';
import './Display.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Title Component</h3>
          <h2>Welcome to React News API</h2>
          <p>Using <a href="">React</a> and <a href="">News API</a> </p>
        </div>
        <Search/>
        <Display/>
      </div>
    );
  }
}

export default App;
