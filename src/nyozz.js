import React, { Component } from 'react';
import axios from 'axios';
import Post from './NEwscard';
import { Row, Col, Container } from 'reactstrap';



class Nyooz extends Component {

    state = {
        posts: [],
        selectedPostId: null,
      }

    componentDidMount () {
        axios.get( 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f47dd464d0f64fe4b27bf0dd19919881' )
            .then( response => {
                console.log(response.data)
                const posts = response.data.slice(0,18);
                const updatedPosts = posts.map(post => {

                    if (post.imgurl === null){
                      post.imgurl= 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180';
                    }
                    return {
                        ...post,
                        author: 'Max',
                        todate: '18th Augest 2018',
                        //random_indicator: Math.random() * (2 - (-1)) + (-1)
                        //sentiment: random_indicator(math.random())
                    }
                });
                this.setState({posts: updatedPosts});
                console.log(updatedPosts);
            } );

    }


    postSelectedHandler = (title) => {
        this.setState({selectedPostId: title});
    }

    createRows = () => {
        /*
        * Creates bootstrap rows in terms of grid format
        * <Row>
        *   <Col /> <Col/> <Col/>
        * </Row>
        *  tutorial link : https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778
        * */

        const posts = this.state.posts.map(post => {
            return <Post
                //key={post.id}
                title={post.title}
                description={post.description}
                img={post.imgurl}
                url={post.url}
                random_indicator={post.sentiment}
                clicked={() => this.postSelectedHandler(post.title)} />;
        });

        let rows = []
        for (let i = 0; i < posts.length; i+=3) {
        let children = []
            children.push(<Col  key={(i).toString()} sm="12" md={{ size: 4}}>{posts[i]} </Col>)
            children.push(<Col  key={(i+1).toString()} sm="12" md={{ size: 4}}> {posts[i+1]}</Col>)
            children.push(<Col  key={(i+2).toString()} sm="12" md={{ size: 4}}>  {posts[i+2]}  </Col>)
            rows.push(<Row key={"r"+ i.toString() }>{children} </Row>)

        }
        return rows
      }


    render () {
        return (
            <div>
                <section className="Posts">
                    <Container>
                        {this.createRows()}
                    </Container>
                </section>
            </div>
        );
    }
}

export default Nyooz;
