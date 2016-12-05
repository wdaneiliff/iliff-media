import React, { Component } from 'react';
import styles from './About.css';
import logo from './about-guy.png';

export default class About extends Component {
  render() {
    return (
      <section ref="about-section" className="about-section-container">
        <h1>About Us</h1>
        <div className="about-img-container">
          <img src={logo} />
        </div>
        <div className="content-container">
        <div className="content">
          <p>Iliff Media is a creative design and development agency created by Dane Iliff. We service
            businesses and professionals who need help building or re-imagining their online
            presence.  All illustrations are also created by Dane.  </p>
        </div>
      </div>
    </section>
    );
  }
}
