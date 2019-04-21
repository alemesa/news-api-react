import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display.js';
import './styles/Display.css';
import Outlet from './Outlet.js';
import './styles/Outlet.css';

class Search extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
      count: 0,
      // value:'bbc-news'
      value: this.props.default
    };
    this.handleChange = this.handleChange.bind(this);

    this.apiUrl =
      'https://newsapi.org/v2/sources?language=en&apiKey=13235f0d880743ba9e900cbe25cea29e';
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  // Lifecycle method
  componentWillMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl).then(res => {
      // Set state with result
      this.setState({ data: res.data.sources });
      this.setState({ count: res.data.sources.length });
      //console.log(this.state.data);
      console.log(this.state.value);
    });
  }

  render() {
    var style = {
        textAlign:'center'
    };

    return (
      <div className="">
        <div className="jumbotron">
          <div className="modal-body row">
            <div className="col-sm-4">
              <div style={style}>
                <h4 style={style}>Select from {this.state.count} News Outlets</h4>
                <p className="lead"> BBC-World, Google News, Boolmberg And Many other</p>
                <p className="lead"> </p>
                <select style={style} value={this.state.value} onChange={this.handleChange}>
                {this.state.data.map((outlet, i) => {
                  return (
                    <option key={i} value={outlet.id}>
                      {outlet.name}
                      </option>
                    );
                  })}
                  </select>
                </div>
              </div>
          <div className="col-sm-8">
          <Outlet default={this.state.value} />
          </div>
          </div>
        </div>


        <Display default={this.state.value}/>
      </div>
    );
  }
}

export default Search;
