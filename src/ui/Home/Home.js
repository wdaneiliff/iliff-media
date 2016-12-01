import React, { Component } from 'react';
import logo from './home-guy.png';
import styles from './Home.css';

export default class About extends Component {
  render() {
    return (
      <img src={logo} className="logo" />
    );
  }
}
