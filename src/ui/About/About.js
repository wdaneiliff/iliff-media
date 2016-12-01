import React, { Component } from 'react';
import styles from './About.css';
import logo from './about-guy.png';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="content-container">
        <div className="content">
          <h1>About us!</h1>
          <p>la la la la la la la la la la</p>
        </div>
      </div>
      <div className="about-img-container">
        <img src={logo} />
      </div>
    </div>
    );
  }
}
