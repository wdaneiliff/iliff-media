import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './MainNav.css';
import $ from 'jquery';


export default class MainNav extends Component {

  hamburgerClickHandler() {
    const hamburger = document.querySelector('.hamburger');
    const sideNav = document.querySelector('.nav-container');
    hamburger.classList.toggle('open');
    sideNav.classList.toggle('showNav');
  }

  scrollToTop() {
    $('html,body').animate({
        scrollTop: $('body').offset().top},
        'slow');
  }

  scrollToAbout() {
      $('html,body').animate({
          scrollTop: $(".about-section-container").offset().top},
          'slow');
  }

  scrollToWork() {
      $('html,body').animate({
          scrollTop: $(".work-section-container").offset().top},
          'slow');
  }

  scrollToContact() {
    $('html,body').animate({
        scrollTop: $(".contact-section-container").offset().top},
        'slow');
  }

  render() {

    return (
      <header className="header">
        <div className="topHeader">
          <h1 className="iliff-media"><span onClick={this.scrollToTop}>iliff Media</span></h1>
            <div onClick={this.hamburgerClickHandler} className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
            <nav>
              <ul className="nav-container">
                <li><h3 className="about-link"><span onClick={this.scrollToAbout}><span>About</span></span></h3></li>
                <li><h3 className="work-link"><span onClick={this.scrollToWork}><span>Work</span></span></h3></li>
                <li><h3 className="contact-link"><span onClick={this.scrollToContact}><span>Contact</span></span></h3></li>
              </ul>
            </nav>
      </header>
    )
  }
}
