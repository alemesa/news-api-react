import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {



    render() {
        return (
        <div href="#section1" className="footerSection">

        <div className="social">
        
        <a href="https://github.com/alemesa1991" target="_blank"><i className="fa fa-2x fa-github" aria-hidden="true"></i></a>   
        <a href="https://twitter.com/alelikesramen" target="_blank"><i className="fa fa-2x fa-twitter" aria-hidden="true"></i></a> 
        <a href="https://www.linkedin.com/in/alejandro-mesa-suarez-604916a2/" target="_blank"><i className="fa fa-2x fa-linkedin" aria-hidden="true"></i></a>
        <a id="repo" href="https://github.com/alemesa1991/React-News-App" target="_blank">Repo <i className="fa fa-code-fork" aria-hidden="true"></i> </a>
        
        </div>
      
        <a className="smoothScroll" href="#"><i className="fa fa-2x fa-arrow-up" aria-hidden="true"></i></a>
            
        <span className="coffee">
        Made with <i className="fa fa-coffee" aria-hidden="true"></i>
        </span>    
        
        </div>
        );
    }

}

export default Footer;
