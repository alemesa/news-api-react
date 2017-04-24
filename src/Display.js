import React, { Component } from 'react';
import axios from 'axios';

class Display extends Component {
    constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      articles: []
    }
    this.apiUrl = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=2d39f4a218f64820a010ae5523437bc4'
    //this.apiUrl = 'https://newsapi.org/v1/sources?language=en'
}
  // Lifecycle method
  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({articles:res.data.articles});
        console.log(this.setState.articles);
      });
  }



  render() {
    return (
      <div className="">

      <h2>Display Component</h2>
       
        {
            this.state.articles.map((news,i) =>{
                return <div key={i} ><h5>{news.title}</h5><p>{news.description}</p></div>
            })
        }
      
     

      </div>
    );
  }
}

export default Display;
