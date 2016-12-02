import React, { Component } from 'react';
import styles from './About.css';
import logo from './about-guy.png';

export default class About extends Component {
  render() {
    return (
      <section ref="about-section" className="about-section-container">
        <div className="about-img-container">
          <img src={logo} />
        </div>
        <div className="content-container">
        <div className="content">
          <h1>About Us</h1>
        </div>
      </div>
    </section>
    );
  }
}
