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
    const homeHeight = $('.home-container').height() + 200;
    const aboutHeight = $('.about').height();
    const workHeight = $('.work-section-container').height();
    console.log(homeHeight + aboutHeight + workHeight);
    console.log('home: ' + homeHeight);
    console.log('about: ' + aboutHeight);

    $(window).scroll(() => {
      console.log(
         $(document).scrollTop()
      );

      if($(document).scrollTop() > homeHeight ) {
        $('.about').addClass('fixedAbout');
        $('.home-container').addClass('addPaddingForAbout');
      }

      if($(document).scrollTop() < homeHeight ) {
        $('.about').removeClass('fixedAbout');
        $('.home-container').removeClass('addPaddingForAbout');
      }


      // if($(document).scrollTop() > (homeHeight + aboutHeight) ) {
      //   $('.home-container').addClass('addPaddingForWork');
      //   $('.work-section-container').addClass('fixedWork');
      // }



      // if($(document).scrollTop() > 1665 ) {
      //   $('.home-container').addClass('addPaddingForWork');
      //   $('.work-section-container').addClass('fixedWork');
      // }
    })
  }

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
