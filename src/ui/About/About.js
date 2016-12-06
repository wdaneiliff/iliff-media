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
          <p>Hey! I'm Dane and Iliff Media is a creative design and development
            agency that I started in order to help people build or re-imagine their
            online presence. We have experience in
            designing and developing personal websites, ecommerce businesses and can provide personal illustration to any project.
            All illustrations are handcrafted by Dane.  </p>
        </div>
      </div>
    </section>
    );
  }
}
