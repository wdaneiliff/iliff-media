import React, { Component } from 'react';
import styles from './Work.css';
import logo from './work-guy.png';
// import Link from 'react-router';

export default class Work extends Component {
  render() {
    return (
      <section className="work-section-container">
        <h1>Work</h1>

        <div className="work-content-container">
          <p>Featured Projects</p>

           <div className="featured-projects-container">
              <a target="_blank" href="https://chocolatesun.com/">
                <div className="project p1">
                  <div className="hover">
                    <h3>Chocolate Sun</h3>
                  </div>
                </div>
              </a>
              <a target="_blank" href="http://teodopm.wpengine.com/">
                <div className="project p2">
                  <div className="hover">
                    <h3>A Journey to Center</h3>
                  </div>
                </div>
              </a>
              <a target="_blank" href="http://www.reachk2.com/">
                <div className="project p3">
                  <div className="hover">
                    <h3>K2 Consulting</h3>
                  </div>
                </div>
              </a>
              <a target="_blank" href="http://mickomanic.info/">
                <div className="project p4">
                  <div className="hover">
                    <h3>Ohi Design</h3>
                  </div>
                </div>
              </a>
              <a target="_blank" href="https://exquisitedentistryla.com/">
                <div className="project p5">
                  <div className="hover">
                    <h3>Exquisite Dentistry</h3>
                  </div>
                </div>
              </a>
          </div>
        </div>
      </section>
    );
  }
}
