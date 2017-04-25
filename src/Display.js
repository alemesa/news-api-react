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
     
}

  

  // Lifecycle method
  componentWillMount(){
    this.getArticles(this.props.default);
   
  }

   componentWillReceiveProps(nextProps) {


    if (nextProps !== this.props) {


        this.setState({

          url: `https://newsapi.org/v1/articles?source=${nextProps.default}&apiKey=2d39f4a218f64820a010ae5523437bc4`,

        });

 this.getArticles(nextProps.default);

    }
    console.log(this.props);
    console.log(nextProps);
    
}

//Function to convert ISO
convertDate(date){
  var time = new Date(date);
  var year = time.getFullYear();
  var day = time.getDate();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var month = time.getMonth() + 1;
  var composedTime = day + "/" + month + "/" + year + " | " + hour + ":" + minute;
  return composedTime;
}

getArticles(url){
    
    const apiKey = "2d39f4a218f64820a010ae5523437bc4";
      // Make HTTP reques with Axios
      axios.get(`https://newsapi.org/v1/articles?source=${url}&apiKey=${apiKey}`)
        .then((res) => {
          const articles = res.data.articles;
          // Set state with result
          console.log(articles);
          this.setState({ articles: articles });
        }).catch((error) => {
          console.log(error);
        });

  }


  render() {
    return (
      <div className="">

      <h2>Display Component</h2>
       
        {
            this.state.articles.map((news,i) =>{
                return <div className="singleNew" key={i} ><h4><a href={news.url} target="_blank">{news.title}</a> </h4>
                <h6>{news.author} |  {this.convertDate(news.publishedAt)}</h6>
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
