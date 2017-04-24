import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
    this.apiUrl = 'https://newsapi.org/v1/sources?language=en'
  }
  // Lifecycle method
  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({data:res.data.sources});
        console.log(this.setState.data);
      });
  }



  render() {
    return (
      <div className="">

      <h2>Search Component</h2>
      <select>
       
      
        {
            this.state.data.map((outlet,i) =>{
                return <option key={i} id={outlet.id} value={outlet.name}>{outlet.name}</option>
            })
        }
        
      </select>

      </div>
    );
  }
}

export default Search;
