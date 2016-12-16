import React, { Component } from 'react';
import styles from './About.css';
import logo from './about-guy.png';

export default class About extends Component {
  render() {
    return (
      <section ref="about-section" className="about-section-container">
        <h1>About</h1>
        <div className="about-img-container">
          <img src={logo} />
        </div>
        <div className="content-container">
        <div className="content">
          <p>Iliff Media is a creative design and development agency
             specializing in website design, development, logo creation, character
             illustration, web animation, HTML5 banner ads. Let's work together to build
             you a personal and creative digital experience. 
         </p>
        </div>
      </div>
    </section>
    );
  }
}
