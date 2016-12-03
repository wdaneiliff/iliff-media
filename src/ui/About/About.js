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
          <p>Mustache wayfarers cred kitsch, quinoa bicycle rights cliche
            dreamcatcher ennui snackwave. Heirloom umami shabby chic squid,
            tumeric intelligentsia flexitarian fashion axe copper mug lo-fi
            activated charcoal vice. Selvage man braid air plant, succulents
            health goth tumeric cold-pressed bespoke humblebrag shabby chic
            austin tilde thundercats church-key freegan. Authentic polaroid
            synth, tumblr tilde retro iPhone. Church-key woke +1 godard, VHS
            prism keffiyeh tattooed quinoa art party shabby chic snackwave man
            bun. Heirloom humblebrag sustainable, woke kale chips sartorial
            microdosing venmo fingerstache air plant copper mug. Brooklyn umami
             biodiesel hella lo-fi.</p>
        </div>
      </div>
    </section>
    );
  }
}
