import React, { Component } from 'react';
import styles from './About.css';
import portrait from './portrait-cartoon.png';
import aboutGuy from './portrait-cartoon.png';

export default class About extends Component {
  render() {
    return (
      <section ref="about-section" className="about-section-container">

        <div className="content-container">
          <h1>About</h1>
        <div className="content">
          <p>Iliff Media is a creative design and development agency created by Dane Iliff.
             It specializes in website design, development, logo creation, character
             illustration, web animation, HTML5 banner ads and more. Let's work together to build
             you a personal and creative digital experience.
         </p>
        </div>
      </div>
      <div className="about-pic-container">

        <img src={portrait}/>


      </div>
    </section>
    );
  }
}
