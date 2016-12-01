import React, { Component } from 'react';
import logo from './home-guy.png';
import styles from './Home.css';
import downArrow from './downArrow.png';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
    return (
      <section className="home-container">
        <img src={logo} className="logo" />
        <Link to="#about"><img src={downArrow} className="downArrow bounce"/></Link>
      </section>
    );
  }
}
