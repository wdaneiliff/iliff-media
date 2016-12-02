import React, { Component } from 'react';
import logo from './home-guy.png';
import styles from './Home.css';
import downArrow from './downArrow.png';
import $ from 'jquery';
import Velocity from 'velocity-animate';
import { Link } from 'react-router';
import About from '../About/About';

export default class Home extends Component {

  scrollDown() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
  }

  render() {
    return (
      <div>
        <section className="home-container">
          <img src={logo} className="logo" />
          <span onClick={this.scrollDown}><img src={downArrow} className="downArrow bounce"/></span>
        </section>
        <div className="about">
          <About/>
        </div>
      </div>
    );
  }
}
