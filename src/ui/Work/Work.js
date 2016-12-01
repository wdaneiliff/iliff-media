import React, { Component } from 'react';
import styles from './Work.css';
import logo from './work-guy.png';

export default class Work extends Component {
  render() {
    return (
      <div>
        <div className="left-work-container">

        </div>
        <div className="work-img-container">
          <img src={logo} />
        </div>
        <div className="right-work-container">

        </div>
      </div>
    );
  }
}
