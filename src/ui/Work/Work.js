import React, { Component } from 'react';
import styles from './Work.css';
import logo from './work-guy.png';
import k2 from './k2.png';
import ohi from './ohi.png';
import exDen from './ex-den.png';
import chocSun from './choc-sun.png';
// import Link from 'react-router';

export default class Work extends Component {
  render() {
    return (
      <section className="work-section-container">
        <h1>Work</h1>

        <div className="work-content-container">
          <p>I have partnered with a various number of professionals and businesses.
             Some of my most proud clients include: </p>
          <ul>
            <li><a target="_blank" href="http://reachk2.com/"><img src={k2}/></a></li>
            <li><a target="_blank" href="https://chocolate-sun-website.myshopify.com/"><img src={chocSun}/></a></li> <br/>
            <li><a target="_blank" href="https://mickomanic.info"><img src={ohi}/></a></li>
            <li><a target="_blank" href="https://exquisitedentistryla.com/"><img src={exDen}/></a></li>
          </ul>
        </div>
        <div className="work-img-container">
          <img src={logo} />
        </div>
      </section>
    );
  }
}
