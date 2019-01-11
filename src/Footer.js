import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footerSection">
        <div className="social">
          <a href="https://github.com/alemesa" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-github" aria-hidden="true" />
          </a>
          <a href="https://twitter.com/alelikesramen" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-twitter" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/alejandro-mesa-suarez-604916a2/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-linkedin" aria-hidden="true" />
          </a>
          <a id="repo" href="https://github.com/alemesa/React-News-App" target="_blank" rel="noopener noreferrer">
            Repo
            <i className="fa fa-code-fork" aria-hidden="true" />
          </a>
        </div>

        <a className="smoothScroll" href="#">
          <i className="fa fa-2x fa-arrow-up" aria-hidden="true" />
        </a>

        <span className="coffee">
          Made with
          <i className="fa fa-coffee" aria-hidden="true" />
        </span>
      </div>
    );
  }
}

export default Footer;
