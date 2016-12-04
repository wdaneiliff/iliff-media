import React, { Component } from 'react';
import styles from './Work.css';
import logo from './work-guy.png';

export default class Work extends Component {
  render() {
    return (
      <section className="work-section-container">
        <h1>Our Work</h1>

        <div className="work-content-container">
          <p>Mustache wayfarers cred kitsch, quinoa bicycle rights cliche
            dreamcatcher ennui snackwave. Heirloom umami shabby chic squid,
            tumeric intelligentsia flexitarian fashion axe copper mug lo-fi
            activated charcoal vice.</p>
        </div>
        <div className="work-img-container">
          <img src={logo} />
        </div>
      </section>
    );
  }
}
