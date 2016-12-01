import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './MainNav.css';

export default class MainNav extends Component {

  hamburgerClickHandler() {
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
  }

  render() {

    return (
      <header className="header">
          <h1 className="iliff-media"><Link to="/">iliff Media</Link></h1>
            <div onClick={this.hamburgerClickHandler} className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav>
              <ul className="nav-container">
                <li><h3 className="about-link"><Link to="/about"><span>About</span></Link></h3></li>
                <li><h3 className="work-link"><Link to="/work"><span>Work</span></Link></h3></li>
                <li><h3 className="contact-link"><Link to="/contact"><span>Contact</span></Link></h3></li>
              </ul>
            </nav>
      </header>
    )
  }
}
