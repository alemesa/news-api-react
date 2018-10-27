import React, {Component} from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';
import Footer from './Footer.js';
import './Footer.css';
import logo from './images/react.svg';
import news from './images/news.png';

class App extends Component {
  render() {
    return (
      <div className="app">
      <nav className="navbar navbar-expand-sm navbar-light bg-dark mb-3">
        <div className="container">
            <a className="navbar-brand" href="#"><img className="appLogo" src={logo} alt="React Logo"/></a>
            <div className="title">
              <h1>News Around the World</h1>
              <h4>Powered by
                <a href="https://newsapi.org/"> News API </a>🔥 </h4>
            </div>
            <img className="scriptLogo" src={news} alt="Javascript Logo"/>
        </div>
        </nav>

        <Search default="bbc-news"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
