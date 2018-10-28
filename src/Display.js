import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import { Row, Col, Container } from 'reactstrap';



class Display extends Component {

    state = {
        posts: [],
        selectedPostId: null,
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
          }&apiKey=f47dd464d0f64fe4b27bf0dd19919881`
        });
        console.log("this is nextprops "  + nextProps.default);
        this.getArticles(nextProps.default);
      }
    }



    getArticles(url) {
      const apiKey = 'f47dd464d0f64fe4b27bf0dd19919881';
      // Make HTTP reques with Axios
      axios.get(
        `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=${apiKey}` )
          .then( response => {
              console.log(response.data)
              const posts = response.data.articles.slice(0,18);
              const updatedPosts = posts.map(post => {
                   return {
                      ...post,
                      newsid: url,

                  }
              });
              // Set state with result
              this.setState({posts: updatedPosts});
              console.log(updatedPosts);
          })
          .catch(error => {
            console.log(error);
          });
    }

    createRows = () => {

        const posts = this.state.posts.map(post => {
            return <Post
                //key={post.id}
                header={post.newsid}
                title={post.title}
                description={post.description}
                img={post.urlToImage}
                url={post.url}
                newsDate={post.publishedAt}
                author= {post.author}
                random_indicator={post.sentiment} />;
        });

        let rows = []
        for (let i = 0; i < posts.length; i+=2) {
        let children = []
            children.push(<Col  className="col-md-6" key={(i).toString()} >{posts[i]} </Col>)
            children.push(<Col  className="col-md-6"  key={(i+1).toString()}> {posts[i+1]}</Col>)
            rows.push(<Row className="row-mb-2" key={"r"+ i.toString() }>{children} </Row>)

        }
        return rows
      }


    render () {
        return (
            <div>
                <section className="Posts">

                        {this.createRows()}
                </section>
            </div>
        );
    }
}

export default Display;
