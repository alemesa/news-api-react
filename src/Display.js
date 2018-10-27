import React, { Component } from 'react';
import axios from 'axios';
import './Display.css';
import { Row, Col, Container } from 'reactstrap';
import Post from './Post';

class Display extends Component {
  state = {
      articles: [],
      numberOfArticles: '',
    }


  // Lifecycle method
  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        url: `https://newsapi.org/v2/top-headlines?sources=${
          nextProps.default
        }&apiKey=ef90a7354e49437abcd71a8748c9cfd7`
      });

      this.getArticles(nextProps.default);
    }
  }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime =
      day +
      '/' +
      month +
      '/' +
      year +
      ' | ' +
      hour +
      ':' +
      (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  getArticles(url) {
    const apiKey = 'ef90a7354e49437abcd71a8748c9cfd7';
    // Make HTTP reques with Axios
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=${apiKey}`
      )
      .then(res => {

        const articles = res.data.articles;
        const Updatedarticles = articles.map(article => {
          return {
            ...article,
          }
        });
        // Set state with result
        console.log(articles);
        console.log(articles.length);
        this.setState({ numberOfArticles: articles.length })
        this.setState({ articles: Updatedarticles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  sayHello = () => {
    console.log('Aloha');
  }

  createRows = () => {

    const posts = this.state.articles.map(post => {
      console.log('Insider');
      return <Post
        title = 'Hello'
         />;
    });

    let rows = []
    let column = []
    for (let i = 0; i < this.state.articles.length; i+=3) {
      console.log(this.state.articles[i]);
      let column = []
      column.push(<div key={(i).toString()}> {this.state.articles[i]}</div>)
      rows.push(<div key={"r"+ i.toString() }>{column} </div>)

    }
    return rows
  }


  render() {
    return (
    <div className="cardsContainer">
      
      {this.state.articles.map((news, i) => {
        return (
          <Post
                key={i}
                title = {news.title}
                description = {news.description}

          />
        );
      })}
    </div>
  );


  }

}

export default Display;
