import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
        <div className="footerSection">

        <div className="social">
        
        <a href=""><i className="fa fa-2x fa-github" aria-hidden="true"></i></a>   
        <a href=""><i className="fa fa-2x fa-twitter" aria-hidden="true"></i></a> 
        <a href=""><i className="fa fa-2x fa-linkedin" aria-hidden="true"></i></a>
        
        </div>
        
            
        <span class="coffee">
        Made with <i className="fa fa-coffee" aria-hidden="true"></i>
        </span>    
        
        </div>
        );
    }

}

export default Footer;
