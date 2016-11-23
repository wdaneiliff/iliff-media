import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './MainNav.css';

export default class MainNav extends Component {

  render() {
    return (
      <header>
          <h1 className="iliff-media"><Link to="/">iliff Media</Link></h1>
      </header>
    )
  }
}
