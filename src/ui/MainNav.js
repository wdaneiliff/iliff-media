import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './MainNav.css';

export default class MainNav extends Component {

  hamburgerClickHandler() {
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
  }

  render() {

    return (
      <header>
          <h1 className="iliff-media"><Link to="/">iliff Media</Link></h1>
            <div onClick={this.hamburgerClickHandler} className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
      </header>
    )
  }
}
