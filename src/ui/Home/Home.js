import React, { Component } from 'react';
import logo from './home-guy.png';
import styles from './Home.css';
import downArrow from './downArrow.png';
import $ from 'jquery';
import Velocity from 'velocity-animate';
import { Link } from 'react-router';
import About from '../About/About';

export default class Home extends Component {

  componentDidMount() {

    let aboutHeight = $(".about-section-container").offset().top;
    let workHeight = $(".work-section-container").offset().top;

    window.addEventListener("resize", () => {
      aboutHeight = $(".about-section-container").offset().top;
      workHeight = $(".work-section-container").offset().top;
    });

    $(window).scroll(() => {

      if($(document).scrollTop() >= $(".about-section-container").offset().top ) {
        $('.about-section-container').addClass('fixedAbout');
        $('.home-container').addClass('addPaddingForAbout');
        $('.header').addClass('white');
      }
      if($(document).scrollTop() < aboutHeight ) {
        $('.about-section-container').removeClass('fixedAbout');
        $('.header').removeClass('white');
        // $('.home-container').removeClass('addPaddingForAbout');
      }

      if($(document).scrollTop() >= $(".work-section-container").offset().top ) {
        $(".work-section-container").addClass('revealContact');
        $(".contact-section-container").addClass('fixedContact');
      }

      if($(document).scrollTop() < workHeight ) {
        $(".work-section-container").removeClass('revealContact');
        $(".contact-section-container").removeClass('fixedContact');
      }


    })
  }

  scrollDown() {
    $('html,body').animate({
        scrollTop: $(".about-section-container").offset().top},
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
