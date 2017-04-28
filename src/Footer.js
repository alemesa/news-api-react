import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
        <div className="footerSection">

        <div className="social">
        
        <a href="https://github.com/alemesa1991"><i className="fa fa-2x fa-github" aria-hidden="true"></i></a>   
        <a href="https://twitter.com/alelikesramen"><i className="fa fa-2x fa-twitter" aria-hidden="true"></i></a> 
        <a href="https://www.linkedin.com/in/alejandro-mesa-suarez-604916a2/"><i className="fa fa-2x fa-linkedin" aria-hidden="true"></i></a>
        <a href="https://github.com/alemesa1991/React-News-App">Github Repo</a>
        
        </div>
        
        <a href="#"><i className="fa fa-2x fa-arrow-up" aria-hidden="true"></i></a>
            
        <span class="coffee">
        Made with <i className="fa fa-coffee" aria-hidden="true"></i>
        </span>    
        
        </div>
        );
    }

}

export default Footer;
