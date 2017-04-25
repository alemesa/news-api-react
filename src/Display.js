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
    //&sortBy=latest
    this.apiUrl = 'https://newsapi.org/v1/articles?source=cnn&apiKey=2d39f4a218f64820a010ae5523437bc4'
    
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
                return <div className="singleNew" key={i} ><h4><a href={news.url} target="_blank">{news.title}</a> </h4>
                <h6>{news.author} | {news.publishedAt}</h6>
                                    <p>{news.description}</p>
                                    <img src={news.urlToImage} alt=""/>
                        <hr></hr></div>
            })
        }
      
     

      </div>
    );
  }
}

export default Display;
