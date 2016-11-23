import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Footer.css';

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <nav>
          <div className="nav-container">
            <h3 className="about-link"><Link to="/about"><span>About</span></Link></h3>
            <h3 className="work-link"><Link to="/work"><span>Work</span></Link></h3>
            <h3 className="contact-link"><Link to="/contact"><span>Contact</span></Link></h3>
          </div>
        </nav>
      </footer>
    )
  }
}
