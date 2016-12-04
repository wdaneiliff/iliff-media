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
          <p>Mustache wayfarers cred kitsch, quinoa bicycle rights cliche
            dreamcatcher ennui snackwave. Heirloom umami shabby chic squid,
            tumeric intelligentsia flexitarian fashion axe copper mug lo-fi
            activated charcoal vice. Selvage man braid air plant, succulents
            health goth tumeric cold-pressed bespoke humblebrag shabby chic
            austin tilde thundercats church-key freegan.</p>
        </div>
      </div>
    </section>
    );
  }
}
