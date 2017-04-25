import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
     // value:'bbc-news'
     value: this.props.default,
    }
    this.handleChange = this.handleChange.bind(this);

    this.apiUrl = 'https://newsapi.org/v1/sources?language=en'
  }

   handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }

  
  // Lifecycle method
  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({data:res.data.sources});
        //console.log(this.state.data);
        console.log(this.state.value);
      });
  }



  render() {
    return (
      <div className="">

      <h2>Search Component</h2>
      <select value={this.state.value} onChange={this.handleChange}>>
       
      
        {
            this.state.data.map((outlet,i) =>{
                return <option key={i} value={outlet.id}>{outlet.name}</option>
            })
        }
        
      </select>

      </div>
    );
  }
}

export default Search;
